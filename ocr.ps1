# Genshin Companion - Windows built-in OCR helper (Windows.Media.Ocr, offline, no installs)
# Usage: powershell -NoProfile -ExecutionPolicy Bypass -File ocr.ps1 -ImagePath "C:\path\shot.png"
# Output: JSON array of lines: [{ "text": "...", "x": 0, "y": 0, "w": 0, "h": 0 }, ...]
param([Parameter(Mandatory = $true)][string]$ImagePath)

$ErrorActionPreference = "Stop"
Add-Type -AssemblyName System.Runtime.WindowsRuntime
$null = [Windows.Storage.StorageFile, Windows.Storage, ContentType = WindowsRuntime]
$null = [Windows.Media.Ocr.OcrEngine, Windows.Foundation, ContentType = WindowsRuntime]
$null = [Windows.Graphics.Imaging.BitmapDecoder, Windows.Graphics, ContentType = WindowsRuntime]

$asTaskGeneric = ([System.WindowsRuntimeSystemExtensions].GetMethods() | Where-Object {
    $_.Name -eq 'AsTask' -and $_.GetParameters().Count -eq 1 -and
    $_.GetParameters()[0].ParameterType.Name -eq 'IAsyncOperation`1' })[0]

function Await($op, [Type]$resultType) {
  $task = $asTaskGeneric.MakeGenericMethod($resultType).Invoke($null, @($op))
  $task.Wait() | Out-Null
  return $task.Result
}

$file    = Await ([Windows.Storage.StorageFile]::GetFileFromPathAsync((Resolve-Path $ImagePath).Path)) ([Windows.Storage.StorageFile])
$stream  = Await ($file.OpenAsync([Windows.Storage.FileAccessMode]::Read)) ([Windows.Storage.Streams.IRandomAccessStream])
$decoder = Await ([Windows.Graphics.Imaging.BitmapDecoder]::CreateAsync($stream)) ([Windows.Graphics.Imaging.BitmapDecoder])
$bitmap  = Await ($decoder.GetSoftwareBitmapAsync()) ([Windows.Graphics.Imaging.SoftwareBitmap])

$engine = [Windows.Media.Ocr.OcrEngine]::TryCreateFromUserProfileLanguages()
if ($null -eq $engine) { $engine = [Windows.Media.Ocr.OcrEngine]::TryCreateFromLanguage([Windows.Globalization.Language]::new("en-US")) }
$result = Await ($engine.RecognizeAsync($bitmap)) ([Windows.Media.Ocr.OcrResult])

$lines = @()
$words = @()
foreach ($line in $result.Lines) {
  $minX = 99999; $minY = 99999; $maxX = 0; $maxY = 0
  foreach ($w in $line.Words) {
    $r = $w.BoundingRect
    if ($r.X -lt $minX) { $minX = $r.X }
    if ($r.Y -lt $minY) { $minY = $r.Y }
    if (($r.X + $r.Width) -gt $maxX) { $maxX = $r.X + $r.Width }
    if (($r.Y + $r.Height) -gt $maxY) { $maxY = $r.Y + $r.Height }
    $words += [pscustomobject]@{ text = $w.Text; x = [int]$r.X; y = [int]$r.Y; w = [int]$r.Width; h = [int]$r.Height }
  }
  $lines += [pscustomobject]@{ text = $line.Text; x = [int]$minX; y = [int]$minY; w = [int]($maxX - $minX); h = [int]($maxY - $minY) }
}
$stream.Dispose()
$payload = [pscustomobject]@{
    lines = $lines
    words = $words
}
ConvertTo-Json -InputObject $payload -Compress -Depth 4
