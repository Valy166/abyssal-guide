// Static reference data v5.0: EXP curve, themes (with separate Tab, Character, and Card surfaces), hotkey definitions, and Current Event Banners showcase.
window.GC_REF = {
  // Character EXP needed to go from level i+1 to i+2 (index 0 = Lv1 -> Lv2). Sum to Lv90 = 8,362,650.
  expToNext: [1000,1325,1700,2150,2625,3150,3725,4350,5000,5700,6450,7225,8050,8925,9850,10825,11850,12925,14075,15250,
    16500,17775,19125,20525,21975,23475,25025,26625,28300,30000,30650,32250,33875,35550,37250,38975,40750,42575,44425,46300,
    50625,52700,54825,56975,59175,61400,63675,66000,68350,70750,76600,79250,81950,84700,87500,90325,93200,96125,99100,102100,
    108950,112050,115175,118325,121525,124775,128075,131400,134775,138175,148700,152375,156100,159875,163700,167575,171375,175225,179175,183175,
    216225,243025,273100,306800,344600,386950,434425,487625,536000],
  phaseCaps: [20, 40, 50, 60, 70, 80, 90],

  elements: {
    Fire:     { name: "Pyro",    color: "#F50622", prydwen: "Pyro" },
    Water:    { name: "Hydro",   color: "#129CE8", prydwen: "Hydro" },
    Electric: { name: "Electro", color: "#8A12EB", prydwen: "Electro" },
    Grass:    { name: "Dendro",  color: "#75E40A", prydwen: "Dendro" },
    Rock:     { name: "Geo",     color: "#E27B06", prydwen: "Geo" },
    Wind:     { name: "Anemo",   color: "#40CD9F", prydwen: "Anemo" },
    Ice:      { name: "Cryo",    color: "#87D7D9", prydwen: "Cryo" },
    pyro:     { name: "Pyro",    color: "#F50622", prydwen: "Pyro" },
    hydro:    { name: "Hydro",   color: "#129CE8", prydwen: "Hydro" },
    electro:  { name: "Electro", color: "#8A12EB", prydwen: "Electro" },
    dendro:   { name: "Dendro",  color: "#75E40A", prydwen: "Dendro" },
    geo:      { name: "Geo",     color: "#E27B06", prydwen: "Geo" },
    anemo:    { name: "Anemo",   color: "#40CD9F", prydwen: "Anemo" },
    cryo:     { name: "Cryo",    color: "#87D7D9", prydwen: "Cryo" }
  },
  weaponTypes: {
    WEAPON_SWORD_ONE_HAND: "Sword", WEAPON_CLAYMORE: "Claymore", WEAPON_POLE: "Polearm",
    WEAPON_CATALYST: "Catalyst", WEAPON_BOW: "Bow"
  },

  // Current Event Wish Phases & Featured Characters + Signature Weapons Showcase (Sourced & Verified)
  featuredBanners: [
    {
      phaseId: "current_p1",
      status: "active",
      label: "🔥 Current Event Banners (Phase 1 — Active Now)",
      period: "Nov 4, 2026 – Nov 24, 2026",
      endDate: "2026-11-24T16:59:59Z",
      serverEndDates: {
        europe: "2026-11-24T16:59:59Z",
        america: "2026-11-24T22:59:59Z",
        asia: "2026-11-24T09:59:59Z",
        sar: "2026-11-24T09:59:59Z"
      },
      char1: { name: "Mitya", title: "Myriad Patterns Unfold", element: "Electric", rank: 5, role: "Electro Catalyst Main DPS / Off-Field Driver", weapon: "Starsealed Edict", weaponStat: "CRIT DMG +88.2% • 542 Base ATK" },
      char2: { name: "Furina", title: "Chanson of Many Waters", element: "Water", rank: 5, role: "Hydro Archon Universal Fanfare Buffer & Sub-DPS", weapon: "Splendor of Tranquil Waters", weaponStat: "CRIT DMG +88.2% • 542 Base ATK" },
      fourStarsChar: ["Valeriy", "Charlotte", "Rosaria"],
      fourStarsWeap: ["Sacrificial Sword", "The Widsith", "Dragon's Bane", "Rust", "Favonius Greatsword"]
    },
    {
      phaseId: "current_p2",
      status: "upcoming",
      label: "⏳ Current Patch Phase 2 (Upcoming — Starts Nov 24)",
      period: "Nov 24, 2026 – Dec 15, 2026",
      endDate: "2026-12-15T14:59:59Z",
      serverEndDates: {
        europe: "2026-12-15T13:59:59Z",
        america: "2026-12-15T19:59:59Z",
        asia: "2026-12-15T06:59:59Z",
        sar: "2026-12-15T06:59:59Z"
      },
      char1: { name: "Zibai", title: "Harmonious Abundance", element: "Rock", rank: 5, role: "Geo Sword Burst DPS & Crystallize Shielder", weapon: "Uraku Misugiri", weaponStat: "CRIT DMG +88.2% • 542 Base ATK" },
      char2: { name: "Linnea", title: "Ya-hoho! Compendium", element: "Rock", rank: 5, role: "Geo Bow Off-Field Sub-DPS & Coordinator", weapon: "Silvershower Heartstrings", weaponStat: "HP +66.2% • 542 Base ATK" },
      fourStarsChar: ["Chevreuse", "Lan Yan", "Gaming"],
      fourStarsWeap: ["The Stringless", "Favonius Lance", "Sacrificial Fragments", "Favonius Sword", "Rainslasher"]
    },
    {
      phaseId: "chronicled_p1",
      label: "✨ Chronicled Wish & Sovereign Regional Pool",
      period: "Rotating Regional Special Banner",
      isChronicled: true,
      status: "inactive",
      isLiveInGame: false,
      char1: { name: "Neuvillette", title: "Ordainer of Inexorable Judgment", element: "Water", rank: 5, role: "Hydro Sovereign Hypercarry DPS", weapon: "Tome of the Eternal Flow", weaponStat: "CRIT DMG +88.2% • 542 Base ATK" },
      char2: { name: "Xilonen", title: "Ardent Flames Forge the Soul", element: "Rock", rank: 5, role: "Multi-Elemental RES Shred & Healer", weapon: "Peak Patrol Song", weaponStat: "DEF +82.7% • 542 Base ATK" },
      fourStarsChar: ["Fischl", "Xingqiu", "Xiangling"],
      fourStarsWeap: ["Favonius Warbow", "Sacrificial Sword", "The Catch", "Fleuve Cendre Ferryman", "Xiphos' Moonlight"]
    }
  ],

  // Atmospheric backgrounds & theme presets (with separate App Bg, Tabs Bg, Character Bg, and Card Bg)
  themes: {
    celestial: {
      name: "Astral Celestia (Default)",
      accent: "#f0d492", accent2: "#d8a838",
      bg1: "#0c1222", bg2: "#141f38",
      tabBg: "#10182b", charBg: "#16213c", cardBg: "#141d34",
      glow: "rgba(240,212,146,0.16)"
    },
    prydwen: {
      name: "Prydwen Slate",
      accent: "#60a5fa", accent2: "#3b82f6",
      bg1: "#10141e", bg2: "#181e2c",
      tabBg: "#141925", charBg: "#1d2436", cardBg: "#1a2130",
      glow: "rgba(96,165,250,0.15)"
    },
    fontaine: {
      name: "Fontaine Deep Sea",
      accent: "#7dd3fc", accent2: "#0284c7",
      bg1: "#0a1628", bg2: "#122744",
      tabBg: "#0e1f38", charBg: "#163156", cardBg: "#142b4c",
      glow: "rgba(56,189,248,0.16)"
    },
    natlan: {
      name: "Natlan Obsidian Ember",
      accent: "#fb923c", accent2: "#ea580c",
      bg1: "#180f0e", bg2: "#281714",
      tabBg: "#211311", charBg: "#331e1a", cardBg: "#2c1a16",
      glow: "rgba(251,146,60,0.15)"
    },
    inazuma: {
      name: "Inazuma Narukami",
      accent: "#d8b4fe", accent2: "#9333ea",
      bg1: "#140e24", bg2: "#22173b",
      tabBg: "#1b1230", charBg: "#2c1f4d", cardBg: "#261b42",
      glow: "rgba(192,132,252,0.16)"
    },
    sumeru: {
      name: "Sumeru Irminsul",
      accent: "#a3e635", accent2: "#65a30d",
      bg1: "#0d1912", bg2: "#15291d",
      tabBg: "#112218", charBg: "#1c3626", cardBg: "#182f21",
      glow: "rgba(163,230,53,0.14)"
    },
    nodkrai: {
      name: "Nod-Krai Aurora Frost",
      accent: "#a5f3fc", accent2: "#06b6d4",
      bg1: "#0c1721", bg2: "#152736",
      tabBg: "#101f2c", charBg: "#1b3346", cardBg: "#182d3e",
      glow: "rgba(103,232,249,0.16)"
    },
    geo: {
      name: "Liyue Harbor Gold",
      accent: "#fcd34d", accent2: "#d97706",
      bg1: "#17120a", bg2: "#261e11",
      tabBg: "#1f180e", charBg: "#332717", cardBg: "#2b2114",
      glow: "rgba(251,191,36,0.15)"
    },
    anemo: {
      name: "Mondstadt Breeze",
      accent: "#5eead4", accent2: "#14b8a6",
      bg1: "#0b1817", bg2: "#132927",
      tabBg: "#0f211f", charBg: "#193633", cardBg: "#162f2d",
      glow: "rgba(45,212,191,0.15)"
    },
    crimson: {
      name: "Crimson Moon (Arlecchino)",
      accent: "#fda4af", accent2: "#e11d48",
      bg1: "#160b10", bg2: "#26121b",
      tabBg: "#1e0f16", charBg: "#331824", cardBg: "#2b141e",
      glow: "rgba(244,63,94,0.16)"
    },
    abyss: {
      name: "Spiral Abyss Midnight",
      accent: "#c4b5fd", accent2: "#7c3aed",
      bg1: "#080a10", bg2: "#101422",
      tabBg: "#0d101b", charBg: "#171d30", cardBg: "#141929",
      glow: "rgba(139,92,246,0.15)"
    },
    paper: {
      name: "Light (Paimon's Parchment)",
      accent: "#8a6420", accent2: "#b4862f",
      bg1: "#f4efe4", bg2: "#e8dfd0",
      tabBg: "#ebe3d5", charBg: "#fdfbf7", cardBg: "#f9f5ec",
      glow: "rgba(180,134,47,0.14)", light: true
    }
  },

  // App hotkeys
  hotkeys: [
    { id: "toggleOverlay", scope: "global", label: "Show / hide in-game overlay", def: "F8" },
    { id: "ocrScan",       scope: "global", label: "Capture & scan Genshin Bag inventory (OCR + Auto-Update)", def: "Alt+I" },
    { id: "openCompanion", scope: "global", label: "Bring Abyssal Guide window to front", def: "Alt+C" },
    { id: "zoomIn",        scope: "app",    label: "Make the interface bigger", def: "Ctrl+=" },
    { id: "zoomOut",       scope: "app",    label: "Make the interface smaller", def: "Ctrl+-" },
    { id: "zoomReset",     scope: "app",    label: "Reset interface size", def: "Ctrl+0" },
    { id: "focusSearch",   scope: "app",    label: "Focus the active character search box", def: "/" },
    { id: "syncUid",       scope: "app",    label: "Re-sync active UID showcase", def: "Ctrl+R" }
  ]
};
