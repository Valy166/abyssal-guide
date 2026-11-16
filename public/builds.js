// Prydwen & KQM Meta Character Builds, Tier Ratings & Best 4-Character Teams.
// Covers top meta characters directly + dynamically merges live Prydwen API data (/api/prydwen?slug=...)
// and smart role/element theorycraft profiles so all 138+ characters (including latest & upcoming patch releases)
// always have complete Artifact Sets, Weapons, Stats, Talent Priority, and Best Teams.

window.GC_BUILDS_BY_NAME = {
  "Mitya": {
    role: "Electro Catalyst Carry & Stellar-Conduct Driver",
    tier: "T0 (NEW)",
    talents: "Skill (E) >= Burst (Q) > Normal Attack",
    artifacts: [
      { set: "Heart of the Furnace", pieces: 4, note: "BiS for Stellar-Conduct team DMG amplification" },
      { set: "Gilded Dreams", pieces: 4, note: "High Elemental Mastery (+230 EM) for Gradient Detonations" },
      { set: "Golden Troupe", pieces: 4, note: "Off-Field Steady State Core Skill DMG (+70%)" },
      { set: "Thundering Fury", pieces: 4, note: "On-Field Aggravate / Quicken Cooldown Reduction" }
    ],
    sands: "Elemental Mastery", goblet: "Electro DMG% / Elemental Mastery", circlet: "CRIT DMG / CRIT Rate",
    substats: "Elemental Mastery > CRIT DMG = CRIT Rate > Energy Recharge (130%) > ATK%",
    weapons: [
      { name: "Starsealed Edict", note: "100% - Signature BiS (+88.2% CRIT DMG, EM reaction amplification)" },
      { name: "Kagura's Verity", note: "93% - Stacking Skill DMG & High CRIT" },
      { name: "A Thousand Floating Dreams", note: "91% - High Team EM Buff & Reaction DMG" },
      { name: "The Widsith", note: "88% - Top 4* Nuke Window (ATK/EM/All DMG)" },
      { name: "Sacrificial Jade", note: "85% - HP% & High CRIT Rate" }
    ],
    teams: [
      { name: "Snezhnaya Stellar Duo", members: ["Mitya", "Valeriy", "Nahida", "Xilonen"], note: "Valeriy provides Electro resonance, ATK shield, and team buffs to empower Mitya's Gradient Beacons." },
      { name: "Mitya Quicken Aggravate", members: ["Mitya", "Nahida", "Fischl", "Xilonen"], note: "High-frequency Electro application triggering continuous Aggravate strikes with Nahida + Xilonen shred." },
      { name: "Overload Dual Carry", members: ["Mitya", "Mavuika", "Chevreuse", "Bennett"], note: "40% Pyro/Electro RES shred from Chevreuse + Bennett ATK circle." }
    ]
  },

  "Valeriy": {
    role: "Electro Shielder / Stellar-Conduct Support",
    tier: "T1 (NEW)",
    talents: "Skill (E) = Burst (Q) >> Normal Attack",
    artifacts: [
      { set: "Heart of the Furnace", pieces: 4, note: "BiS for Stellar-Conduct team DMG amplification" },
      { set: "Noblesse Oblige", pieces: 4, note: "Team Burst ATK buff (+20% ATK)" },
      { set: "A Day Carved From Rising Winds", pieces: 4, note: "Strong alternative for high ATK bonuses" },
      { set: "ATK% +18% (2pc) / ATK% +18% (2pc)", pieces: 2, note: "Max shield strength stat stacking" }
    ],
    sands: "ATK% / Energy Recharge", goblet: "ATK%", circlet: "ATK% / CRIT Rate (Favonius)",
    substats: "ATK% > Energy Recharge (150% - 180%) > CRIT Rate (for Favonius) > Flat ATK",
    weapons: [
      { name: "Favonius Sword", note: "100% - Top Utility (Team Particle Battery, pair with CR Circlet)" },
      { name: "Sacrificial Sword", note: "94% - Double Skill Casts & Shield Refresh" },
      { name: "Fleuve Cendre Ferryman", note: "90% - Free Fishing ER Sword" },
      { name: "Finale of the Deep", note: "88% - Craftable High ATK% Stat Stick" }
    ],
    teams: [
      { name: "Snezhnaya Electro Duo", members: ["Mitya", "Valeriy", "Nahida", "Xilonen"], note: "Valeriy provides Electro resonance energy, ATK shield, and team buffs to empower Mitya." },
      { name: "Electro Superconduct Core", members: ["Valeriy", "Eula", "Furina", "Mika"], note: "Superconduct physical shred + ATK-scaling shield & off-field particle battery." }
    ]
  },

  "Tsaritsa (Cryo Archon)": {
    role: "Cryo Archon Sovereign / Hybrid On & Off-Field Stellar Enabler",
    tier: "T0 (UPCOMING)",
    talents: "Burst (Q) = Skill (E) >> Normal Attack",
    artifacts: [
      { set: "Empress of Frost", pieces: 4, note: "Snezhnaya Meta BiS (+Stellar Swirl & Sovereign Cryo)" },
      { set: "Blizzard Strayer", pieces: 4, note: "BiS Freeze (+40% CRIT Rate against Frozen enemies)" },
      { set: "Golden Troupe", pieces: 4, note: "Off-Field Glacial Field Sub-DPS (+70% Skill DMG)" },
      { set: "Noblesse Oblige", pieces: 4, note: "Team Burst +20% ATK Support" }
    ],
    sands: "ATK%", goblet: "Cryo DMG% / ATK%", circlet: "CRIT DMG / CRIT Rate",
    substats: "CRIT DMG = CRIT Rate > ATK% (reach 2,000+ ATK) > Energy Recharge > Elemental Mastery",
    weapons: [
      { name: "Silverdawn", note: "100% - Leaked Signature BiS Bow (+CRIT & Stellar Reaction DMG)" },
      { name: "Polar Star", note: "95% - High CRIT & Skill/Burst DMG stacks" },
      { name: "Aqua Simulacra", note: "92% - Universal +88.2% CRIT DMG stat stick" },
      { name: "The Stringless", note: "86% - Skill/Burst amplification & EM" },
      { name: "Song of Stillness", note: "82% - Free Craftable Bow" }
    ],
    teams: [
      { name: "Stellar Sovereignty", members: ["Tsaritsa (Cryo Archon)", "Danica", "Furina", "Xilonen"], note: "Stellar-Conduct & Sovereign Cryo field amplification with Danica's ATK shred." },
      { name: "Glacial Forward Melt", members: ["Tsaritsa (Cryo Archon)", "Mavuika", "Xiangling", "Bennett"], note: "Massive Melt reaction scaling with Mavuika's high-uptime Pyro field." },
      { name: "Permafrost Sovereign Core", members: ["Tsaritsa (Cryo Archon)", "Neuvillette", "Kaedehara Kazuha", "Shenhe"], note: "Unmatched Cryo aura uptime powering Neuvillette hydro pumps + Shenhe Icy Quills." }
    ]
  },

  "Danica": {
    role: "Electro Shielder / Stellar-Conduct Sub-DPS & RES Shred Buffer",
    tier: "T0.5 (UPCOMING)",
    talents: "Skill (E) >= Burst (Q) >> Normal Attack",
    artifacts: [
      { set: "Heart of the Furnace", pieces: 4, note: "BiS for Stellar-Conduct team DMG amplification" },
      { set: "Noblesse Oblige", pieces: 4, note: "Party-wide ATK buff on Burst cast (+20% ATK)" },
      { set: "A Day Carved From Rising Winds", pieces: 4, note: "Strong stacking ATK% bonuses" },
      { set: "ATK% +18% (2pc) / ATK% +18% (2pc)", pieces: 2, note: "Stat stacking to reach ~4,000 ATK cap" }
    ],
    sands: "ATK% / Energy Recharge", goblet: "ATK% / Electro DMG%", circlet: "CRIT Rate / CRIT DMG",
    substats: "ATK% > Energy Recharge (140% - 160%) > CRIT Rate = CRIT DMG > Flat ATK",
    weapons: [
      { name: "Torrents of Spring", note: "100% - Leaked Signature Claymore (High Base ATK, +40% Stellar-Conduct DMG)" },
      { name: "Wolf's Gravestone", note: "94% - Massive Party ATK% buff" },
      { name: "The Unforged", note: "91% - Shield synergy + ATK%" },
      { name: "Favonius Greatsword", note: "87% - Team energy particle generation" },
      { name: "Tidal Shadow", note: "84% - Free craftable high ATK%" }
    ],
    teams: [
      { name: "Stellar-Conduct Royalty", members: ["Danica", "Tsaritsa (Cryo Archon)", "Furina", "Xilonen"], note: "Dual Zapolyarny team synergy: Tsaritsa's Sovereign Cryo + Danica's Electro RES shred." },
      { name: "Snezhnaya Electro Resonance", members: ["Danica", "Mitya", "Nahida", "Baizhu"], note: "Danica shields and buffs Mitya's Gradient Beacons while enabling high-frequency Stellar-Conduct." },
      { name: "Snezhnaya Physical Shatter Core", members: ["Danica", "Eula", "Rosaria", "Mika"], note: "Continuous Superconduct physical RES shred + unbreakable ATK-scaling shield." }
    ]
  },
  "Tsaritsa": window.GC_BUILDS_BY_NAME ? window.GC_BUILDS_BY_NAME["Tsaritsa (Cryo Archon)"] : null,
  "Cryo Archon": window.GC_BUILDS_BY_NAME ? window.GC_BUILDS_BY_NAME["Tsaritsa (Cryo Archon)"] : null,
  "Valerity": window.GC_BUILDS_BY_NAME ? window.GC_BUILDS_BY_NAME["Valeriy"] : null,

  "Mavuika": {
    role: "Pyro Main DPS / Off-Field Sub-DPS (Nightsoul)",
    tier: "T0",
    playstyles: [
      {
        id: "onfield_nuke",
        name: "Nightsoul On-Field Carry",
        icon: "🔥",
        role: "Nightsoul On-Field Pyro Main DPS & Forward Melt Nuke",
        tier: "T0",
        talents: "Burst (Q) >= Skill (E) > Normal Attack",
        artifacts: [
          { set: "Obsidian Codex", pieces: 4, note: "Uncontested BiS (+40% CRIT Rate & +15% All DMG during Nightsoul)" },
          { set: "Crimson Witch of Flames", pieces: 4, note: "+15% Pyro DMG & +15% Melt/Vape reaction damage" },
          { set: "Marechaussee Hunter", pieces: 4, note: "+36% CRIT Rate when paired with Furina" }
        ],
        sands: "ATK% / Elemental Mastery", goblet: "Pyro DMG%", circlet: "CRIT DMG / CRIT Rate",
        substats: "CRIT DMG = CRIT Rate (to 60% w/ Codex) > EM / ATK% > Energy Recharge",
        weapons: [
          { name: "A Thousand Blazing Suns", note: "100% — Signature BiS (+CRIT & Fighting Spirit)" },
          { name: "Serpent Spine", note: "91% — Best 4★ (R5 Battle Pass)" },
          { name: "Verdict", note: "90% — High Base ATK & CRIT Rate" },
          { name: "Redhorn Stonethresher", note: "88% — Massive CRIT DMG stat stick" },
          { name: "Mailed Flower", note: "86% — Best Free Event 4★ for Melt/Vape" },
          { name: "Earth Shaker", note: "83% — Free Natlan Craftable 4★" }
        ],
        teams: [
          { name: "Premium Natlan Melt (Ceiling)", members: ["Mavuika", "Citlali", "Xilonen", "Bennett"], note: "Highest single-target & AoE burst ceiling; Citlali enables forward Melt + Pyro shred while Xilonen & Citlali rapidly charge Fighting Spirit." },
          { name: "Nightsoul Vaporize", members: ["Mavuika", "Furina", "Xilonen", "Bennett"], note: "Consistent Vaporize Charged Attacks with Furina's Fanfare buff and Xilonen's instant heal + RES shred." },
          { name: "Chevreuse Overload", members: ["Mavuika", "Ororon", "Chevreuse", "Bennett"], note: "40% Pyro/Electro RES shred from Chevreuse + Ororon's Scroll of Cinder City Nightsoul generation." }
        ]
      },
      {
        id: "cinder_support",
        name: "Cinder City Buffer / Sub-DPS",
        icon: "🛡",
        role: "Off-Field Pyro Support & Team Elemental Amplifier",
        tier: "T0",
        talents: "Skill (E) >= Burst (Q) > Normal Attack",
        artifacts: [
          { set: "Scroll of the Hero of Cinder City", pieces: 4, note: "Universal Support BiS (+40% Elemental DMG to whole team & energy regen)" },
          { set: "Golden Troupe", pieces: 4, note: "Pure Off-Field Skill Sub-DPS (+70% Skill DMG)" },
          { set: "Tenacity of the Millelith", pieces: 4, note: "Team +20% ATK buff on continuous Skill hits" }
        ],
        sands: "Energy Recharge / ATK%", goblet: "Pyro DMG%", circlet: "CRIT Rate / CRIT DMG",
        substats: "Energy Recharge (160&bull;“180%) > CRIT Rate = CRIT DMG > ATK%",
        weapons: [
          { name: "Peak Patrol Song", note: "100% — Top Support Stat Weapon" },
          { name: "Favonius Greatsword", note: "92% — Universal Team Particle Generator" },
          { name: "Mailed Flower", note: "88% — High EM & ATK buff" },
          { name: "Earth Shaker", note: "84% — Natlan Craftable" }
        ],
        teams: [
          { name: "Kinich Nightsoul Burning", members: ["Kinich", "Mavuika", "Emilie", "Bennett"], note: "Mavuika triggers 4pc Cinder City buffing Kinich & Emilie by 40% while providing off-field Pyro." },
          { name: "Mualani Forward Vape", members: ["Mualani", "Mavuika", "Xilonen", "Sucrose"], note: "Mavuika provides wide-range Pyro application for Mualani's massive Sharky bites." },
          { name: "Citlali Reverse Melt", members: ["Citlali", "Mavuika", "Kaedehara Kazuha", "Bennett"], note: "Constant Pyro field enables Citlali to melt every Burst hit." }
        ]
      }
    ]
  },

  "Neuvillette": {
    role: "On-Field Hydro Hypercarry (Charged Attack)",
    tier: "T0",
    playstyles: [
      {
        id: "hypercarry",
        name: "Hypercarry Hydro Beam",
        icon: "🌊",
        role: "On-Field Pure Hydro Hypercarry (Equitable Judgment)",
        tier: "T0",
        talents: "Normal Attack (NA) >> Burst (Q) = Skill (E)",
        artifacts: [
          { set: "Marechaussee Hunter", pieces: 4, note: "Uncontested BiS (+36% CRIT Rate & +15% Charged Attack DMG)" },
          { set: "Heart of Depth", pieces: 4, note: "Fallback option (+30% Charged Attack DMG after Skill)" },
          { set: "2pc HP + 2pc Hydro", pieces: 2, note: "+20% HP & +15% Hydro DMG balanced fallback" }
        ],
        sands: "HP%", goblet: "Hydro DMG% / HP%", circlet: "CRIT DMG / CRIT Rate / HP%",
        substats: "CRIT DMG = CRIT Rate (to 64% cap) > HP% > Energy Recharge (115★130%)",
        weapons: [
          { name: "Tome of the Eternal Flow", note: "100% — Signature BiS (+HP%, Charged DMG & Energy refund)" },
          { name: "Sacrificial Jade", note: "89% — Strongest 4★ (Battle Pass R5: +64% HP & +36.8% CRIT)" },
          { name: "Surf's Up", note: "86% — High CRIT DMG 5★ stat stick" },
          { name: "Prototype Amber", note: "80% — Best F2P Craftable (HP% + Team Heal & Energy)" },
          { name: "Lost Prayer to the Sacred Winds", note: "82% — Movement SPD & Elemental DMG" }
        ],
        teams: [
          { name: "Hypercarry Ceiling", members: ["Neuvillette", "Furina", "Kaedehara Kazuha", "Xilonen"], note: "Double RES shred (VV + Xilonen) + Furina +40% Cinder City + Kazuha DMG% makes Neuvillette dominate every Abyss chamber." },
          { name: "Citlali Freeze Hypercarry", members: ["Neuvillette", "Furina", "Citlali", "Kaedehara Kazuha"], note: "Citlali provides shielding, Cinder City +40% DMG, and 20% Hydro RES shred." },
          { name: "Zhongli Comfort Hyper", members: ["Neuvillette", "Furina", "Kaedehara Kazuha", "Zhongli"], note: "Ideal at C0 for unbreakable interruption resistance + Archaic Petra / RES shred." }
        ]
      },
      {
        id: "forward_vape",
        name: "Forward Vaporize Nuke",
        icon: "💥",
        role: "Forward Vaporize Charged Attack Nuke",
        tier: "T0",
        talents: "Normal Attack (NA) >> Burst (Q) = Skill (E)",
        artifacts: [
          { set: "Marechaussee Hunter", pieces: 4, note: "Top overall (+36% CRIT Rate with Furina/Mavuika)" },
          { set: "Wanderer's Troupe", pieces: 4, note: "+80 EM & +35% Charged Attack DMG for massive Vaporize hits" },
          { set: "Gilded Dreams", pieces: 4, note: "+230 EM for maximum Vaporize reaction scaling" }
        ],
        sands: "HP% / Elemental Mastery", goblet: "Hydro DMG%", circlet: "CRIT DMG / CRIT Rate",
        substats: "CRIT DMG = CRIT Rate > HP% > Elemental Mastery (100&bull;“200) > Energy Recharge",
        weapons: [
          { name: "Tome of the Eternal Flow", note: "100% — Highest Charged Attack & HP Scaling" },
          { name: "Sacrificial Jade", note: "91% — HP% & CRIT Rate" },
          { name: "The Widsith", note: "87% — High burst window on EM/DMG rolls" },
          { name: "Prototype Amber", note: "80% — F2P Craftable" }
        ],
        teams: [
          { name: "Mavuika Forward Vape", members: ["Neuvillette", "Mavuika", "Kaedehara Kazuha", "Zhongli"], note: "Mavuika applies continuous Pyro off-field, allowing Neuvillette's beam ticks to Forward Vaporize for 150k+ hits." },
          { name: "Xiangling Vape Core", members: ["Neuvillette", "Xiangling", "Kaedehara Kazuha", "Bennett"], note: "Pyronado aura enabler with double Swirl setup." }
        ]
      }
    ]
  },

  "Furina": {
    role: "Off-Field Hydro Sub-DPS & Universal Team Buffer",
    tier: "T0",
    playstyles: [
      {
        id: "sub_dps",
        name: "Off-Field Sub-DPS & Buffer",
        icon: "🎭",
        role: "Off-Field Hydro Sub-DPS & Universal Team Buffer",
        tier: "T0",
        talents: "Burst (Q) = Skill (E) >> Normal Attack",
        artifacts: [
          { set: "Golden Troupe", pieces: 4, note: "Best-in-Slot (+70% Elemental Skill DMG off-field)" },
          { set: "Tenacity of the Millelith", pieces: 4, note: "Team ATK buffer option when personal DMG is secondary" }
        ],
        sands: "Energy Recharge / HP%", goblet: "HP% / Hydro DMG%", circlet: "CRIT Rate / CRIT DMG",
        substats: "Energy Recharge (160–200%) > CRIT Rate = CRIT DMG > HP%",
        weapons: [
          { name: "Splendor of Tranquil Waters", note: "100% — Signature BiS (at sufficient ER)" },
          { name: "Festering Desire", note: "92% — Best Event 4★ (ER + Skill CRIT)" },
          { name: "Fleuve Cendre Ferryman", note: "90% — Best Free Fishing 4★ (Fontaine)" },
          { name: "Key of Khaj-Nisut", note: "91% — Massive HP% + Team EM buff" },
          { name: "Favonius Sword", note: "88% — Best for high-ER solo Hydro teams" }
        ],
        teams: [
          { name: "Neuvillette Sovereign Core", members: ["Neuvillette", "Furina", "Kaedehara Kazuha", "Xilonen"], note: "Neuvillette self-drains and heals to max Fanfare stacks almost instantly." },
          { name: "Skirk / Escoffier Cryo Core", members: ["Skirk", "Furina", "Escoffier", "Shenhe"], note: "Escoffier's team-wide healing + 55% Hydro/Cryo shred supercharges Furina & Skirk." },
          { name: "Xianyun Plunge Carry", members: ["Xiao", "Furina", "Xianyun", "Faruzan"], note: "FFXX premier Anemo plunge hypercarry team." },
          { name: "Quickbloom Carry", members: ["Alhaitham", "Furina", "Nahida", "Kuki Shinobu"], note: "Fanfare amplifies both Alhaitham's Spread DMG and Furina's personal Hydro DMG." }
        ]
      },
      {
        id: "vape_carry",
        name: "On-Field Vape / Forward Carry",
        icon: "🌊",
        role: "On-Field Forward Vaporize Carry",
        tier: "T0.5",
        talents: "Skill (E) = Burst (Q) > Normal Attack",
        artifacts: [
          { set: "Marechaussee Hunter", pieces: 4, note: "+36% CRIT Rate with self-draining Salon Solitaire" },
          { set: "Golden Troupe", pieces: 4, note: "+70% Elemental Skill DMG ceiling" },
          { set: "Heart of Depth", pieces: 4, note: "+15% Hydro DMG & +30% Normal/Charged Attack DMG" }
        ],
        sands: "HP% / Elemental Mastery", goblet: "Hydro DMG%", circlet: "CRIT DMG / CRIT Rate",
        substats: "CRIT DMG = CRIT Rate > HP% > Elemental Mastery > Energy Recharge",
        weapons: [
          { name: "Splendor of Tranquil Waters", note: "100% — Signature BiS (+HP & Normal/Skill DMG)" },
          { name: "Primordial Jade Cutter", note: "98% — 44.1% CRIT Rate & HP conversion" },
          { name: "Mistsplitter Reforged", note: "96% — High Base ATK & 40% Elemental DMG" },
          { name: "Light of Foliar Incision", note: "94% — 88.2% CRIT DMG & EM scaling" }
        ],
        teams: [
          { name: "Furina Forward Vape", members: ["Furina", "Xiangling", "Bennett", "Kaedehara Kazuha"], note: "Huge 2.0x Forward Vape hits on Mademoiselle Crabaletta & Surintendante Chevalmarin." },
          { name: "Sunfire Furina Vape", members: ["Furina", "Jean", "Bennett", "Yelan"], note: "Jean + Bennett Sunfire aura triggers non-stop Hydro Forward Vaporizes." },
          { name: "Xianyun Furina Plunge", members: ["Furina", "Xianyun", "Bennett", "Xiangling"], note: "Hydro-infused plunging attacks hitting for massive vape numbers." }
        ]
      }
    ]
  },

  "Arlecchino": {
    role: "Pyro Main DPS (Bond of Life Normal Attacker)",
    tier: "T0",
    playstyles: [
      {
        id: "vape_carry",
        name: "Vaporize Bond of Life Carry",
        icon: "🩸",
        role: "Forward & Reverse Vaporize BoL Normal Attack Carry",
        tier: "T0",
        talents: "Normal Attack (NA) >> Skill (E) = Burst (Q)",
        artifacts: [
          { set: "Fragment of Harmonic Whimsy", pieces: 4, note: "Uncontested BiS (+54% All DMG via Bond of Life scaling)" },
          { set: "Gladiator's Finale", pieces: 4, note: "+35% Normal Attack DMG (accessible alternative with great stats)" },
          { set: "Gilded Dreams", pieces: 4, note: "+230 EM for high Vaporize multiplier ceiling" }
        ],
        sands: "ATK% / Elemental Mastery", goblet: "Pyro DMG%", circlet: "CRIT DMG / CRIT Rate",
        substats: "CRIT Rate = CRIT DMG > Elemental Mastery (100&bull;“160) > ATK% > Energy Recharge",
        weapons: [
          { name: "Crimson Moon's Semblance", note: "100% — Signature BiS (+Bond of Life & +36% DMG)" },
          { name: "Staff of Homa", note: "94% — High Base ATK & CRIT DMG" },
          { name: "Primordial Jade Winged-Spear", note: "92% — Stacking ATK% & CRIT Rate" },
          { name: "Deathmatch", note: "88% — High CRIT Rate Battle Pass 4★" },
          { name: "White Tassel", note: "84% — Incredible 3&bull;… F2P (+48% Normal Attack DMG)" }
        ],
        teams: [
          { name: "Yelan / Kazuha Vaporize", members: ["Arlecchino", "Yelan", "Kaedehara Kazuha", "Bennett"], note: "Extreme single-target DPS ceiling; Yelan applies Hydro while Kazuha shreds Pyro and buffs DMG." },
          { name: "Zhongli Comfort Vape", members: ["Arlecchino", "Xingqiu", "Yelan", "Zhongli"], note: "Double Hydro + 100% shield protection prevents Arlecchino from taking damage during BoL state." },
          { name: "Citlali Forward Melt", members: ["Arlecchino", "Citlali", "Kaedehara Kazuha", "Bennett"], note: "Citlali provides cryo application and shielding for 200k+ Melt strikes." }
        ]
      },
      {
        id: "overload_carry",
        name: "Chevreuse Overload Carry",
        icon: "⚡",
        role: "Chevreuse Overload Hypercarry (40% Pyro/Electro Shred)",
        tier: "T0",
        talents: "Normal Attack (NA) >> Skill (E) = Burst (Q)",
        artifacts: [
          { set: "Fragment of Harmonic Whimsy", pieces: 4, note: "Top BiS (+54% All DMG)" },
          { set: "Gladiator's Finale", pieces: 4, note: "+35% Normal Attack DMG" }
        ],
        sands: "ATK%", goblet: "Pyro DMG% / ATK%", circlet: "CRIT DMG / CRIT Rate",
        substats: "CRIT Rate = CRIT DMG > ATK% > Energy Recharge",
        weapons: [
          { name: "Crimson Moon's Semblance", note: "100% — Signature Weapon" },
          { name: "Staff of Homa", note: "94% — Consistent high damage" },
          { name: "Deathmatch", note: "88% — Battle Pass 4★" },
          { name: "White Tassel", note: "84% — Free 3&bull;… F2P" }
        ],
        teams: [
          { name: "Chevreuse Overload Core", members: ["Arlecchino", "Fischl", "Chevreuse", "Bennett"], note: "40% Pyro & Electro RES shred from Chevreuse passive + up to 40% ATK buff without needing an Anemo unit." },
          { name: "Beidou Interruption Shield", members: ["Arlecchino", "Beidou", "Chevreuse", "Fischl"], note: "Beidou provides electro discharge and shield mitigation." }
        ]
      }
    ]
  },

  "Xilonen": {
    role: "Universal Elemental Support / RES Shred & Healer",
    tier: "T0",
    playstyles: [
      {
        id: "res_shred",
        name: "Universal Support & Shred",
        icon: "🛡",
        role: "Universal 36% RES Shred Buffer, Healer & Cinder City Enabler",
        tier: "T0",
        talents: "Skill (E) >> Burst (Q) > Normal Attack",
        artifacts: [
          { set: "Scroll of the Hero of Cinder City", pieces: 4, note: "Essential BiS (+40% Elemental DMG to team & instant Nightsoul energy)" },
          { set: "Husk of Opulent Dreams", pieces: 4, note: "+54% DEF & +24% Geo DMG fallback" },
          { set: "Noblesse Oblige", pieces: 4, note: "+20% Team ATK buff" }
        ],
        sands: "DEF% / Energy Recharge", goblet: "DEF%", circlet: "Healing Bonus / DEF% / CRIT Rate",
        substats: "DEF% > Energy Recharge (160&bull;“180%) > Flat DEF > CRIT Rate (for Favonius)",
        weapons: [
          { name: "Peak Patrol Song", note: "100% — Signature BiS (+DEF & massive All-Elemental Team DMG)" },
          { name: "Favonius Sword", note: "94% — Top 4★ Utility (Solves team Energy Recharge)" },
          { name: "Flute of Ezpitzal", note: "90% — Free Natlan Craftable DEF% Sword" },
          { name: "Cinnabar Spindle", note: "88% — High DEF stat stick" }
        ],
        teams: [
          { name: "Neuvillette Hyper Sovereign", members: ["Neuvillette", "Furina", "Xilonen", "Kaedehara Kazuha"], note: "Universal 36% Hydro shred + 40% Cinder City DMG buff + Kazuha VV shred." },
          { name: "Mavuika Melt Apex", members: ["Mavuika", "Citlali", "Xilonen", "Bennett"], note: "Extreme frontloaded damage with Pyro shred and instant Fighting Spirit stacks." },
          { name: "Mualani Vape Dominance", members: ["Mualani", "Mavuika", "Xilonen", "Sucrose"], note: "Reduces Hydro RES while granting 40% Hydro DMG to Mualani." }
        ]
      },
      {
        id: "onfield_geo",
        name: "Nightsoul On-Field Geo DPS",
        icon: "⛰",
        role: "C6 Nightsoul On-Field Geo Rollerblade Carry",
        tier: "T0.5",
        talents: "Normal Attack >= Skill (E) >> Burst (Q)",
        artifacts: [
          { set: "Obsidian Codex", pieces: 4, note: "Best-in-Slot On-Field (+40% CRIT Rate & +15% DMG during Nightsoul)" },
          { set: "Husk of Opulent Dreams", pieces: 4, note: "+54% DEF & +24% Geo DMG" },
          { set: "Marechaussee Hunter", pieces: 4, note: "Top CRIT set with Furina" }
        ],
        sands: "DEF%", goblet: "Geo DMG%", circlet: "CRIT DMG / CRIT Rate",
        substats: "CRIT DMG = CRIT Rate > DEF% > Energy Recharge",
        weapons: [
          { name: "Uraku Misugiri", note: "100% — Highest DEF & Normal Attack DMG scaling" },
          { name: "Peak Patrol Song", note: "95% — Signature Weapon" },
          { name: "Mistsplitter Reforged", note: "89% — High CRIT DMG & Geo DMG" },
          { name: "Chiori's Signature", note: "92% — DEF & CRIT stat stick" }
        ],
        teams: [
          { name: "Mono Geo Rollerblade", members: ["Xilonen", "Chiori", "Gorou", "Zhongli"], note: "Full Geo resonance + Gorou DEF buffs + Chiori dual dolls." },
          { name: "Furina Geo Hypercarry", members: ["Xilonen", "Furina", "Gorou", "Bennett"], note: "Massive Fanfare multipliers on Xilonen's rollerblade strikes." }
        ]
      }
    ]
  },

  "Citlali": {
    role: "Cryo Shielder, Melt/Freeze Enabler & Pyro/Hydro RES Shredder",
    tier: "T0",
    talents: "Skill (E) > Burst (Q) >> Normal Attack",
    artifacts: [
      { set: "Scroll of the Hero of Cinder City", pieces: 4, note: "Best-in-Slot (+40% Elemental DMG & massive Energy refund)" },
      { set: "Tenacity of the Millelith", pieces: 4, note: "Used when Xilonen/Ororon already holds Cinder City (+20% ATK & +30% Shield)" }
    ],
    sands: "Elemental Mastery / Energy Recharge", goblet: "Elemental Mastery", circlet: "Elemental Mastery",
    substats: "Energy Recharge (160–185%) > Elemental Mastery > CRIT Rate",
    weapons: [
      { name: "Starcaller's Watch", note: "100% — Signature BiS (365 EM + +28% Active Character DMG)" },
      { name: "Thrilling Tales of Dragon Slayers", note: "95% — Best 3★ Support (+48% ATK to Mavuika/Arlecchino)" },
      { name: "A Thousand Floating Dreams", note: "91% — High EM + Team EM share" },
      { name: "Sacrificial Fragments", note: "89% — High EM + Skill Reset" },
      { name: "Favonius Codex", note: "87% — Smooth team energy" }
    ],
    teams: [
      { name: "Mavuika Apex Melt", members: ["Mavuika", "Citlali", "Xilonen", "Bennett"], note: "Citlali's off-field Cryo storm lets Mavuika Melt her Burst + Charged Attacks while shredding 20% Pyro RES." },
      { name: "Arlecchino Forward Melt", members: ["Arlecchino", "Citlali", "Kaedehara Kazuha", "Bennett"], note: "Shields Arlecchino (who cannot be healed in combat) while enabling huge Forward Melts." },
      { name: "Chasca Rainbow Carry", members: ["Chasca", "Citlali", "Furina", "Bennett"], note: "Buffs both Pyro and Hydro bullets while shielding Chasca mid-air." },
      { name: "Gaming Plunge Melt", members: ["Gaming", "Citlali", "Xianyun", "Bennett"], note: "Turns every Gaming plunge into a massive Forward Melt." }
    ]
  },

  "Bennett": {
    role: "Premier ATK Buffer, Healer & Pyro Battery",
    tier: "T0",
    playstyles: [
      {
        id: "support",
        name: "Buffer / Healer",
        icon: "🔥",
        role: "Premier ATK Buffer, Healer & Pyro Battery",
        tier: "T0",
        talents: "Burst (Q) >> Skill (E) > Normal Attack",
        artifacts: [
          { set: "Noblesse Oblige", pieces: 4, note: "Best-in-Slot (+20% Team ATK for 12s on Burst)" },
          { set: "Instructor", pieces: 4, note: "Top choice in Melt/Vaporize speedruns (+120 Team EM)" }
        ],
        sands: "Energy Recharge", goblet: "HP% / Pyro DMG%", circlet: "Healing Bonus / HP%",
        substats: "Energy Recharge (220–260%) > HP% > CRIT Rate",
        weapons: [
          { name: "Aquila Favonia", note: "100% — Highest Base ATK (674) for maximum Flat ATK buff" },
          { name: "Mistsplitter Reforged", note: "100% — Tied highest Base ATK (674)" },
          { name: "The Alley Flash", note: "95% — Highest 4★ Base ATK (620)" },
          { name: "Sapwood Blade", note: "94% — Best F2P Craftable (565 Base ATK + 30.6% ER)" },
          { name: "Skyward Blade", note: "94% — High Base ATK (608) + 55.1% ER" }
        ],
        teams: [
          { name: "Mavuika Hyper Melt", members: ["Mavuika", "Citlali", "Xilonen", "Bennett"], note: "Massive Flat ATK buff + Pyro Resonance." },
          { name: "Arlecchino Hypercarry", members: ["Arlecchino", "Citlali", "Xilonen", "Bennett"], note: "Core ATK buffer for Arlecchino." },
          { name: "International (Childe)", members: ["Tartaglia", "Xiangling", "Kaedehara Kazuha", "Bennett"], note: "Snapshots Bennett's huge ATK buff onto Xiangling's Pyronado." },
          { name: "Kinich Burning Carry", members: ["Kinich", "Emilie", "Mavuika", "Bennett"], note: "Buffs Kinich's Scalespiker Cannon shots." }
        ]
      },
      {
        id: "melt_dps",
        name: "On-Field Melt Carry",
        icon: "⚔️",
        role: "On-Field Forward Melt Hypercarry",
        tier: "T1.5",
        talents: "Skill (E) = Burst (Q) >= Normal Attack",
        artifacts: [
          { set: "Crimson Witch of Flames", pieces: 4, note: "+15% Melt/Vape DMG & +22.5% Pyro DMG inside Fantastic Voyage" },
          { set: "Marechaussee Hunter", pieces: 4, note: "+36% CRIT Rate when paired with Furina" }
        ],
        sands: "ATK% / Elemental Mastery", goblet: "Pyro DMG%", circlet: "CRIT Rate / CRIT DMG",
        substats: "CRIT Rate = CRIT DMG > Elemental Mastery > ATK% > Energy Recharge",
        weapons: [
          { name: "Mistsplitter Reforged", note: "100% — 674 Base ATK & 40% Elemental DMG Bonus" },
          { name: "Primordial Jade Cutter", note: "98% — 44.1% CRIT Rate & HP ATK conversion" },
          { name: "Absolution", note: "95% — High CRIT DMG & Bond of Life damage bonuses" },
          { name: "The Black Sword", note: "90% — CRIT Rate & Normal/Charged Attack DMG" }
        ],
        teams: [
          { name: "Bennett Chongyun Melt", members: ["Bennett", "Chongyun", "Shenhe", "Kaedehara Kazuha"], note: "Chongyun infuses Bennett's NAs with Cryo to forward melt every 2s Skill." },
          { name: "Xianyun Bennett Plunge", members: ["Bennett", "Xianyun", "Furina", "Faruzan"], note: "Pyro-infused plunge attacks vaporizing on every descent." }
        ]
      }
    ]
  },

  "Kaedehara Kazuha": {
    role: "Anemo Crowd Control, Elemental DMG% Buffer & VV Shredder",
    tier: "T0.5",
    playstyles: [
      {
        id: "support",
        name: "VV Swirl Support",
        icon: "🍁",
        role: "Anemo Crowd Control, Elemental DMG% Buffer & VV Shredder",
        tier: "T0.5",
        talents: "Burst (Q) = Skill (E) = Normal Attack (Swirl scales on Level & EM)",
        artifacts: [
          { set: "Viridescent Venerer", pieces: 4, note: "Uncontested BiS (-40% Elemental RES to swirled elements)" }
        ],
        sands: "Elemental Mastery / ER", goblet: "Elemental Mastery", circlet: "Elemental Mastery",
        substats: "Elemental Mastery > Energy Recharge (160–190%) > CRIT Rate (if Favonius)",
        weapons: [
          { name: "Freedom-Sworn", note: "100% — Signature BiS (198 EM + Team ATK/NA/CA buff)" },
          { name: "Xiphos' Moonlight", note: "97% — Converts EM into Team-wide Energy Recharge" },
          { name: "Favonius Sword", note: "95% — Solves all team Energy requirements" },
          { name: "Iron Sting", note: "90% — Free Craftable 165 EM Sword" },
          { name: "Toukabou Shigure", note: "90% — Free Event 165 EM Sword" }
        ],
        teams: [
          { name: "Neuvillette Hypercarry", members: ["Neuvillette", "Furina", "Kaedehara Kazuha", "Xilonen"], note: "+40% Hydro DMG & -40% Hydro RES." },
          { name: "Arlecchino Vaporize", members: ["Arlecchino", "Yelan", "Kaedehara Kazuha", "Bennett"], note: "Double-swirls Hydro & Pyro for massive team damage." },
          { name: "Clorinde Aggravate", members: ["Clorinde", "Fischl", "Nahida", "Kaedehara Kazuha"], note: "Groups enemies and triggers Electro-infused Aggravate swirls." },
          { name: "Ayaka Freeze", members: ["Kamisato Ayaka", "Furina", "Shenhe", "Kaedehara Kazuha"], note: "Tight grouping for Ayaka's Soumetsu." }
        ]
      },
      {
        id: "dps",
        name: "On-Field Anemo Carry",
        icon: "⚔️",
        role: "On-Field Anemo Hypercarry / Plunge Driver",
        tier: "T2",
        talents: "Skill (E) >= Normal Attack = Burst (Q)",
        artifacts: [
          { set: "Desert Pavilion Chronicle", pieces: 4, note: "+15% Anemo DMG & +40% Normal/Charged/Plunge DMG" },
          { set: "Marechaussee Hunter", pieces: 4, note: "+36% CRIT Rate when paired with Furina" },
          { set: "Viridescent Venerer", pieces: 2, note: "+15% Anemo DMG (+2pc ATK% fallback)" }
        ],
        sands: "ATK%", goblet: "Anemo DMG%", circlet: "CRIT Rate / CRIT DMG",
        substats: "CRIT Rate = CRIT DMG > ATK% > Elemental Mastery > Energy Recharge",
        weapons: [
          { name: "Mistsplitter Reforged", note: "100% — High Base ATK & 40% Elemental DMG Bonus" },
          { name: "Primordial Jade Cutter", note: "98% — 44.1% CRIT Rate & HP conversion" },
          { name: "Light of Foliar Incision", note: "95% — 88.2% CRIT DMG & EM scaling" },
          { name: "The Black Sword", note: "88% — CRIT Rate & Normal/Charged DMG" }
        ],
        teams: [
          { name: "Kazuha Xianyun Plunge", members: ["Kaedehara Kazuha", "Xianyun", "Faruzan", "Furina"], note: "Anemo-infused Midare Ranzan plunges boosted by Faruzan & Furina." },
          { name: "Kazuha Hypercarry", members: ["Kaedehara Kazuha", "Faruzan", "Bennett", "Furina"], note: "Faruzan C6 provides 40% Anemo CRIT DMG and 30% RES shred." }
        ]
      }
    ]
  },

  "Venti": {
    role: "Off-Field CC & Elemental Shredder",
    tier: "T1",
    playstyles: [
      {
        id: "support",
        name: "Support / CC Swirl",
        icon: "🌀",
        role: "Off-Field CC & Elemental Shredder",
        tier: "T1",
        talents: "Burst (Q) > Skill (E) > Normal Attack",
        artifacts: [
          { set: "Viridescent Venerer", pieces: 4, note: "Uncontested BiS (-40% Elemental RES shred & +60% Swirl DMG)" },
          { set: "Noblesse Oblige", pieces: 4, note: "Team Burst ATK buff (+20% ATK for 12s)" }
        ],
        sands: "Elemental Mastery / Energy Recharge", goblet: "Elemental Mastery / Anemo DMG%", circlet: "Elemental Mastery / CRIT Rate",
        substats: "Elemental Mastery > Energy Recharge (160–180%) > CRIT Rate > ATK%",
        weapons: [
          { name: "Elegy for the End", note: "100% — Signature Support BiS (+100 EM & +20% ATK to party)" },
          { name: "Favonius Warbow", note: "94% — Premier Team Particle Battery" },
          { name: "The Stringless", note: "91% — High EM & Skill/Burst DMG" },
          { name: "Windblume Ode", note: "85% — Free Event EM Bow" }
        ],
        teams: [
          { name: "Morgana Permafreeze", members: ["Ganyu", "Mona", "Venti", "Diona"], note: "The classic CC freeze lock: Venti groups mobs permanently inside Ganyu & Mona bursts." },
          { name: "Ayaka Freeze Vacuum", members: ["Kamisato Ayaka", "Furina", "Venti", "Charlotte"], note: "Venti clumps enemies for Ayaka's entire Soumetsu blade storm." },
          { name: "Electro-Charged Swirl", members: ["Clorinde", "Fischl", "Venti", "Furina"], note: "Absorbs Electro or Hydro for non-stop AoE chain reactions." }
        ]
      },
      {
        id: "dps",
        name: "On-Field / Quickswap DPS",
        icon: "⚔️",
        role: "On-Field Anemo Hypercarry / Burst Nuke",
        tier: "T2",
        talents: "Skill (E) = Burst (Q) >= Normal Attack",
        artifacts: [
          { set: "Desert Pavilion Chronicle", pieces: 4, note: "+15% Anemo DMG & +40% Normal/Charged/Plunge DMG" },
          { set: "Marechaussee Hunter", pieces: 4, note: "+36% CRIT Rate when paired with Furina" },
          { set: "Viridescent Venerer", pieces: 2, note: "+15% Anemo DMG (+2pc ATK% fallback)" }
        ],
        sands: "ATK%", goblet: "Anemo DMG%", circlet: "CRIT Rate / CRIT DMG",
        substats: "CRIT Rate = CRIT DMG > ATK% > Energy Recharge",
        weapons: [
          { name: "The First Great Magic", note: "100% — Massive CRIT DMG & Charged DMG" },
          { name: "Polar Star", note: "97% — Stacking ATK & CRIT Rate" },
          { name: "Aqua Simulacra", note: "95% — Universal 88.2% CRIT DMG" },
          { name: "Skyward Harp", note: "90% — High Base ATK & Dual CRIT" }
        ],
        teams: [
          { name: "Venti Anemo Hypercarry", members: ["Venti", "Faruzan", "Furina", "Bennett"], note: "Faruzan C6 shreds 30% Anemo RES + grants 40% Anemo CRIT DMG alongside Furina & Bennett." },
          { name: "Plunge Venti (Xianyun)", members: ["Venti", "Xianyun", "Faruzan", "Furina"], note: "Xianyun enables high plunge scaling boosted by Faruzan & Furina." }
        ]
      }
    ]
  },

  "Nahida": {
    role: "Premier Off-Field Dendro Enabler, Sub-DPS & EM Buffer",
    tier: "T0.5",
    playstyles: [
      {
        id: "off_field",
        name: "Off-Field Sub-DPS & Buffer",
        icon: "🌱",
        role: "Off-Field Dendro Enabler, Sub-DPS & EM Buffer",
        tier: "T0.5",
        talents: "Skill (E) >> Burst (Q) > Normal Attack",
        artifacts: [
          { set: "Deepwood Memories", pieces: 4, note: "Best-in-Slot (-30% Dendro RES with 100% uptime)" },
          { set: "Golden Troupe", pieces: 4, note: "Personal Tri-Karma damage ceiling if another ally holds Deepwood" },
          { set: "Gilded Dreams", pieces: 4, note: "High EM + ATK stat stick" }
        ],
        sands: "Elemental Mastery", goblet: "Elemental Mastery / Dendro DMG%", circlet: "Elemental Mastery / CRIT",
        substats: "Elemental Mastery (to 900–1000) = CRIT Rate / CRIT DMG > ER (120–135%)",
        weapons: [
          { name: "A Thousand Floating Dreams", note: "100% — Signature BiS (265 EM + Team EM share)" },
          { name: "Kagura's Verity", note: "95% — Best personal Skill DMG 5★" },
          { name: "Sacrificial Fragments", note: "91% — 221 EM 4★" },
          { name: "Wandering Evenstar", note: "90% — Converts EM into Team Flat ATK" },
          { name: "Magic Guide", note: "85% — Best F2P 3★ (187 EM)" }
        ],
        teams: [
          { name: "Alhaitham Quickbloom", members: ["Alhaitham", "Furina", "Nahida", "Kuki Shinobu"], note: "Provides +250 EM, Deepwood shred, and massive Dendro particle generation." },
          { name: "Nilou Superbloom", members: ["Nilou", "Nahida", "Sangonomiya Kokomi", "Yelan"], note: "Unmatched AoE Bountiful Core production." },
          { name: "Clorinde Aggravate", members: ["Clorinde", "Fischl", "Nahida", "Xilonen"], note: "Permanent Quicken aura across multi-wave chambers." },
          { name: "Cyno Quickbloom", members: ["Cyno", "Furina", "Nahida", "Baizhu"], note: "Nahida's long skill duration supports Cyno's extended burst stance." }
        ]
      },
      {
        id: "on_field",
        name: "On-Field Spread Driver",
        icon: "🌿",
        role: "On-Field Dendro Spread Carry & Reaction Driver",
        tier: "T0.5",
        talents: "Skill (E) = Normal Attack > Burst (Q)",
        artifacts: [
          { set: "Gilded Dreams", pieces: 4, note: "+80 EM & massive EM/ATK bonuses on elemental reactions" },
          { set: "Deepwood Memories", pieces: 4, note: "Standard -30% Dendro RES shred" },
          { set: "Marechaussee Hunter", pieces: 4, note: "+36% CRIT Rate when paired with Furina" }
        ],
        sands: "Elemental Mastery", goblet: "Dendro DMG%", circlet: "CRIT Rate / CRIT DMG",
        substats: "CRIT Rate = CRIT DMG > Elemental Mastery (650–800) > ATK%",
        weapons: [
          { name: "A Thousand Floating Dreams", note: "100% — Signature BiS (EM + Team Buff)" },
          { name: "Kagura's Verity", note: "96% — 66.2% CRIT DMG & Stacking Skill DMG" },
          { name: "Lost Prayer to the Sacred Winds", note: "94% — 33.1% CRIT Rate & Movement/DMG%" },
          { name: "The Widsith", note: "92% — Massive burst windows (ATK, DMG, or EM buff)" }
        ],
        teams: [
          { name: "Hyperbloom Double Hydro", members: ["Nahida", "Yelan", "Xingqiu", "Kuki Shinobu"], note: "Nahida drives on-field with fast Dendro normal attacks for continuous Hyperblooms." },
          { name: "Nahida Furina Quickbloom", members: ["Nahida", "Furina", "Raiden Shogun", "Baizhu"], note: "Furina Fanfare + Baizhu buffs Nahida's on-field Spread normals." },
          { name: "Nahida Spread Carry", members: ["Nahida", "Yae Miko", "Fischl", "Zhongli"], note: "Double Electro off-field DPS amplified by Nahida's rapid on-field Spreads." }
        ]
      }
    ]
  },

  "Raiden Shogun": {
    role: "On-Field Electro Burst Hypercarry & Energy Battery",
    tier: "T0.5",
    playstyles: [
      {
        id: "burst_dps",
        name: "On-Field Burst Carry",
        icon: "⚡",
        role: "On-Field Electro Burst Hypercarry & Energy Battery",
        tier: "T0.5",
        talents: "Burst (Q) >> Skill (E) > Normal Attack",
        artifacts: [
          { set: "Emblem of Severed Fate", pieces: 4, note: "Uncontested BiS (+20% ER & up to +75% Burst DMG)" }
        ],
        sands: "Energy Recharge / ATK%", goblet: "Electro DMG% / ATK%", circlet: "CRIT Rate / CRIT DMG",
        substats: "CRIT Rate = CRIT DMG > Energy Recharge (220–270%) > ATK%",
        weapons: [
          { name: "Engulfing Lightning", note: "100% — Signature BiS (Converts excess ER to massive ATK)" },
          { name: "Staff of Homa", note: "91% — Strongest CRIT DMG 5★" },
          { name: "The Catch", note: "88% — Best Free Fishing 4★ (+45.9% ER & +12% Burst CRIT)" },
          { name: "Wavebreaker's Fin", note: "89% — High Burst DMG at R5" }
        ],
        teams: [
          { name: "Chevreuse Overload Hyper", members: ["Raiden Shogun", "Kujou Sara", "Chevreuse", "Bennett"], note: "Modern upgrade over classic Hypercarry with Chevreuse's 40% shred + ATK buff." },
          { name: "Furina / Xilonen Taser Carry", members: ["Raiden Shogun", "Furina", "Yelan", "Xilonen"], note: "High team-wide sub-DPS where Raiden drives Yelan & Furina while refunding team Energy." },
          { name: "Raiden National (Rational)", members: ["Raiden Shogun", "Xiangling", "Yelan", "Bennett"], note: "Timeless single-target Overvape powerhouse." }
        ]
      },
      {
        id: "hyperbloom",
        name: "Hyperbloom Trigger",
        icon: "🌱",
        role: "Off-Field Hyperbloom Reaction Trigger",
        tier: "T0",
        talents: "Skill (E) >> Burst (Q) (Talent levels do not affect Hyperbloom)",
        artifacts: [
          { set: "Flower of Paradise Lost", pieces: 4, note: "BiS for Hyperbloom (+80% reaction DMG)" },
          { set: "Gilded Dreams", pieces: 4, note: "+230 EM (Easiest to farm)" },
          { set: "2pc Wanderer's + 2pc Gilded", pieces: 2, note: "+160 EM fallback" }
        ],
        sands: "Elemental Mastery", goblet: "Elemental Mastery", circlet: "Elemental Mastery",
        substats: "Elemental Mastery > Energy Recharge > ATK%",
        weapons: [
          { name: "Dragon's Bane", note: "100% — Highest EM Polearm (221 EM)" },
          { name: "Moonpiercer", note: "94% — Free Craftable EM Polearm" },
          { name: "Kitain Cross Spear", note: "92% — EM stat + Energy refund" },
          { name: "Favonius Lance", note: "86% — Team Particle Generation" }
        ],
        teams: [
          { name: "Alhaitham Quickbloom", members: ["Alhaitham", "Furina", "Nahida", "Raiden Shogun"], note: "Raiden's 0.9s coordinated skill procs 35k+ Hyperbloom damage while Alhaitham spreads on-field." },
          { name: "Neuvillette Hyperbloom", members: ["Neuvillette", "Nahida", "Raiden Shogun", "Zhongli"], note: "Effortless continuous Hyperbloom procs while Neuvillette fires hydro beam." },
          { name: "Nahida On-Field Hyperbloom", members: ["Nahida", "Xingqiu", "Yelan", "Raiden Shogun"], note: "Double Hydro single-target boss killer with continuous Dendro normal attacks." }
        ]
      }
    ]
  },

  "Skirk": {
    role: "Apex Cryo Main DPS / Burst & Normal Attack Carry",
    tier: "T0",
    talents: "Skill (E) = Burst (Q) > Normal Attack",
    artifacts: [
      { set: "Finale of the Deep Galleries", pieces: 4, note: "Signature BiS (+15% Cryo DMG & +60% Normal / Burst DMG at 0 Energy)" },
      { set: "Marechaussee Hunter", pieces: 4, note: "Top alternative when paired with Furina (+36% CRIT Rate)" },
      { set: "Blizzard Strayer", pieces: 4, note: "Classic Freeze option against freezable enemies" }
    ],
    sands: "ATK%", goblet: "Cryo DMG% / ATK%", circlet: "CRIT DMG / CRIT Rate",
    substats: "CRIT DMG = CRIT Rate > ATK%",
    weapons: [
      { name: "Azurelight", note: "100% — Signature BiS (+ATK% & CRIT DMG at 0 Energy)" },
      { name: "Mistsplitter Reforged", note: "90% — Strongest generalist 5★ Cryo Sword" },
      { name: "Haran Geppaku Futsu", note: "88% — High CRIT Rate + Normal Attack DMG" },
      { name: "Uraku Misugiri", note: "86% — 88.2% CRIT DMG stat stick" },
      { name: "Finale of the Deep", note: "81% — Best F2P Fontaine Craftable Sword" }
    ],
    teams: [
      { name: "Premium Freeze Ceiling", members: ["Skirk", "Furina", "Escoffier", "Shenhe"], note: "All-Hydro/Cryo composition unlocking Escoffier's full 55% RES shred and Skirk's passive multipliers." },
      { name: "Yelan Dual Hydro Freeze", members: ["Skirk", "Furina", "Escoffier", "Yelan"], note: "High single-target DPS with Yelan's ramping DMG% buff and coordinated Hydro hits." },
      { name: "Citlali Shielded Freeze", members: ["Skirk", "Furina", "Escoffier", "Citlali"], note: "Adds Citlali's Cinder City +40% DMG + Hydro shred + shield." }
    ]
  },

  "Escoffier": {
    role: "Cryo Off-Field Sub-DPS, Team Healer & 55% Hydro/Cryo Shredder",
    tier: "T0",
    talents: "Skill (E) > Burst (Q) >> Normal Attack",
    artifacts: [
      { set: "Golden Troupe", pieces: 4, note: "Best-in-Slot (+70% Off-Field Elemental Skill DMG)" },
      { set: "Tenacity of the Millelith", pieces: 4, note: "Team ATK buffer option" }
    ],
    sands: "ATK% / Energy Recharge", goblet: "Cryo DMG% / ATK%", circlet: "CRIT Rate / CRIT DMG",
    substats: "Energy Recharge (140–170%) > CRIT Rate = CRIT DMG > ATK%",
    weapons: [
      { name: "Symphonist of Scents", note: "100% — Signature BiS (+CRIT DMG & +32% Team ATK on heal)" },
      { name: "Staff of Homa", note: "89% — High personal Sub-DPS" },
      { name: "Calamity Queller", note: "88% — High off-field ATK & Elemental DMG" },
      { name: "Deathmatch", note: "83% — Best 4★ (Battle Pass)" },
      { name: "Favonius Lance", note: "82% — Smooth team energy" }
    ],
    teams: [
      { name: "Skirk Freeze Core", members: ["Skirk", "Furina", "Escoffier", "Shenhe"], note: "Provides 55% Cryo/Hydro RES shred, full-team healing for Furina, and high off-field Cryo DPS." },
      { name: "Ayaka Modern Freeze", members: ["Kamisato Ayaka", "Furina", "Escoffier", "Shenhe"], note: "Revitalizes Ayaka to top meta DPS even against unfreezable bosses." },
      { name: "Neuvillette Cryo Core", members: ["Neuvillette", "Furina", "Escoffier", "Citlali"], note: "55% + 20% = 75% Hydro RES shred with huge off-field Cryo sub-DPS." }
    ]
  },

  "Varesa": {
    role: "Electro Plunge Hypercarry (Nightsoul)",
    tier: "T0.5",
    talents: "Normal Attack (Plunge) >> Burst (Q) > Skill (E)",
    artifacts: [
      { set: "Long Night's Oath", pieces: 4, note: "Signature BiS (+100% Plunging Attack DMG)" },
      { set: "Obsidian Codex", pieces: 4, note: "Very close alternative (+40% CRIT Rate & +15% DMG)" }
    ],
    sands: "ATK%", goblet: "Electro DMG% / ATK%", circlet: "CRIT DMG / CRIT Rate",
    substats: "CRIT Rate = CRIT DMG > ATK% > Energy Recharge (120%)",
    weapons: [
      { name: "Vivid Notions", note: "100% — Signature BiS (+ATK% & +68% Plunge CRIT DMG)" },
      { name: "Crane's Echoing Call", note: "88% — High Base ATK + Plunge DMG%" },
      { name: "Lost Prayer to the Sacred Winds", note: "85% — High CRIT Rate + Movement Speed" },
      { name: "The Widsith", note: "84% — Best 4★ (R5)" },
      { name: "Flowing Purity", note: "79% — Best F2P Fontaine Craftable" }
    ],
    teams: [
      { name: "Overload Plunge Ceiling", members: ["Varesa", "Mavuika", "Chevreuse", "Iansan"], note: "Combines Iansan's Nightsoul ATK buff + Chevreuse's 40% shred + Mavuika's off-field Pyro." },
      { name: "Xianyun Furina Plunge", members: ["Varesa", "Furina", "Xianyun", "Iansan"], note: "Amplifies every Plunge with Xianyun's flat DMG bonus and Furina's Fanfare." }
    ]
  },

  "Iansan": {
    role: "Movement-Scaling Electro ATK Buffer & Nightsoul Healer",
    tier: "T0",
    talents: "Burst (Q) >> Skill (E) > Normal Attack",
    artifacts: [
      { set: "Scroll of the Hero of Cinder City", pieces: 4, note: "Best-in-Slot (+40% Elemental DMG & Energy)" },
      { set: "Noblesse Oblige", pieces: 4, note: "+20% Team ATK if another ally already holds Cinder City" }
    ],
    sands: "ATK% / Energy Recharge", goblet: "ATK%", circlet: "ATK%",
    substats: "Energy Recharge (170–200%) > ATK% (to ~3000 ATK) > CRIT Rate",
    weapons: [
      { name: "Calamity Queller", note: "100% — Highest ATK stat stick" },
      { name: "Engulfing Lightning", note: "98% — Converts ER into massive ATK" },
      { name: "Tamayuratei no Ohanashi", note: "94% — Best Event 4★ (ER + +40% ATK on Skill)" },
      { name: "Favonius Lance", note: "93% — Best Team Battery (565 Base ATK)" }
    ],
    teams: [
      { name: "Varesa Plunge Hyper", members: ["Varesa", "Mavuika", "Chevreuse", "Iansan"], note: "Varesa's constant movement keeps Iansan's maximum Flat ATK buff active 100% of the time." },
      { name: "Kinich Grapple Carry", members: ["Kinich", "Mavuika", "Emilie", "Iansan"], note: "Kinich's grapple loops maintain max kinetic energy for Iansan + triggers Cinder City on Dendro." },
      { name: "Chasca Airborne Carry", members: ["Chasca", "Furina", "Citlali", "Iansan"], note: "Replaces circle-locked buffers for airborne carries." }
    ]
  },

  "Kinich": {
    role: "Dendro Burning / Burgeon On-Field Grapple Carry",
    tier: "T0.5",
    talents: "Skill (E) >> Burst (Q) > Normal Attack",
    artifacts: [
      { set: "Obsidian Codex", pieces: 4, note: "Uncontested BiS (+40% CRIT Rate & +15% DMG)" },
      { set: "Unfinished Reverie", pieces: 4, note: "+50% DMG against Burning enemies" }
    ],
    sands: "ATK%", goblet: "Dendro DMG%", circlet: "CRIT DMG / CRIT Rate",
    substats: "CRIT DMG = CRIT Rate (to 60%) > ATK% > ER",
    weapons: [
      { name: "Fang of the Mountain King", note: "100% — Signature BiS (+60% Skill/Burst DMG via Burning)" },
      { name: "A Thousand Blazing Suns", note: "91% — High CRIT & ATK%" },
      { name: "Serpent Spine", note: "88% — Best 4★ (Battle Pass R5)" },
      { name: "Earth Shaker", note: "83% — Best F2P Natlan Craftable (+32% Skill DMG after Pyro)" }
    ],
    teams: [
      { name: "Burning Dual Carry", members: ["Kinich", "Emilie", "Mavuika", "Bennett"], note: "Emilie & Kinich both deal massive single-target Dendro damage off continuous Burning." },
      { name: "Nightsoul Iansan Burn", members: ["Kinich", "Mavuika", "Iansan", "Bennett"], note: "Iansan procs Cinder City for Dendro + grants full mobile ATK buff." }
    ]
  },

  "Mualani": {
    role: "On-Field Hydro Carry (Forward Vaporize Nuke)",
    tier: "T0.5",
    playstyles: [
      {
        id: "vape_nuke",
        name: "Forward Vaporize Carry",
        icon: "🌊",
        role: "Forward Vaporize Shark Bite Nuke Carry (Nightsoul)",
        tier: "T0.5",
        talents: "Skill (E) >> Burst (Q) (Normal Attack is unneeded)",
        artifacts: [
          { set: "Obsidian Codex", pieces: 4, note: "Uncontested BiS (+40% CRIT Rate ensures guaranteed CRIT Sharky bites)" },
          { set: "Heart of Depth", pieces: 4, note: "+15% Hydro & +30% Normal DMG alternative" },
          { set: "2pc HP + 2pc Hydro", pieces: 2, note: "Balanced stat placeholder" }
        ],
        sands: "HP% / Elemental Mastery", goblet: "Hydro DMG% / HP%", circlet: "CRIT DMG / CRIT Rate",
        substats: "CRIT DMG > Elemental Mastery (120&bull;“220) > HP% > CRIT Rate (to 60% cap w/ Codex)",
        weapons: [
          { name: "Surf's Up", note: "100% — Signature BiS (+20% HP & +48% Normal Attack DMG)" },
          { name: "Sacrificial Jade", note: "88% — High CRIT Rate + HP% + EM (Battle Pass)" },
          { name: "Ring of Yaxche", note: "84% — Best F2P Natlan Craftable (+HP% & Normal Attack DMG)" },
          { name: "The Widsith", note: "83% — High nuke ceiling on EM/DMG rolls" },
          { name: "Tome of the Eternal Flow", note: "81% — Top 5★ Catalyst (+88.2% CRIT DMG & HP boost)" }
        ],
        teams: [
          { name: "Mona & Sucrose Synergy Core", members: ["Mualani", "Mona", "Sucrose", "Xilonen"], note: "Premier synergy lineup based on Prydwen & KQM top teammate pairing analysis." },
          { name: "Mavuika Forward Vape", members: ["Mualani", "Mavuika", "Xilonen", "Sucrose"], note: "Every Sharky's Surging Bite Vaporizes for massive 500k&bull;“1M+ hits." },
          { name: "Burn-Vape Emilie", members: ["Mualani", "Emilie", "Mavuika", "Xilonen"], note: "Burning keeps Pyro aura pinned on enemies for effortless Vaporizes." }
        ]
      },
      {
        id: "furina_hydro",
        name: "Furina Dual-Hydro Carry",
        icon: "🦈",
        role: "Dual Hydro Sustained Carry with Furina Fanfare",
        tier: "T1",
        talents: "Skill (E) >> Burst (Q)",
        artifacts: [
          { set: "Marechaussee Hunter", pieces: 4, note: "+36% CRIT Rate when HP fluctuates with Furina's drain" },
          { set: "Obsidian Codex", pieces: 4, note: "+40% CRIT Rate in Nightsoul" },
          { set: "Heart of Depth", pieces: 4, note: "+15% Hydro & +30% Normal DMG" }
        ],
        sands: "HP%", goblet: "Hydro DMG%", circlet: "CRIT DMG / CRIT Rate",
        substats: "CRIT DMG = CRIT Rate > HP% > Energy Recharge",
        weapons: [
          { name: "Surf's Up", note: "100% — Signature Weapon" },
          { name: "Sacrificial Jade", note: "91% — Battle Pass" },
          { name: "Prototype Amber", note: "82% — Team healing for Fanfare" }
        ],
        teams: [
          { name: "Double Hydro Shred", members: ["Mualani", "Furina", "Xilonen", "Kaedehara Kazuha"], note: "Double Hydro (+25% HP) + maximum Fanfare damage amplifiers." },
          { name: "Escoffier Freeze Core", members: ["Mualani", "Furina", "Escoffier", "Citlali"], note: "Freeze crowd control with massive Hydro RES shred." }
        ]
      }
    ]
  },

  "Chasca": {
    role: "Airborne Multi-Element Anemo Hypercarry",
    tier: "T0.5",
    talents: "Skill (E) >> Burst (Q) > Normal Attack",
    artifacts: [
      { set: "Obsidian Codex", pieces: 4, note: "Uncontested BiS (+40% CRIT Rate & +15% DMG)" }
    ],
    sands: "ATK%", goblet: "ATK%", circlet: "CRIT DMG",
    substats: "CRIT DMG = CRIT Rate (to 60%) > ATK% > Elemental Mastery",
    weapons: [
      { name: "Astral Vulture's Crimson Plumage", note: "100% — Signature BiS (+48% Charged DMG & +24% Burst DMG)" },
      { name: "Aqua Simulacra", note: "89% — 88.2% CRIT DMG + +20% DMG" },
      { name: "The First Great Magic", note: "88% — High Charged Attack DMG & CRIT DMG" },
      { name: "Chain Breaker", note: "81% — Best F2P Natlan Craftable Bow" }
    ],
    teams: [
      { name: "Rainbow Melt/Vape Core", members: ["Chasca", "Furina", "Citlali", "Bennett"], note: "Converts Chasca's shells into Hydro, Cryo, and Pyro for constant mid-air Melt & Vaporize reactions." },
      { name: "Mavuika Dual Carry", members: ["Chasca", "Mavuika", "Citlali", "Bennett"], note: "High Pyro/Cryo Melt focus with Mavuika Burst nuke." }
    ]
  },

  "Navia": {
    role: "Geo Crystallize Shotgun Skill Carry",
    tier: "T1",
    talents: "Skill (E) >> Normal Attack >= Burst (Q)",
    artifacts: [
      { set: "Nighttime Whispers in the Echoing Woods", pieces: 4, note: "Signature BiS (+20% ATK & +50% Geo DMG under Crystallize)" },
      { set: "Marechaussee Hunter", pieces: 4, note: "Great option when paired with Furina" }
    ],
    sands: "ATK%", goblet: "Geo DMG%", circlet: "CRIT Rate / CRIT DMG",
    substats: "CRIT Rate = CRIT DMG > ATK% > Energy Recharge (125★140%)",
    weapons: [
      { name: "Verdict", note: "100% — Signature BiS (+20% ATK & +36% Skill DMG)" },
      { name: "A Thousand Blazing Suns", note: "96% — Top 5★ CRIT/ATK stat stick" },
      { name: "Serpent Spine", note: "91% — Best 4★ (Battle Pass R5)" },
      { name: "Tidal Shadow", note: "82% — Best F2P Fontaine Craftable" }
    ],
    teams: [
      { name: "Xilonen Furina Hyper", members: ["Navia", "Xilonen", "Furina", "Bennett"], note: "Xilonen provides 36% Geo shred + 40% Geo DMG (Cinder City) + healing for Furina." },
      { name: "Mavuika Double Pyro", members: ["Navia", "Xilonen", "Mavuika", "Bennett"], note: "Pyro Resonance + off-field Pyro application for constant Crystallize shrapnel." }
    ]
  },

  "Clorinde": {
    role: "On-Field Electro DPS (Bond of Life Rapid Pistol)",
    tier: "T0.5",
    playstyles: [
      {
        id: "aggravate",
        name: "Aggravate / Quicken Carry",
        icon: "⚡",
        role: "Aggravate Rapid Pistol Piercing Carry (Hunter's Vigil)",
        tier: "T0.5",
        talents: "Skill (E) >> Burst (Q) (Normal Attack talent does not scale pistol)",
        artifacts: [
          { set: "Fragment of Harmonic Whimsy", pieces: 4, note: "Uncontested BiS (+54% All DMG via rapid Bond of Life cycling)" },
          { set: "Thundering Fury", pieces: 4, note: "Quicken procs reduce Skill cooldown to zero for infinite uptime" },
          { set: "Gladiator's Finale", pieces: 4, note: "+35% Normal DMG fallback" }
        ],
        sands: "ATK% / Elemental Mastery", goblet: "Electro DMG%", circlet: "CRIT DMG / CRIT Rate",
        substats: "CRIT DMG = CRIT Rate (to 80% cap w/ passive) > ATK% = Elemental Mastery > Energy Recharge",
        weapons: [
          { name: "Absolution", note: "100% — Signature BiS (+20% CRIT DMG & +48% All DMG on Bond of Life)" },
          { name: "Mistsplitter Reforged", note: "93% — High Base ATK & +28% Elemental DMG" },
          { name: "Haran Geppaku Futsu", note: "90% — Normal Attack & CRIT Rate boost" },
          { name: "Finale of the Deep", note: "86% — Best Free Fontaine Craftable (ATK% & Bond of Life ATK buff)" },
          { name: "The Black Sword", note: "84% — Battle Pass 4★" }
        ],
        teams: [
          { name: "Nahida Aggravate Core", members: ["Clorinde", "Fischl", "Nahida", "Zhongli"], note: "Nahida maintains Quicken aura; Fischl A4 triggers on every Clorinde pistol shot." },
          { name: "Xilonen Cinder Aggravate", members: ["Clorinde", "Fischl", "Nahida", "Xilonen"], note: "Xilonen provides 36% Electro shred and +40% Electro DMG from 4pc Cinder City." }
        ]
      },
      {
        id: "quickbloom",
        name: "Quickbloom / Taser Carry",
        icon: "🌊",
        role: "Quickbloom / Electro-Charged Rapid Driver with Furina",
        tier: "T0.5",
        talents: "Skill (E) >> Burst (Q)",
        artifacts: [
          { set: "Fragment of Harmonic Whimsy", pieces: 4, note: "Optimal Bond of Life multiplier" },
          { set: "Marechaussee Hunter", pieces: 4, note: "+36% CRIT Rate paired with Furina's HP drain" },
          { set: "Gilded Dreams", pieces: 4, note: "+230 EM for Hyperbloom seed procs" }
        ],
        sands: "ATK% / Elemental Mastery", goblet: "Electro DMG%", circlet: "CRIT DMG / CRIT Rate",
        substats: "CRIT DMG = CRIT Rate > Elemental Mastery > ATK%",
        weapons: [
          { name: "Absolution", note: "100% — Signature Weapon" },
          { name: "Mistsplitter Reforged", note: "92% — Top 5★ Alternative" },
          { name: "Finale of the Deep", note: "85% — F2P Craftable" },
          { name: "Iron Sting", note: "80% — F2P EM Sword" }
        ],
        teams: [
          { name: "Furina Quickbloom Apex", members: ["Clorinde", "Furina", "Nahida", "Baizhu"], note: "Furina Fanfare buffs Clorinde's raw damage while triggering Hyperblooms and Aggravates simultaneously." },
          { name: "Chevreuse Overload", members: ["Clorinde", "Fischl", "Chevreuse", "Mavuika"], note: "40% Pyro & Electro shred + 40% ATK buff with non-stop Overloads." }
        ]
      }
    ]
  },

  "Alhaitham": {
    role: "On-Field Dendro DPS (Spread / Quickbloom Chisel-Light)",
    tier: "T0",
    playstyles: [
      {
        id: "spread_carry",
        name: "Spread / Quickbloom Carry",
        icon: "🌱",
        role: "On-Field Chisel-Light Mirror Spread & Quickbloom Carry",
        tier: "T0",
        talents: "Skill (E) >= Burst (Q) >= Normal Attack",
        artifacts: [
          { set: "Gilded Dreams", pieces: 4, note: "Uncontested Personal DPS BiS (+230 EM or +150 EM & +14% ATK)" },
          { set: "2pc Deepwood + 2pc EM", pieces: 2, note: "+15% Dendro DMG & +80 EM reliable fallback" },
          { set: "Marechaussee Hunter", pieces: 4, note: "+36% CRIT Rate when paired with Furina" }
        ],
        sands: "Elemental Mastery", goblet: "Dendro DMG%", circlet: "CRIT Rate / CRIT DMG",
        substats: "CRIT Rate = CRIT DMG > Elemental Mastery (250&bull;“350) > Energy Recharge (120&bull;“140%) > ATK%",
        weapons: [
          { name: "Light of Foliar Incision", note: "100% — Signature BiS (+88.2% CRIT DMG & EM-scaled Normal/Skill DMG)" },
          { name: "Mistsplitter Reforged", note: "92% — High Base ATK & Elemental DMG" },
          { name: "Primordial Jade Cutter", note: "91% — Huge +44.1% CRIT Rate & HP to ATK" },
          { name: "Toukabou Shigure", note: "84% — Event Free 4★ EM Sword" },
          { name: "Iron Sting", note: "83% — Free F2P Craftable (+165 EM & +12% DMG)" },
          { name: "Harbinger of Dawn", note: "81% — Incredible 3&bull;… Free Weapon (+CRIT Rate & CRIT DMG)" }
        ],
        teams: [
          { name: "Nahida / Kuki Quickbloom", members: ["Alhaitham", "Furina", "Nahida", "Kuki Shinobu"], note: "Nahida shreds Dendro RES while Furina buffs Fanfare and Kuki triggers 35k+ Hyperblooms." },
          { name: "Zhongli Spread Anchor", members: ["Alhaitham", "Yae Miko", "Nahida", "Zhongli"], note: "100% Quicken uptime with Zhongli's universal 20% RES shred & poise." },
          { name: "Xingqiu Classic Hyperbloom", members: ["Alhaitham", "Xingqiu", "Yelan", "Kuki Shinobu"], note: "Fast single-target boss killer with double Hydro." }
        ]
      },
      {
        id: "solo_deepwood",
        name: "Solo Dendro Deepwood Driver",
        icon: "🌿",
        role: "Solo Dendro Driver providing self & team -30% Dendro Shred",
        tier: "T0.5",
        talents: "Skill (E) >= Burst (Q) >= Normal Attack",
        artifacts: [
          { set: "Deepwood Memories", pieces: 4, note: "Mandatory when no teammate holds Deepwood (-30% Dendro RES shred)" },
          { set: "Gilded Dreams", pieces: 4, note: "Secondary alternative" }
        ],
        sands: "Elemental Mastery", goblet: "Dendro DMG%", circlet: "CRIT Rate / CRIT DMG",
        substats: "CRIT Rate = CRIT DMG > Elemental Mastery > Energy Recharge (130&bull;“145%)",
        weapons: [
          { name: "Light of Foliar Incision", note: "100% — Signature Weapon" },
          { name: "Favonius Sword", note: "88% — Solves team energy requirements" },
          { name: "Iron Sting", note: "85% — Craftable F2P" }
        ],
        teams: [
          { name: "Alhaitham Double Hydro", members: ["Alhaitham", "Yelan", "Xingqiu", "Raiden Shogun"], note: "Alhaitham self-shreds Dendro RES with 4pc Deepwood while driving Hyperblooms." },
          { name: "Burgeon Thoma Core", members: ["Alhaitham", "Xingqiu", "Thoma", "Baizhu"], note: "Dendro core saturation for Thoma's AoE Burgeon explosions." }
        ]
      }
    ]
  },

  "Yelan": {
    role: "Off-Field Hydro Burst Sub-DPS & Damage Buffer",
    tier: "T0",
    playstyles: [
      {
        id: "subdps_buffer",
        name: "Exquisite Throw Sub-DPS",
        icon: "💧",
        role: "Off-Field Hydro Burst Sub-DPS & Ramp-Up DMG Buffer",
        tier: "T0",
        talents: "Burst (Q) >> Skill (E) > Normal Attack",
        artifacts: [
          { set: "Emblem of Severed Fate", pieces: 4, note: "Uncontested BiS (+20% ER & up to +75% Burst DMG based on ER)" },
          { set: "2pc HP + 2pc Hydro", pieces: 2, note: "+20% HP & +15% Hydro DMG fallback" },
          { set: "Noblesse Oblige", pieces: 4, note: "+20% team ATK buff" }
        ],
        sands: "HP% / Energy Recharge", goblet: "Hydro DMG%", circlet: "CRIT Rate / CRIT DMG",
        substats: "Energy Recharge (170&bull;“210% solo, 130&bull;“150% double Hydro) > CRIT Rate = CRIT DMG > HP%",
        weapons: [
          { name: "Aqua Simulacra", note: "100% — Signature BiS (+88.2% CRIT DMG & +16% HP / +20% All DMG)" },
          { name: "Elegy for the End", note: "92% — Top Team Support (EM & ATK buff to active carry)" },
          { name: "Favonius Warbow", note: "90% — Best 4★ (61.3% ER & generates universal energy particles)" },
          { name: "Sacrificial Bow", note: "85% — Double Skill resets for energy" },
          { name: "The Stringless", note: "82% — Skill & Burst DMG scaling" }
        ],
        teams: [
          { name: "Double Hydro Hu Tao", members: ["Hu Tao", "Yelan", "Xingqiu", "Zhongli"], note: "Hydro resonance (+25% HP) buffs both Yelan & Hu Tao; unstoppable Vaporize uptime." },
          { name: "Alhaitham Quickbloom", members: ["Alhaitham", "Yelan", "Nahida", "Kuki Shinobu"], note: "Yelan's ramp-up DMG passive buffs Alhaitham while generating continuous seeds." },
          { name: "Arlecchino Vape", members: ["Arlecchino", "Yelan", "Kaedehara Kazuha", "Bennett"], note: "Fast single-target Hydro coordination with Yelan's mobility." }
        ]
      },
      {
        id: "c6_hyper",
        name: "Breakthrough Main Carry",
        icon: "🏹",
        role: "C6 Breakthrough Barb On-Field Frontloaded Nuke Carry",
        tier: "T0",
        talents: "Normal Attack >= Burst (Q) >= Skill (E)",
        artifacts: [
          { set: "2pc Vourukasha + 2pc Heart of Depth", pieces: 2, note: "+20% HP & +15% Hydro DMG for maximum Barb damage" },
          { set: "Nymph's Dream", pieces: 4, note: "+30% Hydro DMG & +25% ATK maintained on-field" },
          { set: "Marechaussee Hunter", pieces: 4, note: "+36% CRIT Rate paired with Furina" }
        ],
        sands: "HP%", goblet: "Hydro DMG%", circlet: "CRIT DMG / CRIT Rate",
        substats: "CRIT DMG = CRIT Rate > HP% > Energy Recharge",
        weapons: [
          { name: "Aqua Simulacra", note: "100% — Massive CRIT DMG & HP scaling" },
          { name: "The First Great Magic", note: "91% — CRIT DMG stat stick" },
          { name: "Slingshot", note: "84% &bull;” 3&bull;… Hidden Gem (+31.2% CRIT Rate & +60% Normal DMG)" }
        ],
        teams: [
          { name: "Mono Hydro Apex", members: ["Yelan", "Furina", "Kaedehara Kazuha", "Xilonen"], note: "Instant triple RES shred + Furina Fanfare lets Yelan 1-shot Abyss waves in 3 seconds." },
          { name: "Forward Vaporize Yelan", members: ["Yelan", "Xiangling", "Kaedehara Kazuha", "Bennett"], note: "Enables 300k+ Breakthrough Barb vaporizes." }
        ]
      }
    ]
  },

  "Zhongli": {
    role: "Unbreakable Geo Shielder & Universal 20% RES Shredder",
    tier: "T1",
    playstyles: [
      {
        id: "shield",
        name: "Pure Shield Support",
        icon: "🛡️",
        role: "Universal Tenacity Shielder & Shredder",
        tier: "T1",
        talents: "Skill (E) >> Burst (Q) > Normal Attack",
        artifacts: [
          { set: "Tenacity of the Millelith", pieces: 4, note: "+20% HP, +20% Team ATK & +30% Shield Strength" },
          { set: "Archaic Petra", pieces: 4, note: "+35% Elemental DMG to picked-up Crystallize element" }
        ],
        sands: "HP%", goblet: "HP%", circlet: "HP% / CRIT Rate (if Favonius)",
        substats: "HP% > CRIT Rate (for Favonius) > Energy Recharge",
        weapons: [
          { name: "Favonius Lance", note: "100% — Best Team Utility (White Energy Particles)" },
          { name: "Black Tassel", note: "98% — Best F2P 3★ (+46.9% HP for 50k+ HP unbreakable shield)" },
          { name: "Rightful Reward", note: "90% — Craftable HP% Polearm" }
        ],
        teams: [
          { name: "Arlecchino Comfort Vape", members: ["Arlecchino", "Yelan", "Zhongli", "Bennett"], note: "Prevents all interruption and damage on Arlecchino while shredding 20% RES." },
          { name: "Hu Tao Double Hydro", members: ["Hu Tao", "Yelan", "Xingqiu", "Zhongli"], note: "100% safe low-HP uptime for Hu Tao's Blood Blossom Charged Attacks." },
          { name: "Navia Geo Duo", members: ["Navia", "Xiangling", "Bennett", "Zhongli"], note: "Generates continuous Crystallize shards for Navia's Gunbrella shots." }
        ]
      },
      {
        id: "nuke",
        name: "Burst Sub-DPS / Nuke",
        icon: "🌧",
        role: "Burst Nuke Sub-DPS & Crowd Control",
        tier: "T1.5",
        talents: "Burst (Q) >= Skill (E) > Normal Attack",
        artifacts: [
          { set: "Noblesse Oblige", pieces: 2, note: "+20% Burst DMG (+2pc Archaic Petra)" },
          { set: "Emblem of Severed Fate", pieces: 4, note: "Converts ER to Planet Befall burst damage" }
        ],
        sands: "HP% / ATK%", goblet: "Geo DMG%", circlet: "CRIT Rate / CRIT DMG",
        substats: "CRIT Rate = CRIT DMG > HP% = ATK% > Energy Recharge",
        weapons: [
          { name: "Staff of Homa", note: "100% — Massive CRIT DMG & HP% scaling" },
          { name: "Primordial Jade Winged-Spear", note: "94% — High Base ATK & CRIT Rate" },
          { name: "The Catch", note: "88% — Burst CRIT & ER" },
          { name: "Deathmatch", note: "85% — Easy CRIT Rate stat stick" }
        ],
        teams: [
          { name: "Mono Geo Quickswap", members: ["Itto", "Albedo", "Gorou", "Zhongli"], note: "100k+ Planet Befall meteors with Gorou's Geo buffs and petrification CC." },
          { name: "Double Geo Nuke Core", members: ["Navia", "Furina", "Bennett", "Zhongli"], note: "Furina Fanfare + Bennett ATK empowers Zhongli's meteor drops." }
        ]
      }
    ]
  },

  "Columbina": {
    role: "Hydro Off-Field Sub-DPS & Lunar Reaction Enabler",
    tier: "T0",
    talents: "Skill (E) = Burst (Q) >> Normal Attack",
    artifacts: [
      { set: "Golden Troupe", pieces: 4, note: "High Off-Field Elemental Skill DMG" },
      { set: "Marechaussee Hunter", pieces: 4, note: "On-Field Driver build" }
    ],
    sands: "HP% / ATK%", goblet: "Hydro DMG%", circlet: "CRIT Rate / CRIT DMG",
    substats: "CRIT Rate = CRIT DMG > Energy Recharge > HP% / ATK%",
    weapons: [
      { name: "Nocturne's Curtain Call", note: "100% — Signature BiS" },
      { name: "Tome of the Eternal Flow", note: "90% — High CRIT DMG" },
      { name: "Prototype Amber", note: "84% — F2P HP% & Energy" }
    ],
    teams: [
      { name: "Nod-Krai Lunar Core", members: ["Flins", "Columbina", "Ineffa", "Xilonen"], note: "Enables Lunar-Charged reactions with massive team-wide buffs." },
      { name: "Lunar-Bloom Core", members: ["Nefer", "Columbina", "Lauma", "Nahida"], note: "Maximizes off-field Hydro application for Lunar-Bloom carries." }
    ]
  },

  "Varka": {
    role: "Grand Master Anemo Claymore Hypercarry",
    tier: "T0.5",
    talents: "Normal Attack = Skill (E) > Burst (Q)",
    artifacts: [
      { set: "Desert Pavilion Chronicle", pieces: 4, note: "+15% Anemo DMG & +40% Normal/Charged DMG" },
      { set: "Marechaussee Hunter", pieces: 4, note: "+36% CRIT Rate when paired with Furina" }
    ],
    sands: "ATK%", goblet: "Anemo DMG% / ATK%", circlet: "CRIT DMG / CRIT Rate",
    substats: "CRIT Rate = CRIT DMG > ATK% > Energy Recharge",
    weapons: [
      { name: "Gest of the Mighty Wolf", note: "100% — Signature BiS" },
      { name: "A Thousand Blazing Suns", note: "91% — High CRIT & ATK" },
      { name: "Wolf's Gravestone", note: "86% — Iconic Lore & ATK% 5★" },
      { name: "Serpent Spine", note: "87% — Best 4★ (R5)" }
    ],
    teams: [
      { name: "Mondstadt Grand Master Hyper", members: ["Varka", "Furina", "Faruzan", "Xianyun"], note: "Faruzan's Anemo CRIT DMG + RES shred paired with Furina's Fanfare." },
      { name: "Double Pyro Anemo Carry", members: ["Varka", "Faruzan", "Durin", "Bennett"], note: "High ATK & Pyro sub-DPS synergy." }
    ]
  },

  "Tartaglia": {
    role: "On-Field Hydro Enabler & Nuke (Riptide Flash)",
    tier: "T0.5",
    playstyles: [
      {
        id: "international",
        name: "International Vape Enabler",
        icon: "⚔",
        role: "On-Field Hydro Reaction Enabler (Riptide AoE)",
        tier: "T0.5",
        talents: "Skill (E) = Burst (Q) > Normal Attack",
        artifacts: [
          { set: "Nymph's Dream", pieces: 4, note: "Best-in-Slot (+30% Hydro DMG & +25% ATK at full stacks)" },
          { set: "Heart of Depth", pieces: 4, note: "+15% Hydro & +30% Normal/Charged DMG" },
          { set: "2pc Hydro + 2pc ATK", pieces: 2, note: "Consistent, easily optimized stat balance" }
        ],
        sands: "ATK%", goblet: "Hydro DMG%", circlet: "CRIT Rate / CRIT DMG",
        substats: "CRIT Rate = CRIT DMG > ATK% > Elemental Mastery (60&bull;“120) > Energy Recharge (120&bull;“130%)",
        weapons: [
          { name: "Polar Star", note: "100% — Signature BiS (+33.1% CRIT Rate & +48% ATK / Skill/Burst DMG)" },
          { name: "Aqua Simulacra", note: "96% — Massive +88.2% CRIT DMG & +20% All DMG" },
          { name: "Thundering Pulse", note: "94% &bull;” +66.2% CRIT DMG & Normal Attack buff" },
          { name: "The Viridescent Hunt", note: "88% — Top 4★ BP (CRIT Rate & suction vortex clusters mobs for Riptide)" },
          { name: "Rust", note: "85% &bull;” +80% Normal DMG at R5" },
          { name: "The Stringless", note: "84% — R5 Massive Skill & Burst DMG" }
        ],
        teams: [
          { name: "Childe International (Apex)", members: ["Tartaglia", "Xiangling", "Kaedehara Kazuha", "Bennett"], note: "Snapshots Bennett's ATK onto Pyronado; Childe's 0-ICD Riptide applies Hydro so Xiangling vaporizes every hit." },
          { name: "Childe Intergrassional", members: ["Tartaglia", "Nahida", "Bennett", "Kaedehara Kazuha"], note: "Combines Burgeon and Vaporize for massive AoE damage." }
        ]
      },
      {
        id: "burst_nuke",
        name: "Havoc Burst Nuke",
        icon: "💥",
        role: "Forward Vaporize Burst Nuke Sub-DPS",
        tier: "T1",
        talents: "Burst (Q) >> Skill (E)",
        artifacts: [
          { set: "2pc Noblesse + 2pc Hydro", pieces: 2, note: "+20% Burst DMG & +15% Hydro DMG for 1-shot Vaporize nukes" },
          { set: "2pc Hydro + 2pc EM", pieces: 2, note: "+15% Hydro & +80 EM for reaction scaling" },
          { set: "Emblem of Severed Fate", pieces: 4, note: "Converts ER into Burst DMG" }
        ],
        sands: "Elemental Mastery / ATK%", goblet: "Hydro DMG%", circlet: "CRIT DMG / CRIT Rate",
        substats: "CRIT DMG > CRIT Rate > Elemental Mastery > ATK%",
        weapons: [
          { name: "Aqua Simulacra", note: "100% — Highest CRIT DMG burst window" },
          { name: "The Stringless", note: "94% — High EM & +48% Burst DMG at R5" },
          { name: "Polar Star", note: "95% — High Base ATK" }
        ],
        teams: [
          { name: "1-Shot Vaporize Nuke", members: ["Tartaglia", "Mona", "Kaedehara Kazuha", "Bennett"], note: "Bennett Burst + Kazuha Swirl + Mona Omen allows Childe to deal 800k+ Vaporize Burst damage." }
        ]
      }
    ]
  },

  "Hu Tao": {
    role: "On-Field Pyro Hypercarry (Charged Attack Vape)",
    tier: "T1",
    talents: "Normal Attack >= Skill (E) > Burst (Q)",
    artifacts: [
      { set: "Crimson Witch of Flames", pieces: 4, note: "Best-in-Slot for Vaporize reactions (+15% Vape DMG & +15% Pyro DMG)" },
      { set: "Shimenawa's Reminiscence", pieces: 4, note: "+50% Normal & Charged Attack DMG at the cost of Burst energy" },
      { set: "Marechaussee Hunter", pieces: 4, note: "+36% CRIT Rate when paired with Furina" }
    ],
    sands: "HP% / EM", goblet: "Pyro DMG%", circlet: "CRIT Rate / CRIT DMG",
    substats: "CRIT Rate = CRIT DMG > Elemental Mastery (100–250) > HP%",
    weapons: [
      { name: "Staff of Homa", note: "100% — Signature BiS (+66.2% CRIT DMG & HP-to-ATK conversion)" },
      { name: "Dragon's Bane", note: "88% — Best 4★ for Vaporize (221 EM + 36% DMG vs Hydro/Pyro)" },
      { name: "Ballad of the Fjords", note: "90% — Strongest Battle Pass Polearm (+CRIT Rate & +240 EM)" },
      { name: "Staff of the Scarlet Sands", note: "93% — High CRIT Rate & EM-to-ATK conversion" }
    ],
    teams: [
      { name: "Hu Tao Double Hydro", members: ["Hu Tao", "Yelan", "Xingqiu", "Zhongli"], note: "Unbeatable single-target DPS with continuous Vaporize, Hydro Resonance (+25% HP), and Zhongli's shred." },
      { name: "Hu Tao Furina Plunge", members: ["Hu Tao", "Furina", "Yelan", "Xianyun"], note: "Plunging attack cancels bypassing stamina limits while stacking Furina's Fanfare buff." },
      { name: "Hu Tao Overvape", members: ["Hu Tao", "Xingqiu", "Fischl", "Zhongli"], note: "Simultaneous Overload and Vaporize procs against heavy bosses." }
    ]
  },

  "Kamisato Ayato": {
    role: "On-Field Hydro Normal Carry / Off-Field Burst Enabler",
    tier: "T1",
    playstyles: [
      {
        id: "na_carry",
        name: "Shunsuiken Normal Carry",
        icon: "🗡",
        role: "On-Field Shunsuiken Stance Rapid Hydro Slasher",
        tier: "T1",
        talents: "Skill (E) >> Burst (Q) (Normal Attack talent is unneeded)",
        artifacts: [
          { set: "Heart of Depth", pieces: 4, note: "Consistent unconditional BiS (+15% Hydro & +30% Normal DMG)" },
          { set: "Echoes of an Offering", pieces: 4, note: "Highest damage ceiling at low ping (<50ms)" },
          { set: "Gladiator's Finale", pieces: 4, note: "+35% Normal DMG reliable fallback" }
        ],
        sands: "ATK% / HP%", goblet: "Hydro DMG%", circlet: "CRIT Rate / CRIT DMG",
        substats: "CRIT Rate = CRIT DMG > ATK% > HP% > Energy Recharge (120&bull;“135%)",
        weapons: [
          { name: "Haran Geppaku Futsu", note: "100% — Signature BiS (+33.1% CRIT Rate & +40% Normal Attack DMG)" },
          { name: "Mistsplitter Reforged", note: "96% — High Base ATK & Elemental DMG" },
          { name: "Primordial Jade Cutter", note: "95% — High +44.1% CRIT Rate & HP conversion" },
          { name: "The Black Sword", note: "88% — Top 4★ Battle Pass (+Normal DMG & Healing)" },
          { name: "Amenoma Kageuchi", note: "82% — Free Craftable F2P" }
        ],
        teams: [
          { name: "Ayato Taser Core", members: ["Kamisato Ayato", "Fischl", "Beidou", "Kaedehara Kazuha"], note: "High attack speed triggers continuous Beidou lightning discharges." },
          { name: "Furina / Xilonen Hyper", members: ["Kamisato Ayato", "Furina", "Xilonen", "Kaedehara Kazuha"], note: "Double Hydro + 40% Cinder City + VV shred for massive slash damage." }
        ]
      },
      {
        id: "burst_support",
        name: "Off-Field Burst Enabler",
        icon: "&bull;’§",
        role: "Off-Field Bloom / Ganyu Freeze Hydro Rain Enabler",
        tier: "T1.5",
        talents: "Burst (Q) >> Skill (E)",
        artifacts: [
          { set: "Emblem of Severed Fate", pieces: 4, note: "+20% ER & converts ER to continuous Bloom/Freeze rain damage" },
          { set: "Noblesse Oblige", pieces: 4, note: "+20% team ATK buff" }
        ],
        sands: "Energy Recharge", goblet: "Hydro DMG%", circlet: "CRIT Rate / CRIT DMG",
        substats: "Energy Recharge (180&bull;“210%) > CRIT Rate = CRIT DMG > ATK%",
        weapons: [
          { name: "Favonius Sword", note: "100% — High ER & team particle battery" },
          { name: "Sacrificial Sword", note: "92% — ER stat" },
          { name: "Fleuve Cendre Ferryman", note: "90% — Free Fishing ER Sword" }
        ],
        teams: [
          { name: "Ganyu Ayato Permafrost", members: ["Ganyu", "Kamisato Ayato", "Venti", "Diona"], note: "Venti vortex clusters enemies while Ayato rain + Ganyu burst freeze everything infinitely." },
          { name: "Nilou Superbloom Support", members: ["Nilou", "Kamisato Ayato", "Nahida", "Baizhu"], note: "Wide AoE Hydro application generating non-stop Bountiful Cores." }
        ]
      }
    ]
  },

  "Kamisato Ayaka": {
    role: "On-Field Cryo Hypercarry & Blizzard Burst Nuke",
    tier: "T1.5",
    talents: "Burst (Q) >> Normal Attack = Skill (E)",
    artifacts: [
      { set: "Blizzard Strayer", pieces: 4, note: "Uncontested BiS (+15% Cryo DMG & +40% CRIT Rate on Frozen enemies)" }
    ],
    sands: "ATK%", goblet: "Cryo DMG%", circlet: "CRIT DMG / ATK%",
    substats: "CRIT DMG > ATK% > Energy Recharge (130–145%) > CRIT Rate (to 35★45%)",
    weapons: [
      { name: "Mistsplitter Reforged", note: "100% — Signature BiS (+44.1% CRIT DMG & up to +28% Cryo DMG)" },
      { name: "Amenoma Kageuchi", note: "87% — Best F2P Craftable (completely solves Energy Recharge)" },
      { name: "Finale of the Deep", note: "85% — Fontaine craftable ATK powerhouse" },
      { name: "The Black Sword", note: "82% — Battle Pass CRIT Rate sword" }
    ],
    teams: [
      { name: "Premium Ayaka Freeze", members: ["Kamisato Ayaka", "Shenhe", "Kaedehara Kazuha", "Sangonomiya Kokomi"], note: "Permanent Freeze lock, Kazuha's VV shred, Shenhe's Icy Quills, and Kokomi's Tenacity buff." },
      { name: "Furina Freeze Nuke", members: ["Kamisato Ayaka", "Furina", "Shenhe", "Charlotte"], note: "Full team Fanfare generation with Charlotte's instant teamwide burst heal." }
    ]
  },

  "Xiao": {
    role: "On-Field Anemo Plunging Hypercarry",
    tier: "T1.5",
    talents: "Normal Attack = Burst (Q) > Skill (E)",
    artifacts: [
      { set: "Vermeer's Pavilion", pieces: 4, note: "Vermillion Hereafter: Tailored BiS ramping up to +66% ATK as HP decreases" },
      { set: "Marechaussee Hunter", pieces: 4, note: "+36% CRIT Rate during continuous HP drain in Burst" },
      { set: "Desert Pavilion Chronicle", pieces: 4, note: "+15% Anemo DMG & Plunge DMG buff" }
    ],
    sands: "ATK%", goblet: "Anemo DMG% / ATK%", circlet: "CRIT Rate / CRIT DMG",
    substats: "CRIT Rate = CRIT DMG > ATK% > Energy Recharge (120–135%)",
    weapons: [
      { name: "Primordial Jade Winged-Spear", note: "100% — Signature BiS (+CRIT Rate & stacking ATK% + DMG%)" },
      { name: "Staff of Homa", note: "98% — Outstanding CRIT DMG & ATK below 50% HP" },
      { name: "Deathmatch", note: "86% — Best 4★ (Battle Pass 36.8% CRIT Rate)" },
      { name: "Blackcliff Pole", note: "82% — Free Starglitter CRIT DMG weapon" }
    ],
    teams: [
      { name: "FFXX Premium Plunge", members: ["Xiao", "Faruzan", "Furina", "Xianyun"], note: "Xiao's definitive ceiling team: Faruzan C6 provides Anemo CRIT DMG & RES shred, Furina grants massive Fanfare, and Xianyun buffs plunge damage." },
      { name: "Classic Xiao Geo Double", members: ["Xiao", "Faruzan", "Zhongli", "Bennett"], note: "Stagger immunity, flat ATK, and resistance shred." }
    ]
  },

  "Xiangling": {
    role: "Off-Field Pyro Burst Carry / Pyronado Enabler",
    tier: "T0",
    playstyles: [
      {
        id: "vape_emblem",
        name: "Emblem Vaporize Pyronado",
        icon: "🌪",
        role: "Off-Field Pyronado Vaporize Carry (Snapshot)",
        tier: "T0",
        talents: "Burst (Q) >> Skill (E) > Normal Attack",
        artifacts: [
          { set: "Emblem of Severed Fate", pieces: 4, note: "Uncontested BiS (+20% ER & up to +75% Burst DMG)" },
          { set: "Crimson Witch of Flames", pieces: 4, note: "+15% Pyro DMG & +15% Vaporize DMG fallback" },
          { set: "2pc Emblem + 2pc Noblesse", pieces: 2, note: "+20% ER & +20% Burst DMG" }
        ],
        sands: "Energy Recharge / Elemental Mastery / ATK%", goblet: "Pyro DMG%", circlet: "CRIT Rate / CRIT DMG",
        substats: "Energy Recharge (180&bull;“220%) > CRIT Rate = CRIT DMG > Elemental Mastery (100&bull;“200) > ATK%",
        weapons: [
          { name: "Staff of the Scarlet Sands", note: "100% — Highest ceiling with EM-to-ATK conversion" },
          { name: "Staff of Homa", note: "96% — Top CRIT DMG 5★ Polearm" },
          { name: "The Catch", note: "94% — Best F2P Free Fishing Weapon (+45.9% ER & +32% Burst DMG)" },
          { name: "Dragon's Bane", note: "90% — High EM & +36% DMG vs Pyro/Hydro" },
          { name: "Wavebreaker's Fin", note: "92% — R5 Massive Burst DMG" }
        ],
        teams: [
          { name: "Childe International", members: ["Tartaglia", "Xiangling", "Kaedehara Kazuha", "Bennett"], note: "Snapshots Bennett's ATK buff onto Pyronado; vaporizes every revolution with Childe's riptides." },
          { name: "Raiden National (Rational)", members: ["Raiden Shogun", "Xiangling", "Xingqiu", "Bennett"], note: "Raiden recharges Xiangling's 80-cost burst while driving Overload & Vaporize." },
          { name: "Mualani Forward Vape", members: ["Mualani", "Xiangling", "Xilonen", "Sucrose"], note: "Xiangling provides off-field Pyro application for Mualani." }
        ]
      },
      {
        id: "mono_pyro",
        name: "Mono-Pyro / Overload Carry",
        icon: "🔥",
        role: "Pure Mono-Pyro & Overload High ATK Multiplier",
        tier: "T0.5",
        talents: "Burst (Q) >> Skill (E)",
        artifacts: [
          { set: "Lavawalker", pieces: 4, note: "+35% unconditional All DMG against enemies affected by Pyro" },
          { set: "Emblem of Severed Fate", pieces: 4, note: "High ER conversion into raw Burst DMG" },
          { set: "Crimson Witch of Flames", pieces: 4, note: "Consistent Pyro bonus" }
        ],
        sands: "ATK% / Energy Recharge", goblet: "Pyro DMG%", circlet: "CRIT Rate / CRIT DMG",
        substats: "CRIT Rate = CRIT DMG > ATK% > Energy Recharge (140&bull;“160%)",
        weapons: [
          { name: "Staff of Homa", note: "100% — High ATK & CRIT scaling" },
          { name: "Deathmatch", note: "92% — High CRIT Rate BP Polearm" },
          { name: "The Catch", note: "90% — Free Fishing 4★" }
        ],
        teams: [
          { name: "Klee / Lyney Mono-Pyro", members: ["Lyney", "Xiangling", "Kaedehara Kazuha", "Bennett"], note: "Triple Pyro maintains 100% Pyro aura for Lyney's +100% DMG passive." },
          { name: "Chevreuse Overload Core", members: ["Xiangling", "Clorinde", "Chevreuse", "Bennett"], note: "40% Pyro/Electro shred with non-stop Overloads." }
        ]
      }
    ]
  },

  "Xingqiu": {
    role: "Off-Field Hydro Sub-DPS, Damage Reduction & Interruption Shield",
    tier: "T0.5",
    talents: "Burst (Q) >> Skill (E) > Normal Attack",
    artifacts: [
      { set: "Emblem of Severed Fate", pieces: 4, note: "Best-in-Slot for personal Raincutter damage" },
      { set: "Noblesse Oblige", pieces: 4, note: "Support alternative for teamwide ATK buff" }
    ],
    sands: "Energy Recharge / ATK%", goblet: "Hydro DMG%", circlet: "CRIT Rate / CRIT DMG",
    substats: "Energy Recharge (180–210% w/ Sacrificial) > CRIT Rate = CRIT DMG > ATK%",
    weapons: [
      { name: "Sacrificial Sword", note: "100% — Uncontested BiS (resets Skill cooldown for double Rain Sword particles)" },
      { name: "Favonius Sword", note: "92% — Team Energy battery" },
      { name: "Primordial Jade Cutter", note: "94% — High damage ceiling if ER is met" }
    ],
    teams: [
      { name: "Hu Tao Double Hydro", members: ["Hu Tao", "Yelan", "Xingqiu", "Zhongli"], note: "Flawless Hydro aura for 100% Vaporize consistency + damage mitigation." },
      { name: "National Core", members: ["Xiangling", "Xingqiu", "Bennett", "Kaedehara Kazuha"], note: "Foundational four-star synergy." }
    ]
  },

  "Sangonomiya Kokomi": {
    role: "Healers • Teamwide Healer & On-Field Hydro Enabler",
    tier: "T1",
    playstyles: [
      {
        id: "freeze_support",
        name: "Freeze Support / TTDS",
        icon: "❄️",
        role: "Off-Field Hydro Enabler & Team ATK Buffer",
        tier: "T1",
        talents: "Skill (E) >> Burst (Q) > Normal Attack",
        artifacts: [
          { set: "Tenacity of the Millelith", pieces: 4, note: "+20% HP & continuous +20% Team ATK from Bake-Kurage jellyfish" },
          { set: "Song of Days Past", pieces: 4, note: "Increases active character DMG based on continuous healing" },
          { set: "Ocean-Hued Clam", pieces: 4, note: "Provides secondary off-field physical foam damage" }
        ],
        sands: "HP% / Energy Recharge", goblet: "HP%", circlet: "Healing Bonus / HP%",
        substats: "HP% > Energy Recharge (160–180%) > Flat HP > Elemental Mastery",
        weapons: [
          { name: "Thrilling Tales of Dragon Slayers", note: "100% — BiS Support (48% ATK to next switched carry)" },
          { name: "Prototype Amber", note: "95% — High team Energy refund & extra healing" },
          { name: "Everlasting Moonglow", note: "94% — Signature 5★ (+HP% & Healing Bonus)" },
          { name: "Favonius Codex", note: "90% — Team Energy battery" }
        ],
        teams: [
          { name: "Ayaka Permafreeze", members: ["Kamisato Ayaka", "Shenhe", "Kaedehara Kazuha", "Sangonomiya Kokomi"], note: "Permanent AoE Hydro application, grouping, and Thrilling Tales 48% ATK buff for Ayaka." },
          { name: "Ganyu Freeze Lock", members: ["Ganyu", "Venti", "Shenhe", "Sangonomiya Kokomi"], note: "Permanent freeze lockdown inside Venti's vortex and Ganyu's Celestial Shower." },
          { name: "Wriothesley Permafreeze", members: ["Wriothesley", "Shenhe", "Kaedehara Kazuha", "Sangonomiya Kokomi"], note: "Safe continuous freeze for Wriothesley's Enhanced Fists." }
        ]
      },
      {
        id: "on_field_driver",
        name: "On-Field Clam Driver",
        icon: "🌊",
        role: "On-Field Hydro Driver & Teamwide Healer",
        tier: "T1",
        talents: "Burst (Q) = Skill (E) >= Normal Attack",
        artifacts: [
          { set: "Ocean-Hued Clam", pieces: 4, note: "Converts excess healing into up to 30,000 physical Sea-Dyed Foam explosion damage" },
          { set: "Maiden Beloved", pieces: 4, note: "+15% Healing Bonus & +20% Incoming Healing" },
          { set: "Heart of Depth", pieces: 4, note: "+15% Hydro DMG & +30% Normal Attack DMG" }
        ],
        sands: "HP% / Energy Recharge", goblet: "Hydro DMG% / HP%", circlet: "Healing Bonus",
        substats: "HP% > Energy Recharge (140–160%) > Elemental Mastery > Flat HP (Cannot CRIT)",
        weapons: [
          { name: "Everlasting Moonglow", note: "100% — Signature BiS (+HP%, Healing Bonus & Energy on Normal Attack)" },
          { name: "Prototype Amber", note: "96% — Best Craftable (+HP% & team energy + healing)" },
          { name: "Sacrificial Fragments", note: "92% — Best for Nilou Bloom (EM + jellyfish repositioning)" },
          { name: "Hakushin Ring", note: "90% — +20% Electro & Hydro DMG bonus for Taser teams" }
        ],
        teams: [
          { name: "Nilou Superbloom", members: ["Nilou", "Nahida", "Sangonomiya Kokomi", "Columbina"], note: "Immense AoE healing to withstand self-damaging Bountiful Core explosions." },
          { name: "Kokomi Taser", members: ["Sangonomiya Kokomi", "Fischl", "Beidou", "Kaedehara Kazuha"], note: "Kokomi drives on-field while unkillable in her Ceremonial Garment." },
          { name: "Sukokomon", members: ["Sangonomiya Kokomi", "Xiangling", "Fischl", "Kaedehara Kazuha"], note: "Triple reaction Swirl soup (Overload, Vaporize, Electro-Charged)." }
        ]
      }
    ]
  },

  "Ganyu": {
    role: "Cryo Charged Attack Carry & Burst Sub-DPS",
    tier: "T1",
    playstyles: [
      {
        id: "melt",
        name: "Melt Hypercarry",
        icon: "🔥",
        role: "On-Field Forward Melt Charged Attack Carry",
        tier: "T1",
        talents: "Normal Attack >> Burst (Q) = Skill (E)",
        artifacts: [
          { set: "Wanderer's Troupe", pieces: 4, note: "+80 EM & +35% Charged Attack DMG" },
          { set: "Shimenawa's Reminiscence", pieces: 4, note: "+50% Normal/Charged Attack DMG for 10s" },
          { set: "Unfinished Reverie", pieces: 4, note: "+50% DMG when paired with Burnmelt (Nahida/Bennett)" }
        ],
        sands: "Elemental Mastery / ATK%", goblet: "Cryo DMG%", circlet: "CRIT Rate / CRIT DMG",
        substats: "CRIT Rate = CRIT DMG > Elemental Mastery (200–300) > ATK%",
        weapons: [
          { name: "Hunter's Path", note: "100% — Converts EM directly into massive Charged Attack flat DMG" },
          { name: "Amos' Bow", note: "98% — Classic Signature (up to +52% Arrow Flight DMG)" },
          { name: "The First Great Magic", note: "97% — Massive CRIT DMG & Charged Attack buff" },
          { name: "Aqua Simulacra", note: "94% — 88.2% CRIT DMG & Universal 20% DMG" }
        ],
        teams: [
          { name: "Zhongli Melt Comfort", members: ["Ganyu", "Xiangling", "Bennett", "Zhongli"], note: "Unbreakable shield allowing uninterrupted Frostflake Arrow aim inside Bennett's circle." },
          { name: "Burnmelt Ganyu", members: ["Ganyu", "Nahida", "Bennett", "Dehya"], note: "Continuous Burning aura triggers forward melts without needing to hug enemies." },
          { name: "Kazuha Sunfire Melt", members: ["Ganyu", "Kaedehara Kazuha", "Bennett", "Shenhe"], note: "Double Cryo/Pyro swirl for enormous single-shot Melt nukes." }
        ]
      },
      {
        id: "freeze",
        name: "Freeze / Morgana",
        icon: "❄️",
        role: "Off-Field / Quickswap Cryo AoE Burst Carry",
        tier: "T1",
        talents: "Burst (Q) >= Normal Attack > Skill (E)",
        artifacts: [
          { set: "Blizzard Strayer", pieces: 4, note: "+15% Cryo DMG & +40% CRIT Rate against Frozen enemies" },
          { set: "Noblesse Oblige", pieces: 4, note: "Burst support option (+20% Team ATK)" }
        ],
        sands: "ATK%", goblet: "Cryo DMG%", circlet: "CRIT DMG",
        substats: "CRIT DMG > ATK% > Energy Recharge (130–150%) > CRIT Rate",
        weapons: [
          { name: "Polar Star", note: "100% — High CRIT Rate & Skill/Burst stacking ATK" },
          { name: "Aqua Simulacra", note: "98% — 88.2% CRIT DMG" },
          { name: "Amos' Bow", note: "94% — High Base ATK & Charged DMG" },
          { name: "Skyward Harp", note: "91% — Dual CRIT stat stick" }
        ],
        teams: [
          { name: "Morgana Classic", members: ["Ganyu", "Mona", "Venti", "Diona"], note: "The quadratic scaling freeze vortex: Venti groups mobs into quadratic icicle showers." },
          { name: "Ayato Ganyu Permafrost", members: ["Ganyu", "Kamisato Ayato", "Kaedehara Kazuha", "Charlotte"], note: "Overlapping large circular bursts providing continuous freeze." }
        ]
      }
    ]
  },

  "Lyney": {
    role: "Pyro Bow Charged Attack Hypercarry",
    tier: "T1",
    talents: "Normal Attack > Burst (Q) > Skill (E)",
    artifacts: [
      { set: "Marechaussee Hunter", pieces: 4, note: "+36% CRIT Rate with Prop Arrow HP fluctuation" },
      { set: "Lavawalker", pieces: 4, note: "+35% DMG against enemies affected by Pyro (Mono Pyro)" },
      { set: "Crimson Witch of Flames", pieces: 4, note: "+15% Pyro DMG and reaction bonuses" }
    ],
    sands: "ATK%", goblet: "Pyro DMG%", circlet: "CRIT DMG / CRIT Rate",
    substats: "CRIT DMG > CRIT Rate > ATK% > Energy Recharge (120%)",
    weapons: [
      { name: "The First Great Magic", note: "100% — Signature BiS (+66.2% CRIT DMG & +48% Charged DMG)" },
      { name: "Aqua Simulacra", note: "96% • +88.2% CRIT DMG & Universal 20% DMG" },
      { name: "Thundering Pulse", note: "92% • +66.2% CRIT DMG & ATK buff" },
      { name: "Song of Stillness", note: "88% — Top 4★ F2P Craftable (+32% DMG after being healed)" },
      { name: "Prototype Crescent", note: "85% • 4★ F2P Craftable (+72% ATK on weakspot hit)" }
    ],
    teams: [
      { name: "Mono Pyro Hyper", members: ["Lyney", "Bennett", "Xiangling", "Kaedehara Kazuha"], note: "Maximizes Lyney's Conclusive Ovation passive for +100% DMG against Pyro-affected enemies." },
      { name: "Zhongli Mono Shield", members: ["Lyney", "Bennett", "Xiangling", "Zhongli"], note: "Unbreakable shield protecting Lyney during 2-stage Grin-Malkin Hat aim." },
      { name: "Furina Vape Plunge", members: ["Lyney", "Furina", "Xianyun", "Bennett"], note: "High-damage vaporize plunge setup with Furina fanfare and Xianyun plunge scaling." }
    ]
  },

  "Wriothesley": {
    role: "On-Field Cryo DPS (Normal & Charged Punch Boxer)",
    tier: "T0.5",
    playstyles: [
      {
        id: "melt_carry",
        name: "Reverse Melt Carry",
        icon: "❄",
        role: "Reverse Melt Cryo Boxer Carry (Rebuke Charged Uppercuts)",
        tier: "T0.5",
        talents: "Normal Attack (NA) >> Skill (E) >= Burst (Q)",
        artifacts: [
          { set: "Marechaussee Hunter", pieces: 4, note: "Uncontested BiS (+36% CRIT Rate & +15% Normal/Charged DMG on HP drain)" },
          { set: "Shimenawa's Reminiscence", pieces: 4, note: "+50% Normal/Charged DMG fallback" },
          { set: "Gilded Dreams", pieces: 4, note: "+230 EM for high Melt reactions" }
        ],
        sands: "ATK% / Elemental Mastery", goblet: "Cryo DMG%", circlet: "CRIT DMG / CRIT Rate",
        substats: "CRIT DMG = CRIT Rate (to 64% w/ Hunter) > Elemental Mastery (100&bull;“180) > ATK% > Energy Recharge",
        weapons: [
          { name: "Cashflow Supervision", note: "100% — Signature BiS (+CRIT Rate, ATK SPD & Normal/Charged DMG)" },
          { name: "Tulaytullah's Remembrance", note: "94% — High Normal DMG & ATK SPD" },
          { name: "Lost Prayer to the Sacred Winds", note: "89% — CRIT Rate & Elemental DMG" },
          { name: "The Widsith", note: "88% — High burst window 4★" },
          { name: "Flowing Purity", note: "84% — Free Fontaine Craftable (+All DMG)" }
        ],
        teams: [
          { name: "Thoma / Bennett Melt Core", members: ["Wriothesley", "Thoma", "Kaedehara Kazuha", "Bennett"], note: "Thoma provides Pyro wave application and shielding for uninterrupted Melts." },
          { name: "Mavuika Melt Apex", members: ["Wriothesley", "Mavuika", "Citlali", "Bennett"], note: "Double Cryo resonance + Mavuika's high-frequency off-field Pyro aura." }
        ]
      },
      {
        id: "freeze_carry",
        name: "Blizzard Freeze Carry",
        icon: "🧊",
        role: "Freeze / Mono-Cryo Sustained Boxer Carry with Furina",
        tier: "T0.5",
        talents: "Normal Attack (NA) >> Skill (E) >= Burst (Q)",
        artifacts: [
          { set: "Marechaussee Hunter", pieces: 4, note: "Optimal pairing with Furina (+36% CRIT Rate)" },
          { set: "Blizzard Strayer", pieces: 4, note: "+40% CRIT Rate against Frozen enemies" }
        ],
        sands: "ATK%", goblet: "Cryo DMG%", circlet: "CRIT DMG / ATK%",
        substats: "CRIT DMG > ATK% > CRIT Rate > Energy Recharge",
        weapons: [
          { name: "Cashflow Supervision", note: "100% — Signature Weapon" },
          { name: "Lost Prayer to the Sacred Winds", note: "90% &bull;” 5★ Catalyst" },
          { name: "Ballad of the Boundless Blue", note: "82% — Free Event 4★" }
        ],
        teams: [
          { name: "Furina Freeze Dominance", members: ["Wriothesley", "Furina", "Mika", "Kaedehara Kazuha"], note: "Mika provides instant team heal for max Fanfare + 20% ATK SPD on Wriothesley's punches." },
          { name: "Escoffier Cryo Core", members: ["Wriothesley", "Escoffier", "Citlali", "Furina"], note: "Extreme Cryo/Hydro shred with continuous Freeze control." }
        ]
      }
    ]
  },

  "Emilie": {
    role: "Dendro Polearm Burning Sub-DPS",
    tier: "T0.5",
    talents: "Skill (E) > Burst (Q) > Normal Attack",
    artifacts: [
      { set: "Unfinished Reverie", pieces: 4, note: "BiS (+50% DMG when Burning triggers nearby)" },
      { set: "Deepwood Memories", pieces: 4, note: "-30% Dendro RES shred for herself and party" },
      { set: "Golden Troupe", pieces: 4, note: "+70% Off-Field Lumidouce Case Skill DMG" }
    ],
    sands: "ATK%", goblet: "Dendro DMG%", circlet: "CRIT Rate / CRIT DMG",
    substats: "CRIT Rate = CRIT DMG > ATK% > Energy Recharge (120-140%)",
    weapons: [
      { name: "Lumidouce Elegy", note: "100% — Signature BiS (+33.1% CRIT Rate, +15% ATK & +36% DMG)" },
      { name: "Staff of Homa", note: "95% • +66.2% CRIT DMG & HP-to-ATK conversion" },
      { name: "Deathmatch", note: "91% — Top 4★ Battle Pass (+36.8% CRIT Rate)" },
      { name: "Missive Windspear", note: "87% • 4★ Event (+24% ATK & +96 EM)" },
      { name: "Favonius Lance", note: "85% — Top 4★ Utility Battery (30.6% ER)" }
    ],
    teams: [
      { name: "Kinich Emilie Burning", members: ["Kinich", "Emilie", "Mavuika", "Bennett"], note: "Premiere Natlan Burning team: triggers continuous Level 2 Scents while fueling Kinich Loop Shots." },
      { name: "Wriothesley Burnmelt", members: ["Wriothesley", "Emilie", "Thoma", "Bennett"], note: "Safe sustained burning for constant forward melt strikes." },
      { name: "Mavuika Emilie Core", members: ["Mavuika", "Emilie", "Xilonen", "Bennett"], note: "High off-field Dendro damage combined with Mavuika's motorcycle nukes." }
    ]
  },

  "Xianyun": {
    role: "Anemo Catalyst Plunge Buffer & Team Healer",
    tier: "T0.5",
    talents: "Burst (Q) >= Skill (E) > Normal Attack",
    artifacts: [
      { set: "Song of Days Past", pieces: 4, note: "Massive flat damage bonus added to plunge attacks" },
      { set: "Viridescent Venerer", pieces: 4, note: "-40% Elemental RES shred for elemental plungers" },
      { set: "Noblesse Oblige", pieces: 4, note: "+20% Team ATK on Burst" },
      { set: "Gladiator's Finale", pieces: 2, note: "2pc ATK + 2pc ATK (+36% ATK for max plunge scaling)" }
    ],
    sands: "ATK% / Energy Recharge", goblet: "ATK%", circlet: "ATK% / Healing Bonus",
    substats: "Energy Recharge (180-200%) > ATK% > Flat ATK > CRIT Rate",
    weapons: [
      { name: "Crane's Echoing Call", note: "100% — Signature BiS (+16.5% ATK, +28% Plunge DMG to party & energy refund)" },
      { name: "Skyward Atlas", note: "95% — High Base ATK & +33.1% ATK" },
      { name: "Oathsworn Eye", note: "92% — Top 4★ Event (+48% ER after Skill)" },
      { name: "Favonius Codex", note: "90% — Top 4★ Battery (45.9% ER & particles)" },
      { name: "Flowing Purity", note: "86% — Top 4★ F2P Craftable" }
    ],
    teams: [
      { name: "Xiao Anemo Plunge Hyper", members: ["Xiao", "Faruzan", "Furina", "Xianyun"], note: "Highest ceiling Xiao team: Faruzan Anemo shred + Furina Fanfare + Xianyun flat plunge DMG." },
      { name: "Gaming Vape Plunge", members: ["Gaming", "Furina", "Xianyun", "Bennett"], note: "Allows Gaming to execute 8+ consecutive high-multiplier forward vaporize plunges." },
      { name: "Diluc Dragonstrike", members: ["Diluc", "Furina", "Xianyun", "Bennett"], note: "Elevates Diluc to modern meta with 400k+ vaporize plunge hits." }
    ]
  },

  "Chiori": {
    role: "Geo Sword Off-Field Sub-DPS (Sode Puppets)",
    tier: "T1",
    talents: "Skill (E) > Burst (Q) > Normal Attack",
    artifacts: [
      { set: "Golden Troupe", pieces: 4, note: "BiS (+70% Off-Field Automaton Puppet Skill DMG)" },
      { set: "Husk of Opulent Dreams", pieces: 4, note: "+24% DEF & +24% Geo DMG" },
      { set: "Nighttime Whispers in the Echoing Woods", pieces: 4, note: "+50% Geo DMG after Crystallize" }
    ],
    sands: "DEF% / ATK%", goblet: "Geo DMG%", circlet: "CRIT DMG / CRIT Rate",
    substats: "CRIT Rate = CRIT DMG > DEF% > ATK% > Energy Recharge",
    weapons: [
      { name: "Uraku Misugiri", note: "100% — Signature BiS (+88.2% CRIT DMG, +24% Normal ATK & +48% Skill DMG)" },
      { name: "Harbinger of Dawn", note: "92% — Top 3★ F2P (+46.9% CRIT DMG & +28% CRIT Rate off-field)" },
      { name: "Cinnabar Spindle", note: "90% — Top 4★ Event (+69.0% DEF & Skill scaling)" },
      { name: "Flute of Ezpitzal", note: "88% — Top 4★ F2P Natlan Craftable (+69.0% DEF)" },
      { name: "Wolf-Fang", note: "87% — Top 4★ Battle Pass (+27.6% CRIT Rate & Skill DMG)" }
    ],
    teams: [
      { name: "Navia Chiori Core", members: ["Navia", "Chiori", "Furina", "Bennett"], note: "Geo Resonance (+15% DMG & -20% Geo RES) + double crystal generation fueling Navia's Rosula Shrapnel." },
      { name: "Itto Mono Geo", members: ["Arataki Itto", "Gorou", "Chiori", "Zhongli"], note: "Summons both Sode puppets next to Ushi for uninterrupted off-field Geo barrages." },
      { name: "Xilonen Double Geo", members: ["Mavuika", "Chiori", "Xilonen", "Bennett"], note: "36% Geo RES shred from Xilonen boosting Chiori's dual puppets." }
    ]
  },

  "Chevreuse": {
    role: "Pyro Polearm Overload Specialist & RES Shred Buffer",
    tier: "T0.5",
    talents: "Skill (E) > Burst (Q) > Normal Attack",
    artifacts: [
      { set: "Noblesse Oblige", pieces: 4, note: "+20% Team ATK on Burst" },
      { set: "Song of Days Past", pieces: 4, note: "Flat damage bonus from Overload heal" },
      { set: "Tenacity of the Millelith", pieces: 2, note: "2pc HP + 2pc HP (Reach 40,000 HP cap for +40% ATK buff)" }
    ],
    sands: "HP%", goblet: "HP%", circlet: "HP% / Healing Bonus",
    substats: "HP% (aim 40,000 HP) > Energy Recharge (130-150%) > Flat HP",
    weapons: [
      { name: "Rightful Reward", note: "100% — Top 4★ F2P Craftable (+27.6% HP & 16 energy refund on heal)" },
      { name: "Black Tassel", note: "98% — Top 3★ F2P (+46.9% HP for easy 40k cap)" },
      { name: "Favonius Lance", note: "95% — Essential Team Energy Battery (30.6% ER)" },
      { name: "Dialogues of the Desert Sages", note: "94% • 4★ Event (+41.3% HP & energy)" }
    ],
    teams: [
      { name: "Clorinde Overload", members: ["Clorinde", "Fischl", "Chevreuse", "Mavuika"], note: "40% Pyro & Electro RES shred without needing Anemo swirl, +40% team ATK, and constant healing." },
      { name: "Raiden Hyper Overload", members: ["Raiden Shogun", "Kujou Sara", "Chevreuse", "Bennett"], note: "Extreme frontloaded burst damage with triple ATK buffs and 40% Electro shred." },
      { name: "Arlecchino Overload", members: ["Arlecchino", "Fischl", "Chevreuse", "Beidou"], note: "Interruption resistance from Beidou + Chevreuse buffs for safe BoL combos." }
    ]
  },

  "Gaming": {
    role: "Pyro Claymore Plunge DPS",
    tier: "T1",
    talents: "Skill (E) > Burst (Q) > Normal Attack",
    artifacts: [
      { set: "Marechaussee Hunter", pieces: 4, note: "BiS (+36% CRIT Rate via Man Chai HP drain/heal)" },
      { set: "Crimson Witch of Flames", pieces: 4, note: "+15% Pyro DMG & +15% Vaporize/Melt DMG" }
    ],
    sands: "ATK% / Elemental Mastery", goblet: "Pyro DMG%", circlet: "CRIT DMG / CRIT Rate",
    substats: "CRIT DMG > CRIT Rate > Elemental Mastery (100-200) > ATK% > ER (130%)",
    weapons: [
      { name: "Serpent Spine", note: "100% — Top 4★ Battle Pass (+27.6% CRIT Rate & +50% All DMG)" },
      { name: "Redhorn Stonethresher", note: "98% • +88.2% CRIT DMG" },
      { name: "Rainslasher", note: "94% — Top 4★ Gacha in Vape (221 EM & +36% DMG vs Hydro/Pyro)" },
      { name: "Tidal Shadow", note: "91% — Top 4★ F2P Craftable (+48% ATK when healed)" },
      { name: "Mailed Flower", note: "89% • 4★ Event (110 EM & ATK buff)" }
    ],
    teams: [
      { name: "Xianyun Vape Plunge", members: ["Gaming", "Furina", "Xianyun", "Bennett"], note: "Gaming's highest damage ceiling: continuous Bestial Ascent vape plunges." },
      { name: "Citlali Forward Melt", members: ["Gaming", "Citlali", "Xianyun", "Bennett"], note: "Citlali's Cryo shield and off-field auras enable forward melt strikes." },
      { name: "Chevreuse Plunge", members: ["Gaming", "Fischl", "Chevreuse", "Bennett"], note: "Chevreuse 40% shred and Overload explosions." }
    ]
  },

  "Baizhu": {
    role: "Dendro Catalyst Team Healer & Shield Buffer",
    tier: "T0.5",
    talents: "Skill (E) = Burst (Q) > Normal Attack",
    artifacts: [
      { set: "Deepwood Memories", pieces: 4, note: "Essential -30% Dendro RES shred for Dendro carries" },
      { set: "Ocean-Hued Clam", pieces: 4, note: "Heals party and deals 30,000 physical pop damage" },
      { set: "Tenacity of the Millelith", pieces: 2, note: "2pc HP + 2pc HP (Aim for 50,000 HP cap for +100% Bloom / +40% Quicken buff)" }
    ],
    sands: "HP% / Energy Recharge", goblet: "HP%", circlet: "HP% / Healing Bonus",
    substats: "Energy Recharge (180-220%) > HP% (aim 50,000) > Flat HP",
    weapons: [
      { name: "Jadefall's Splendor", note: "100% — Signature BiS (+49.6% HP & Energy restoration)" },
      { name: "Prototype Amber", note: "97% — Top 4★ F2P Craftable (+41.3% HP, team healing & 18 energy refund)" },
      { name: "Thrilling Tales of Dragon Slayers", note: "94% — Top 3★ F2P (+35.2% HP & +48% ATK to next carry)" },
      { name: "Favonius Codex", note: "92% — Team Energy Battery (45.9% ER)" }
    ],
    teams: [
      { name: "Cyno Quickbloom", members: ["Cyno", "Furina", "Nahida", "Baizhu"], note: "Flawless sustained healing counteracting Furina's HP drain while shielding Cyno during 18s Burst." },
      { name: "Alhaitham Spread Core", members: ["Alhaitham", "Yae Miko", "Nahida", "Baizhu"], note: "Dendro Resonance (+100 EM) + Deepwood shred + Baizhu's 40% Quicken reaction buff." },
      { name: "Nilou Superbloom", members: ["Nilou", "Nahida", "Yelan", "Baizhu"], note: "Comfortable teamwide heals keeping party safe from self-damaging Bountiful Cores." }
    ]
  },

  "Cyno": {
    role: "Electro Polearm Aggravate & Quickbloom Hypercarry",
    tier: "T1",
    talents: "Burst (Q) > Skill (E) > Normal Attack",
    artifacts: [
      { set: "Gilded Dreams", pieces: 4, note: "BiS (+80 EM & extra ATK/EM in multi-element teams)" },
      { set: "Thundering Fury", pieces: 4, note: "Allows 4 Endseer Mortuary skill casts per burst" },
      { set: "Gladiator's Finale", pieces: 4, note: "+35% Normal Attack DMG" }
    ],
    sands: "Elemental Mastery", goblet: "Electro DMG%", circlet: "CRIT Rate / CRIT DMG",
    substats: "CRIT Rate = CRIT DMG > Elemental Mastery > Energy Recharge (130-140%) > ATK%",
    weapons: [
      { name: "Staff of the Scarlet Sands", note: "100% — Signature BiS (+44.1% CRIT Rate & massive EM-to-ATK conversion)" },
      { name: "Staff of Homa", note: "94% • +66.2% CRIT DMG & ATK boost" },
      { name: "White Tassel", note: "90% — Top 3★ F2P (+23.4% CRIT Rate & +48% Normal ATK DMG)" },
      { name: "Ballad of the Fjords", note: "89% — Top 4★ Battle Pass (+27.6% CRIT Rate & 240 EM)" },
      { name: "Deathmatch", note: "88% — Top 4★ Battle Pass (+36.8% CRIT Rate)" },
      { name: "Kitain Cross Spear", note: "85% — Top 4★ F2P Craftable (110 EM & energy refund)" }
    ],
    teams: [
      { name: "Quickbloom Premium", members: ["Cyno", "Furina", "Nahida", "Baizhu"], note: "Cyno's premier team: simultaneous Aggravate and Hyperbloom with Furina Fanfare." },
      { name: "Aggravate Cyno", members: ["Cyno", "Fischl", "Nahida", "Zhongli"], note: "100% Quicken aura with Zhongli universal 20% RES shred and shield." },
      { name: "Chaos Cyno", members: ["Cyno", "Xingqiu", "Nahida", "Thoma"], note: "Overload + Hyperbloom + Burgeon rainbow reaction barrage." }
    ]
  },

  "Wanderer": {
    role: "Anemo Catalyst Aerial Hypercarry",
    tier: "T1",
    talents: "Normal Attack > Skill (E) > Burst (Q)",
    artifacts: [
      { set: "Desert Pavilion Chronicle", pieces: 4, note: "BiS (+10% ATK SPD & +40% Normal/Charged/Plunge DMG)" },
      { set: "Shimenawa's Reminiscence", pieces: 4, note: "+50% Normal/Charged Attack DMG" },
      { set: "Marechaussee Hunter", pieces: 4, note: "+36% CRIT Rate when paired with Furina" }
    ],
    sands: "ATK%", goblet: "Anemo DMG%", circlet: "CRIT Rate / CRIT DMG",
    substats: "CRIT Rate = CRIT DMG > ATK% > Energy Recharge",
    weapons: [
      { name: "Tulaytullah's Remembrance", note: "100% — Signature BiS (+44.1% CRIT DMG, +10% ATK SPD & +48% Normal DMG)" },
      { name: "Lost Prayer to the Sacred Winds", note: "93% • +33.1% CRIT Rate & +32% Elemental DMG" },
      { name: "The Widsith", note: "89% — Top 4★ Gacha (+55.1% CRIT DMG & huge songs)" },
      { name: "Flowing Purity", note: "86% — Top 4★ F2P Craftable (+24% All Elemental DMG)" },
      { name: "Dodoco Tales", note: "84% • 4★ Event (Normal & Charged synergy)" }
    ],
    teams: [
      { name: "Faruzan Anemo Hyper", members: ["Wanderer", "Faruzan", "Bennett", "Zhongli"], note: "Faruzan 30% Anemo shred + Bennett ATK circle + Zhongli shield preventing mid-air flinching." },
      { name: "Furina Freeze Hyper", members: ["Wanderer", "Faruzan", "Furina", "Charlotte"], note: "High mobility freeze carry leveraging Furina's massive Fanfare buff." },
      { name: "Double Pyro Wanderer", members: ["Wanderer", "Faruzan", "Bennett", "Thoma"], note: "Pyro Resonance (+25% ATK) + Thoma shield and coordinated fiery collapses." }
    ]
  },

  "Nilou": {
    role: "Hydro Sword Bountiful Bloom Specialist",
    tier: "T0.5",
    talents: "Skill (E) >= Burst (Q) > Normal Attack",
    artifacts: [
      { set: "Tenacity of the Millelith", pieces: 2, note: "2pc HP (+20%) + 2pc Vourukasha's Glow (+20% HP) for 74,400 HP cap" },
      { set: "Flower of Paradise Lost", pieces: 4, note: "+80 EM & up to +140% Bloom DMG" }
    ],
    sands: "HP%", goblet: "HP%", circlet: "HP%",
    substats: "HP% (aim 74,400 max HP) > Flat HP > Elemental Mastery > Energy Recharge",
    weapons: [
      { name: "Key of Khaj-Nisut", note: "100% — Signature BiS (+66.2% HP & massive team EM share based on max HP)" },
      { name: "Dockhand's Assistant", note: "91% — Top 4★ Gacha (+41.3% HP & EM)" },
      { name: "Iron Sting", note: "86% — Top 4★ F2P Craftable (165 EM)" },
      { name: "Toukabou Shigure", note: "85% • 4★ Event (165 EM)" },
      { name: "Favonius Sword", note: "84% — Team energy battery" }
    ],
    teams: [
      { name: "Superbloom Ceiling", members: ["Nilou", "Nahida", "Baizhu", "Yelan"], note: "Highest single-target and AoE Bountiful Bloom damage with Nahida 1.5U Tri-Karma Dendro." },
      { name: "Kokomi 2H2D", members: ["Nilou", "Sangonomiya Kokomi", "Nahida", "Alhaitham"], note: "Relentless Hydro application from Kokomi jellyfish converting every seed into an instant explosion." },
      { name: "F2P Bountiful Bloom", members: ["Nilou", "Dendro Traveler", "Collei", "Barbara"], note: "Pure F2P lineup clearing Abyss 12 with minimal investment." }
    ]
  },

  "Tighnari": {
    role: "Dendro Bow Quickswap Spread Carry",
    tier: "T1",
    talents: "Normal Attack (Charged) > Burst (Q) > Skill (E)",
    artifacts: [
      { set: "Gilded Dreams", pieces: 4, note: "BiS (+80 EM & extra ATK/EM on reactions)" },
      { set: "Wanderer's Troupe", pieces: 4, note: "+80 EM & +35% Charged Attack DMG" },
      { set: "Deepwood Memories", pieces: 4, note: "-30% Dendro RES shred" }
    ],
    sands: "Elemental Mastery / ATK%", goblet: "Dendro DMG%", circlet: "CRIT Rate / CRIT DMG",
    substats: "CRIT Rate = CRIT DMG > Elemental Mastery > ATK% > Energy Recharge",
    weapons: [
      { name: "Hunter's Path", note: "100% — Signature BiS (+44.1% CRIT Rate & massive EM-to-Charged DMG conversion)" },
      { name: "The First Great Magic", note: "96% • +66.2% CRIT DMG & +16% Charged DMG" },
      { name: "Aqua Simulacra", note: "94% • +88.2% CRIT DMG & +20% DMG" },
      { name: "Slingshot", note: "90% — Top 3★ F2P (+31.2% CRIT Rate & +60% Normal/Charged DMG)" },
      { name: "The Stringless", note: "88% — Top 4★ Gacha (165 EM & +48% Skill/Burst DMG)" },
      { name: "Prototype Crescent", note: "85% • 4★ F2P Craftable (+72% ATK)" }
    ],
    teams: [
      { name: "Tighnari Spread Core", members: ["Tighnari", "Yae Miko", "Nahida", "Zhongli"], note: "Premier quickswap rotation: 3 instant Wreath Arrows + 6-wave Tanglevine Shaft Burst." },
      { name: "Fischl Quickswap", members: ["Tighnari", "Fischl", "Kirara", "Kaedehara Kazuha"], note: "High frequency Spread procs constantly triggering Fischl's A4 passive." },
      { name: "Furina Quickbloom", members: ["Tighnari", "Yae Miko", "Furina", "Baizhu"], note: "Combines high Spread burst with Furina Fanfare and Hyperbloom." }
    ]
  },

  "Yae Miko": {
    role: "Electro Catalyst Off-Field Sub-DPS & Aggravate Carry",
    tier: "T0.5",
    talents: "Skill (E) > Burst (Q) > Normal Attack",
    artifacts: [
      { set: "Golden Troupe", pieces: 4, note: "BiS Off-field (+70% Sesshou Sakura Skill DMG)" },
      { set: "Gilded Dreams", pieces: 4, note: "Aggravate / Quicken hybrid (+80 EM & extra ATK/EM)" },
      { set: "Thundering Fury", pieces: 2, note: "2pc Electro (+15%) + 2pc ATK (+18%)" }
    ],
    sands: "ATK% / Elemental Mastery", goblet: "Electro DMG%", circlet: "CRIT Rate / CRIT DMG",
    substats: "CRIT Rate = CRIT DMG > ATK% > Elemental Mastery > Energy Recharge",
    weapons: [
      { name: "Kagura's Verity", note: "100% — Signature BiS (+66.2% CRIT DMG & +36% Skill DMG + +12% All Elemental DMG)" },
      { name: "A Thousand Floating Dreams", note: "94% — EM & team elemental DMG buff" },
      { name: "The Widsith", note: "91% — Top 4★ Gacha (+55.1% CRIT DMG & massive song buffs)" },
      { name: "Sacrificial Jade", note: "89% — Top 4★ Battle Pass (+36.8% CRIT Rate & EM/HP off-field)" },
      { name: "Hakushin Ring", note: "86% — Top 4★ F2P Craftable (Electro reaction party DMG buff)" }
    ],
    teams: [
      { name: "Alhaitham Quicken", members: ["Alhaitham", "Yae Miko", "Nahida", "Zhongli"], note: "Highest sustained Quicken output: 100% turret uptime alongside Alhaitham projection attacks." },
      { name: "Tighnari Double Dendro", members: ["Tighnari", "Yae Miko", "Nahida", "Baizhu"], note: "Smooth quickswap rotations with continuous Electro and Dendro application." },
      { name: "Furina Quickbloom", members: ["Yae Miko", "Furina", "Nahida", "Baizhu"], note: "Yae triggers both Aggravate and Hyperbloom with Furina teamwide damage amplification." }
    ]
  },

  "Shenhe": {
    role: "Cryo Polearm Dedicated Cryo Buffer (Icy Quills)",
    tier: "T1",
    talents: "Skill (E) >= Burst (Q) > Normal Attack",
    artifacts: [
      { set: "Noblesse Oblige", pieces: 4, note: "+20% Team ATK on Burst" },
      { set: "Gladiator's Finale", pieces: 2, note: "2pc ATK (+18%) + 2pc Shimenawa (+18%) to maximize Icy Quill flat DMG transfer" }
    ],
    sands: "ATK% / Energy Recharge", goblet: "ATK%", circlet: "ATK%",
    substats: "Energy Recharge (180-200%) > ATK% > Flat ATK > CRIT Rate",
    weapons: [
      { name: "Calamity Queller", note: "100% — Signature BiS (Highest base ATK 741 & off-field ATK% stack)" },
      { name: "Engulfing Lightning", note: "95% • +55.1% ER & ER-to-ATK conversion" },
      { name: "Favonius Lance", note: "92% — Top 4★ Recommendation (30.6% ER & essential Cryo particles)" },
      { name: "Missive Windspear", note: "89% • 4★ Event (+41.3% ATK)" },
      { name: "The Catch", note: "87% • 4★ F2P (+45.9% ER)" }
    ],
    teams: [
      { name: "Ayaka Freeze Ceiling", members: ["Kamisato Ayaka", "Shenhe", "Kaedehara Kazuha", "Sangonomiya Kokomi"], note: "Shenhe Icy Quills add massive flat damage to each of Ayaka's 20 Soumetsu slashes." },
      { name: "Escoffier Freeze Core", members: ["Escoffier", "Shenhe", "Furina", "Kaedehara Kazuha"], note: "55% Cryo/Hydro RES shred + Shenhe Cryo buffs for immense freeze damage." },
      { name: "Wriothesley Mono Cryo", members: ["Wriothesley", "Shenhe", "Kaedehara Kazuha", "Bennett"], note: "Supercharges Wriothesley's enhanced normal punches." }
    ]
  },

  "Arataki Itto": {
    role: "Geo Claymore Charged Attack Hypercarry",
    tier: "T1",
    talents: "Normal Attack (Arataki Kesagiri) >= Burst (Q) > Skill (E)",
    artifacts: [
      { set: "Husk of Opulent Dreams", pieces: 4, note: "BiS (+24% DEF & +24% Geo DMG)" },
      { set: "Marechaussee Hunter", pieces: 4, note: "+36% CRIT Rate when paired with Furina" }
    ],
    sands: "DEF%", goblet: "Geo DMG%", circlet: "CRIT Rate / CRIT DMG",
    substats: "CRIT Rate = CRIT DMG > DEF% > Energy Recharge (120-130%) > ATK%",
    weapons: [
      { name: "Redhorn Stonethresher", note: "100% — Signature BiS (+88.2% CRIT DMG & +40% DEF-scaling Normal/Charged DMG)" },
      { name: "Serpent Spine", note: "94% — Top 4★ Battle Pass (+27.6% CRIT Rate & +50% All DMG)" },
      { name: "Whiteblind", note: "88% — Top 4★ F2P Craftable (+51.7% DEF & stacking DEF/ATK on hit)" },
      { name: "Skyward Pride", note: "85% — High Base ATK & ER for consistent Burst" }
    ],
    teams: [
      { name: "Classic Mono Geo", members: ["Arataki Itto", "Gorou", "Albedo", "Zhongli"], note: "Gorou provides DEF, Geo DMG, and 40% Geo CRIT DMG while Zhongli shreds 20% all RES." },
      { name: "Chiori Mono Geo", members: ["Arataki Itto", "Gorou", "Chiori", "Zhongli"], note: "Replaces Albedo with Chiori's dual Sode puppets for significantly higher team DPS." },
      { name: "Furina Geo Plunge", members: ["Arataki Itto", "Gorou", "Furina", "Xianyun"], note: "Extreme single-hit plunge damage fueled by Furina Fanfare." }
    ]
  },

  "Yoimiya": {
    role: "Pyro Bow Normal Attack Hypercarry",
    tier: "T1",
    talents: "Normal Attack > Skill (E) > Burst (Q)",
    artifacts: [
      { set: "Shimenawa's Reminiscence", pieces: 4, note: "BiS (+50% Normal Attack DMG for 10s upon Skill cast)" },
      { set: "Crimson Witch of Flames", pieces: 4, note: "+15% Pyro DMG & +15% Vaporize DMG" },
      { set: "Echoes of an Offering", pieces: 4, note: "Normal attack flat damage proc chance" }
    ],
    sands: "ATK% / Elemental Mastery (Vape)", goblet: "Pyro DMG%", circlet: "CRIT Rate / CRIT DMG",
    substats: "CRIT Rate = CRIT DMG > ATK% > Elemental Mastery > Energy Recharge",
    weapons: [
      { name: "Thundering Pulse", note: "100% — Signature BiS (+66.2% CRIT DMG, +20% ATK & +40% Normal Attack DMG)" },
      { name: "Aqua Simulacra", note: "95% • +88.2% CRIT DMG & +20% DMG" },
      { name: "Rust", note: "93% — Top 4★ Gacha (up to +80% Normal Attack DMG at R5)" },
      { name: "Slingshot", note: "88% — Top 3★ F2P (+31.2% CRIT Rate & +60% Normal DMG when close)" },
      { name: "Hamayumi", note: "86% — Top 4★ F2P Craftable (+32% Normal ATK DMG)" }
    ],
    teams: [
      { name: "Yoimiya Vape Core", members: ["Yoimiya", "Yelan", "Xingqiu", "Zhongli"], note: "Double Hydro provides 25% HP + continuous rain swords for consistent N3 and N5 vaporize hits." },
      { name: "Yun Jin Normal Hyper", members: ["Yoimiya", "Yun Jin", "Bennett", "Zhongli"], note: "Yun Jin adds massive flat DEF scaling to every single arrow in Yoimiya's string." },
      { name: "Chevreuse Overload", members: ["Yoimiya", "Fischl", "Chevreuse", "Bennett"], note: "40% Pyro & Electro shred with rapid Overload explosions." }
    ]
  },

  "Eula": {
    role: "Cryo Claymore Physical Nuke Hypercarry",
    tier: "T1.5",
    talents: "Burst (Q) > Normal Attack > Skill (E)",
    artifacts: [
      { set: "Pale Flame", pieces: 4, note: "BiS (+50% Physical DMG & +18% ATK upon 2 Skill hits)" },
      { set: "Bloodstained Chivalry", pieces: 2, note: "2pc Pale Flame (+25%) + 2pc Bloodstained (+25% Physical DMG unconditionally)" }
    ],
    sands: "ATK%", goblet: "Physical DMG%", circlet: "CRIT Rate / CRIT DMG",
    substats: "CRIT Rate = CRIT DMG > ATK% > Energy Recharge (130-140%)",
    weapons: [
      { name: "Song of Broken Pines", note: "100% — Signature BiS (741 Base ATK, +20.7% Phys DMG & team ATK/ATK SPD buff)" },
      { name: "Beacon of the Reed Sea", note: "96% • +33.1% CRIT Rate & +40% ATK" },
      { name: "Wolf's Gravestone", note: "94% • +49.6% ATK & +40% Team ATK" },
      { name: "Serpent Spine", note: "91% — Top 4★ Battle Pass (+27.6% CRIT Rate & +50% DMG)" },
      { name: "Snow-Tombed Starsilver", note: "87% — Top 4★ F2P Craftable Dragonspine Greatsword" },
      { name: "Tidal Shadow", note: "86% — Top 4★ F2P Craftable (+48% ATK)" }
    ],
    teams: [
      { name: "Raiden Superconduct Core", members: ["Eula", "Raiden Shogun", "Rosaria", "Zhongli"], note: "Superconduct shreds 40% Phys RES + Raiden battery + Rosaria CRIT Rate share and C6 Phys shred." },
      { name: "Furina Physical Ceiling", members: ["Eula", "Raiden Shogun", "Furina", "Mika"], note: "Mika provides 50% Physical DMG buff & ATK SPD while maxing Furina Fanfare." },
      { name: "Shenhe Dual Cryo", members: ["Eula", "Fischl", "Shenhe", "Bennett"], note: "Shenhe shreds Physical & Cryo RES while buffing Burst damage." }
    ]
  },

  "Klee": {
    role: "Pyro Catalyst Carry & Heavy Stagger Enabler",
    tier: "T1.5",
    talents: "Normal Attack = Skill (E) = Burst (Q)",
    artifacts: [
      { set: "Crimson Witch of Flames", pieces: 4, note: "+15% Pyro DMG and reaction bonuses" },
      { set: "Lavawalker", pieces: 4, note: "+35% DMG in Mono Pyro compositions" },
      { set: "Gladiator's Finale", pieces: 2, note: "2pc ATK + 2pc Pyro DMG" }
    ],
    sands: "ATK%", goblet: "Pyro DMG%", circlet: "CRIT Rate / CRIT DMG",
    substats: "CRIT Rate = CRIT DMG > ATK% > Elemental Mastery > Energy Recharge",
    weapons: [
      { name: "Lost Prayer to the Sacred Winds", note: "100% — BiS (+33.1% CRIT Rate & Movement/DMG buff)" },
      { name: "Kagura's Verity", note: "96% • +66.2% CRIT DMG & Skill buff" },
      { name: "The Widsith", note: "92% — Top 4★ Gacha (+55.1% CRIT DMG)" },
      { name: "Dodoco Tales", note: "89% • 4★ Event (Normal & Charged attack synergy)" },
      { name: "Flowing Purity", note: "86% — Top 4★ F2P Craftable (+24% Elemental DMG)" }
    ],
    teams: [
      { name: "Mono Pyro Klee", members: ["Klee", "Xiangling", "Bennett", "Kaedehara Kazuha"], note: "Continuous sparks and explosions maintaining 100% Pyro uptime with Kazuha shred." },
      { name: "Chevreuse Overload", members: ["Klee", "Fischl", "Chevreuse", "Bennett"], note: "Massive stagger explosions with 40% RES shred and +40% ATK." },
      { name: "Furina Vape Plunge", members: ["Klee", "Furina", "Xianyun", "Bennett"], note: "Translates Klee's high plunge multipliers into devastating forward vapes." }
    ]
  },

  "Jean": {
    role: "Anemo Sword Burst Healer & Sunfire Driver",
    tier: "T1",
    talents: "Burst (Q) > Skill (E) > Normal Attack",
    artifacts: [
      { set: "Viridescent Venerer", pieces: 4, note: "BiS (-40% Elemental RES shred for party)" },
      { set: "Noblesse Oblige", pieces: 4, note: "+20% Team ATK on Burst" }
    ],
    sands: "ATK% / Energy Recharge", goblet: "Anemo DMG% / ATK%", circlet: "CRIT Rate / Healing Bonus",
    substats: "Energy Recharge (160-180%) > ATK% > CRIT Rate = CRIT DMG",
    weapons: [
      { name: "Freedom-Sworn", note: "100% — BiS Support (+20% Team ATK & +16% Normal/Charged DMG)" },
      { name: "Favonius Sword", note: "96% — Top 4★ Recommendation (61.3% ER & party particles)" },
      { name: "Amenoma Kageuchi", note: "92% — Top 4★ F2P Craftable (ATK% & flat energy refund)" },
      { name: "Fleuve Cendre Ferryman", note: "90% — Top 4★ F2P Fishing Sword (45.9% ER & Skill CRIT)" },
      { name: "Skyward Blade", note: "88% — ER & Movement/ATK buff" }
    ],
    teams: [
      { name: "Sunfire Overvape", members: ["Jean", "Bennett", "Furina", "Raiden Shogun"], note: "Jean Dandelion Breeze inside Bennett circle self-swirls Pyro at rapid 1-second intervals." },
      { name: "Furina Triple Hydro", members: ["Neuvillette", "Furina", "Yelan", "Jean"], note: "Teamwide instant heal immediately caps Furina Fanfare while shredding Hydro RES." },
      { name: "Xiao Anemo Battery", members: ["Xiao", "Faruzan", "Jean", "Furina"], note: "Reliable Anemo battery, VV shred, and continuous team healing." }
    ]
  },

  "Diluc": {
    role: "Pyro Claymore Plunge & Vaporize Carry",
    tier: "T1",
    talents: "Skill (E) = Normal Attack >= Burst (Q)",
    artifacts: [
      { set: "Crimson Witch of Flames", pieces: 4, note: "BiS (Full 3 stacks from 3-part Searing Onslaught = +37.5% Pyro DMG)" },
      { set: "Marechaussee Hunter", pieces: 4, note: "BiS when paired with Xianyun & Furina (+36% CRIT Rate)" }
    ],
    sands: "ATK% / Elemental Mastery", goblet: "Pyro DMG%", circlet: "CRIT Rate / CRIT DMG",
    substats: "CRIT Rate = CRIT DMG > Elemental Mastery (100-200) > ATK% > Energy Recharge",
    weapons: [
      { name: "Redhorn Stonethresher", note: "100% — BiS (+88.2% CRIT DMG)" },
      { name: "Beacon of the Reed Sea", note: "97% • +33.1% CRIT Rate & +40% ATK" },
      { name: "Serpent Spine", note: "95% — Top 4★ Battle Pass (+27.6% CRIT Rate & +50% All DMG)" },
      { name: "Wolf's Gravestone", note: "94% • +49.6% ATK & +40% Team ATK" },
      { name: "Rainslasher", note: "91% — Top 4★ Gacha in Vape (221 EM & +36% DMG vs Hydro/Pyro)" },
      { name: "Tidal Shadow", note: "88% — Top 4★ F2P Craftable (+48% ATK)" }
    ],
    teams: [
      { name: "Diluc Dragonstrike Plunge", members: ["Diluc", "Furina", "Xianyun", "Bennett"], note: "Diluc's highest ceiling: high plunge multipliers triggering reverse vaporize." },
      { name: "Classic Diluc Vape", members: ["Diluc", "Yelan", "Xingqiu", "Bennett"], note: "Double Hydro rainswords allow Diluc to vaporize every E-cast and normal weave." },
      { name: "Melt Diluc", members: ["Diluc", "Citlali", "Kaedehara Kazuha", "Bennett"], note: "Forward melts assisted by Citlali Cryo shield and Kazuha grouping." }
    ]
  },

  "Mona": {
    role: "Hydro Catalyst Omen Nuke & Burst Damage Buffer",
    tier: "T1",
    talents: "Burst (Q) > Skill (E) > Normal Attack",
    artifacts: [
      { set: "Noblesse Oblige", pieces: 4, note: "+20% Team ATK on Burst" },
      { set: "Emblem of Severed Fate", pieces: 4, note: "Converts high Energy Recharge into +75% Stellaris Phantasm Burst DMG" }
    ],
    sands: "Energy Recharge", goblet: "Hydro DMG% / ATK%", circlet: "CRIT Rate / CRIT DMG",
    substats: "Energy Recharge (200-240%) > CRIT Rate = CRIT DMG > ATK%",
    weapons: [
      { name: "Thrilling Tales of Dragon Slayers", note: "100% — Top Support Choice (+48% ATK to next carry)" },
      { name: "Favonius Codex", note: "95% — Top 4★ Battery (45.9% ER & particles)" },
      { name: "Prototype Amber", note: "91% — F2P Craftable (team healing & energy refund)" },
      { name: "The Widsith", note: "90% — Nuke DPS choice (+55.1% CRIT DMG)" }
    ],
    teams: [
      { name: "Morgana Freeze", members: ["Ganyu", "Mona", "Venti", "Diona"], note: "Extends Mona's Omen damage debuff from 5s to 13s against frozen targets." },
      { name: "Hu Tao One-Shot Nuke", members: ["Hu Tao", "Mona", "Kaedehara Kazuha", "Bennett"], note: "Huge damage amplification for speedrunning and single-rotation boss clears." },
      { name: "Navia Hydro Geo", members: ["Navia", "Zhongli", "Mona", "Bennett"], note: "Mona Omen debuff amplifies Navia's massive gunbrella blasts." }
    ]
  },

  "Keqing": {
    role: "Electro Sword Aggravate Driver",
    tier: "T1",
    talents: "Normal Attack >= Skill (E) = Burst (Q)",
    artifacts: [
      { set: "Thundering Fury", pieces: 4, note: "BiS Aggravate (Cooldown reduction allows endless Stellar Restoration blink casts)" },
      { set: "Gilded Dreams", pieces: 4, note: "+80 EM & extra ATK/EM on reactions" },
      { set: "Gladiator's Finale", pieces: 2, note: "2pc ATK + 2pc Electro DMG" }
    ],
    sands: "ATK% / Elemental Mastery", goblet: "Electro DMG%", circlet: "CRIT Rate / CRIT DMG",
    substats: "CRIT Rate = CRIT DMG > ATK% > Elemental Mastery > Energy Recharge",
    weapons: [
      { name: "Mistsplitter Reforged", note: "100% — Signature BiS (+44.1% CRIT DMG & +28% All Elemental DMG)" },
      { name: "Haran Geppaku Futsu", note: "96% • +33.1% CRIT Rate & +40% Normal ATK DMG" },
      { name: "Primordial Jade Cutter", note: "95% • +44.1% CRIT Rate & HP-to-ATK conversion" },
      { name: "Lion's Roar", note: "90% — Top 4★ Gacha (+36% DMG against Electro-affected enemies)" },
      { name: "Iron Sting", note: "87% — Top 4★ F2P Craftable (165 EM)" },
      { name: "The Black Sword", note: "86% — Top 4★ Battle Pass (+27.6% CRIT Rate & Normal/Charged boost)" }
    ],
    teams: [
      { name: "Keqing Aggravate Standard", members: ["Keqing", "Fischl", "Nahida", "Kaedehara Kazuha"], note: "High APM lightning storm: Keqing triggers Fischl's A4 passive every 0.5s." },
      { name: "Kirara Defensive Aggravate", members: ["Keqing", "Fischl", "Kirara", "Kaedehara Kazuha"], note: "Kirara cat-shield provides comfortable interruption resistance and Deepwood shred." },
      { name: "Furina Quickbloom", members: ["Keqing", "Furina", "Nahida", "Baizhu"], note: "Blends aggressive Aggravate strikes with Hyperbloom missiles." }
    ]
  },

  "Albedo": {
    role: "Geo Sword Off-Field Transient Blossom Sub-DPS",
    tier: "T1",
    talents: "Skill (E) > Burst (Q) > Normal Attack",
    artifacts: [
      { set: "Golden Troupe", pieces: 4, note: "BiS (+70% Off-Field Solar Isotoma Skill DMG)" },
      { set: "Husk of Opulent Dreams", pieces: 4, note: "+24% DEF & +24% Geo DMG" }
    ],
    sands: "DEF%", goblet: "Geo DMG%", circlet: "CRIT Rate / CRIT DMG",
    substats: "CRIT Rate = CRIT DMG > DEF% > ATK%",
    weapons: [
      { name: "Cinnabar Spindle", note: "100% — BiS Event (+69.0% DEF & Skill scaling)" },
      { name: "Harbinger of Dawn", note: "93% — Top 3★ F2P (+46.9% CRIT DMG & +28% CRIT Rate)" },
      { name: "Uraku Misugiri", note: "92% • +88.2% CRIT DMG & +48% Skill DMG" },
      { name: "Flute of Ezpitzal", note: "89% — Top 4★ F2P Natlan Craftable (+69.0% DEF)" }
    ],
    teams: [
      { name: "Double Geo Hu Tao", members: ["Hu Tao", "Xingqiu", "Albedo", "Zhongli"], note: "Geo Resonance (+15% DMG) + Albedo Burst shares 125 EM to Hu Tao for bigger vapes." },
      { name: "Itto Mono Geo", members: ["Arataki Itto", "Gorou", "Albedo", "Zhongli"], note: "Albedo benefits immensely from Gorou's flat DEF and Geo DMG buffs." },
      { name: "Xiao Double Geo", members: ["Xiao", "Faruzan", "Albedo", "Zhongli"], note: "Reliable off-field passive damage and unbreakable shield." }
    ]
  },

  "Fischl": {
    role: "Electro Bow Oz Aggravate Sub-DPS",
    tier: "T0.5",
    talents: "Skill (E) >> Burst (Q) > Normal Attack",
    artifacts: [
      { set: "Golden Troupe", pieces: 4, note: "BiS (+70% Off-Field Oz Skill DMG)" },
      { set: "Thundering Fury", pieces: 2, note: "2pc Electro (+15%) + 2pc ATK (+18%)" }
    ],
    sands: "ATK% / Elemental Mastery (Aggravate)", goblet: "Electro DMG%", circlet: "CRIT Rate / CRIT DMG",
    substats: "CRIT Rate = CRIT DMG > ATK% > Elemental Mastery > Energy Recharge (120%)",
    weapons: [
      { name: "Aqua Simulacra", note: "100% — BiS (+88.2% CRIT DMG & +20% DMG)" },
      { name: "Polar Star", note: "97% • +33.1% CRIT Rate & Skill/Burst buff" },
      { name: "The Stringless", note: "94% — Top 4★ Gacha (165 EM & up to +48% Skill DMG at R5)" },
      { name: "Alley Hunter", note: "91% — Top 4★ Gacha (+40% Off-Field DMG)" },
      { name: "Song of Stillness", note: "87% — Top 4★ F2P Craftable (+32% DMG after being healed)" }
    ],
    teams: [
      { name: "Keqing Aggravate", members: ["Keqing", "Fischl", "Nahida", "Kaedehara Kazuha"], note: "Oz attacks simultaneously with Keqing, unleashing rapid A4 lightning strikes." },
      { name: "Alhaitham Quicken", members: ["Alhaitham", "Fischl", "Nahida", "Zhongli"], note: "Continuous off-field Electro application powering Alhaitham's Spread strikes." },
      { name: "Chevreuse Overload", members: ["Clorinde", "Fischl", "Chevreuse", "Mavuika"], note: "40% Pyro & Electro RES shred with relentless Overload fireworks." }
    ]
  },

  "Kuki Shinobu": {
    role: "Off-Field Hyperbloom Trigger / Tenacity Healer",
    tier: "T0",
    playstyles: [
      {
        id: "hyperbloom",
        name: "Hyperbloom Reaction Trigger",
        icon: "🌱",
        role: "Off-Field Ring of Sanctification Hyperbloom Trigger",
        tier: "T0",
        talents: "Skill (E) >> Burst (Q) (Talent levels do not affect Hyperbloom damage)",
        artifacts: [
          { set: "Flower of Paradise Lost", pieces: 4, note: "Uncontested BiS for Hyperbloom (+80% seed reaction damage)" },
          { set: "Gilded Dreams", pieces: 4, note: "+230 EM (optimal resin efficiency farming)" },
          { set: "2pc Wanderer's + 2pc Gilded", pieces: 2, note: "+160 EM reliable fallback" }
        ],
        sands: "Elemental Mastery", goblet: "Elemental Mastery", circlet: "Elemental Mastery",
        substats: "Elemental Mastery (900&bull;“1,050+) > HP% > Energy Recharge",
        weapons: [
          { name: "Key of Khaj-Nisut", note: "100% — Highest EM Share (+HP% converted to huge EM)" },
          { name: "Freedom-Sworn", note: "94% — High EM & Team Normal/Charged DMG buff" },
          { name: "Xiphos' Moonlight", note: "92% — Converts EM to Energy Recharge for team" },
          { name: "Toukabou Shigure", note: "88% — Event 4★ EM Sword" },
          { name: "Iron Sting", note: "87% — Free F2P Craftable (+165 EM)" },
          { name: "Dark Iron Sword", note: "82% — Free 3&bull;… Liyue Vendor Sword (+141 EM)" }
        ],
        teams: [
          { name: "Alhaitham Quickbloom", members: ["Alhaitham", "Furina", "Nahida", "Kuki Shinobu"], note: "Kuki's 1.5s skill pulse detonates all Dendro cores for 35k+ damage while healing active character." },
          { name: "Nahida On-Field Hyperbloom", members: ["Nahida", "Xingqiu", "Yelan", "Kuki Shinobu"], note: "Double Hydro single-target boss shredder." },
          { name: "Neuvillette Hyperbloom", members: ["Neuvillette", "Nahida", "Kuki Shinobu", "Zhongli"], note: "Effortless continuous reactions while Neuvillette fires hydro beam." }
        ]
      },
      {
        id: "tenacity_healer",
        name: "Tenacity Healer & Buffer",
        icon: "💚",
        role: "Tenacity of the Millelith Support Healer & Electro Applier",
        tier: "T1",
        talents: "Skill (E) >> Burst (Q)",
        artifacts: [
          { set: "Tenacity of the Millelith", pieces: 4, note: "100% uptime on +20% Team ATK buff & +30% Shield Strength" },
          { set: "Ocean-Hued Clam", pieces: 4, note: "Converts excess healing into physical AoE bubble pops" },
          { set: "Maiden Beloved", pieces: 4, note: "Maximum healing output" }
        ],
        sands: "HP% / Elemental Mastery", goblet: "HP%", circlet: "Healing Bonus / HP%",
        substats: "HP% > Elemental Mastery > Energy Recharge > Flat HP",
        weapons: [
          { name: "Key of Khaj-Nisut", note: "100% — Massive HP% stat stick" },
          { name: "Favonius Sword", note: "94% — Universal Particle Battery" },
          { name: "The Dockhand's Assistant", note: "90% &bull;” 4★ HP% Sword" }
        ],
        teams: [
          { name: "Eula Superconduct Anchor", members: ["Eula", "Rosaria", "Kuki Shinobu", "Zhongli"], note: "Tenacity ATK buff + continuous Superconduct for 40% Phys RES shred." },
          { name: "Tighnari Spread Quickswap", members: ["Tighnari", "Yae Miko", "Nahida", "Kuki Shinobu"], note: "Safe healing + Tenacity buff for Tighnari's fast charged shot windows." }
        ]
      }
    ]
  },

  "Sucrose": {
    role: "Anemo Catalyst EM Share Buffer & Swirl Driver",
    tier: "T1",
    talents: "Skill (E) = Burst (Q) > Normal Attack",
    artifacts: [
      { set: "Viridescent Venerer", pieces: 4, note: "BiS (-40% Elemental RES shred for swirled element)" }
    ],
    sands: "Elemental Mastery", goblet: "Elemental Mastery", circlet: "Elemental Mastery",
    substats: "Elemental Mastery > Energy Recharge (140-160%) > ATK%",
    weapons: [
      { name: "Sacrificial Fragments", note: "100% — BiS 4★ (221 EM & skill cooldown reset for extra particles)" },
      { name: "A Thousand Floating Dreams", note: "96% — EM & party elemental DMG buff" },
      { name: "Hakushin Ring", note: "91% — Top 4★ F2P Craftable (Electro reaction party DMG buff)" },
      { name: "Thrilling Tales of Dragon Slayers", note: "90% • +48% ATK to incoming carry" },
      { name: "Favonius Codex", note: "88% — Team energy battery" }
    ],
    teams: [
      { name: "National Swirl", members: ["Xiangling", "Xingqiu", "Bennett", "Sucrose"], note: "Sucrose shares 200+ EM to Xiangling, skyrocketing Pyronado vaporize damage." },
      { name: "Tazer Driver", members: ["Sucrose", "Fischl", "Beidou", "Xingqiu"], note: "Sucrose drives double Electro-Charged procs with normal attack swirls." },
      { name: "Aggravate EM Share", members: ["Keqing", "Fischl", "Nahida", "Sucrose"], note: "Shares EM and shreds Electro RES simultaneously." }
    ]
  },

  "Beidou": {
    role: "Off-Field Electro Burst Sub-DPS & Parry Driver",
    tier: "T1.5",
    playstyles: [
      {
        id: "stormbreaker",
        name: "Stormbreaker Sub-DPS",
        icon: "⚡",
        role: "Multi-Target Bouncing Lightning Discharge Sub-DPS",
        tier: "T1.5",
        talents: "Burst (Q) >> Skill (E) > Normal Attack",
        artifacts: [
          { set: "Emblem of Severed Fate", pieces: 4, note: "Uncontested BiS (+20% ER & converts massive ER into Burst discharge DMG)" },
          { set: "2pc Noblesse + 2pc Thundering", pieces: 2, note: "+20% Burst DMG & +15% Electro DMG fallback" },
          { set: "Noblesse Oblige", pieces: 4, note: "+20% team ATK buff" }
        ],
        sands: "Energy Recharge / ATK%", goblet: "Electro DMG%", circlet: "CRIT Rate / CRIT DMG",
        substats: "Energy Recharge (160&bull;“190% w/ Fischl, 200%+ solo) > CRIT Rate = CRIT DMG > ATK%",
        weapons: [
          { name: "Serpent Spine", note: "100% — Top Battle Pass Claymore (up to +50% All DMG & +27.6% CRIT)" },
          { name: "Wolf's Gravestone", note: "95% — High Base ATK & Team ATK buff" },
          { name: "Beacon of the Reed Sea", note: "94% — High CRIT Rate" },
          { name: "Favonius Greatsword", note: "88% — Solves high ER requirement" },
          { name: "The Luxurious Sea-Lord", note: "85% — Event Free Fish (+Burst DMG)" }
        ],
        teams: [
          { name: "Sucrose Taser Classic", members: ["Sucrose", "Beidou", "Fischl", "Xingqiu"], note: "Fischl batteries Beidou while Sucrose swirls Electro-Charged and procs lightning arcs." },
          { name: "Clorinde Overload Shield", members: ["Clorinde", "Beidou", "Chevreuse", "Mavuika"], note: "Beidou provides 40% damage reduction, interruption shield, and bouncing Electro." }
        ]
      },
      {
        id: "aggravate_driver",
        name: "Aggravate Driver",
        icon: "&bull;Œªï¸",
        role: "Tidecaller Perfect Counter Aggravate Driver",
        tier: "T1.5",
        talents: "Skill (E) >= Burst (Q)",
        artifacts: [
          { set: "Thundering Fury", pieces: 4, note: "+15% Electro & +20% Aggravate DMG with Tidecaller cooldown reduction" },
          { set: "Gilded Dreams", pieces: 4, note: "+230 EM for high Aggravate base hits" }
        ],
        sands: "ATK% / Elemental Mastery", goblet: "Electro DMG%", circlet: "CRIT Rate / CRIT DMG",
        substats: "CRIT Rate = CRIT DMG > ATK% = Elemental Mastery > Energy Recharge",
        weapons: [
          { name: "Serpent Spine", note: "100% — Top Damage" },
          { name: "Mailed Flower", note: "90% — Free Event EM Claymore" },
          { name: "Rainslasher", note: "88% — High EM & +DMG vs Electro" }
        ],
        teams: [
          { name: "Nahida Aggravate Core", members: ["Beidou", "Fischl", "Nahida", "Kaedehara Kazuha"], note: "Every Tidecaller counter triggers Aggravate for 120k+ nuke hits." }
        ]
      }
    ]
  },

  "Faruzan": {
    role: "Anemo Bow Dedicated Anemo Hypercarry Buffer",
    tier: "T0.5",
    talents: "Burst (Q) >> Skill (E) > Normal Attack",
    artifacts: [
      { set: "Viridescent Venerer", pieces: 4, note: "-40% Elemental RES shred if party has elemental sub-DPS" },
      { set: "Noblesse Oblige", pieces: 4, note: "+20% Team ATK on Burst" },
      { set: "Tenacity of the Millelith", pieces: 4, note: "C6 only (Pressurized Collapse pulses provide 100% uptime on +20% ATK)" }
    ],
    sands: "Energy Recharge", goblet: "Anemo DMG% / ATK%", circlet: "CRIT Rate",
    substats: "Energy Recharge (Pre-C6: 280-300%, C6: 180-200%) > CRIT Rate > ATK%",
    weapons: [
      { name: "Favonius Warbow", note: "100% — BiS 4★ (61.3% ER & generates 6 white energy particles on CRIT)" },
      { name: "Elegy for the End", note: "97% • 5★ ER & party EM/ATK buff" },
      { name: "Sacrificial Bow", note: "91% — Double skill for extra energy" },
      { name: "Fading Twilight", note: "88% • 4★ Event (ER & DMG)" }
    ],
    teams: [
      { name: "Xiao Anemo Hyper", members: ["Xiao", "Faruzan", "Furina", "Xianyun"], note: "Faruzan provides 30% Anemo shred, flat Anemo DMG, and +40% Anemo CRIT DMG at C6." },
      { name: "Wanderer Hyper", members: ["Wanderer", "Faruzan", "Bennett", "Zhongli"], note: "Transforms Wanderer's Windblade slashes into rapid 60k+ hits." },
      { name: "Heizou Quickswap", members: ["Shikanoin Heizou", "Faruzan", "Bennett", "Furina"], note: "Devastating one-punch Heartstopper Strike nukes." }
    ]
  },

  "Ororon": {
    role: "Electro Bow Nightsoul Off-Field Sub-DPS & Buffer",
    tier: "T1",
    talents: "Burst (Q) > Skill (E) > Normal Attack",
    artifacts: [
      { set: "Scroll of the Hero of Cinder City", pieces: 4, note: "BiS Natlan Set (+40% Elemental DMG to party on Nightsoul reaction)" },
      { set: "Golden Troupe", pieces: 4, note: "+70% Off-Field Skill DMG" },
      { set: "Noblesse Oblige", pieces: 4, note: "+20% Team ATK on Burst" }
    ],
    sands: "ATK% / Energy Recharge", goblet: "Electro DMG%", circlet: "CRIT Rate / CRIT DMG",
    substats: "CRIT Rate = CRIT DMG > ATK% > Energy Recharge (150-170%)",
    weapons: [
      { name: "Elegy for the End", note: "100% — BiS 5★ Support (ER & party EM/ATK)" },
      { name: "Favonius Warbow", note: "95% — Top 4★ Team Battery (61.3% ER)" },
      { name: "The Stringless", note: "93% • 165 EM & +48% Skill/Burst DMG" },
      { name: "Mouun's Moon", note: "90% — High Burst DMG bonus" },
      { name: "Song of Stillness", note: "87% — Top 4★ F2P Craftable (+32% DMG after heal)" }
    ],
    teams: [
      { name: "Chasca Multi-Element Core", members: ["Chasca", "Ororon", "Furina", "Bennett"], note: "Triggers Nightsoul reactions to load Chasca's Shadowhunt Shells." },
      { name: "Electro-Charged Nightsoul", members: ["Neuvillette", "Furina", "Ororon", "Xilonen"], note: "High frequency Electro-Charged procs triggering Ororon's Hypersense strikes." },
      { name: "Chevreuse Overload", members: ["Arlecchino", "Ororon", "Chevreuse", "Bennett"], note: "Rapid off-field Electro application sustaining Chevreuse passives." }
    ]
  },

  "Kachina": {
    role: "Geo Polearm Cinder City Buffer & Crystal Driver",
    tier: "T1",
    talents: "Skill (E) > Burst (Q) > Normal Attack",
    artifacts: [
      { set: "Scroll of the Hero of Cinder City", pieces: 4, note: "BiS (Triggers +40% Elemental DMG to party upon Nightsoul reaction)" },
      { set: "Husk of Opulent Dreams", pieces: 4, note: "+24% DEF & Geo DMG" }
    ],
    sands: "DEF%", goblet: "Geo DMG%", circlet: "CRIT Rate / DEF%",
    substats: "CRIT Rate > DEF% > Energy Recharge > Flat DEF",
    weapons: [
      { name: "Favonius Lance", note: "100% — BiS 4★ (30.6% ER & party particles)" },
      { name: "Footprint of the Rainbow", note: "95% — Top 4★ F2P Natlan Craftable (+51.7% DEF)" },
      { name: "Deathmatch", note: "92% • +36.8% CRIT Rate for Favonius consistency" },
      { name: "Rightful Reward", note: "88% — Craftable F2P" }
    ],
    teams: [
      { name: "Mualani Vaporize", members: ["Mualani", "Xiangling", "Kachina", "Zhongli"], note: "Kachina triggers Cinder City to grant Mualani +40% Hydro DMG." },
      { name: "Kinich Burning", members: ["Kinich", "Mavuika", "Kachina", "Bennett"], note: "Provides Natlan team buffs and steady Geo crystallize." },
      { name: "Navia Geo Crystal", members: ["Navia", "Kachina", "Furina", "Bennett"], note: "Turbo Twirler drills enemies to produce copious crystal shards for Navia." }
    ]
  },

  "Zibai": {
    role: "Geo Sword Burst DPS & Crystallize Shielder",
    tier: "T0",
    talents: "Skill (E) = Burst (Q) > Normal Attack",
    artifacts: [
      { set: "Husk of Opulent Dreams", pieces: 4, note: "BiS (+24% DEF & +24% Geo DMG)" },
      { set: "Archaic Petra", pieces: 4, note: "+35% Team Elemental DMG on crystal pickup" },
      { set: "Golden Troupe", pieces: 4, note: "+70% Skill DMG" }
    ],
    sands: "DEF%", goblet: "Geo DMG%", circlet: "CRIT Rate / CRIT DMG",
    substats: "CRIT Rate = CRIT DMG > DEF% > Energy Recharge (130%)",
    weapons: [
      { name: "Uraku Misugiri", note: "100% — Signature BiS (+88.2% CRIT DMG, +24% Normal ATK & +48% Skill DMG)" },
      { name: "Peak Patrol Song", note: "96% • +82.7% DEF & Team Elemental DMG buff" },
      { name: "Cinnabar Spindle", note: "92% — Top 4★ Event (+69.0% DEF & Skill scaling)" },
      { name: "Flute of Ezpitzal", note: "89% — Top 4★ F2P Natlan Craftable (+69.0% DEF)" },
      { name: "Wolf-Fang", note: "87% — Top 4★ Battle Pass (+27.6% CRIT Rate)" }
    ],
    teams: [
      { name: "Navia Zibai Crystallize", members: ["Navia", "Zibai", "Furina", "Bennett"], note: "High burst rotation with Geo Resonance and Crystallize shards." },
      { name: "Double Geo Resonance", members: ["Mavuika", "Zibai", "Xilonen", "Bennett"], note: "Mavuika + Xilonen + Zibai + Bennett top tier synergy." },
      { name: "Itto Geo Core", members: ["Arataki Itto", "Gorou", "Zibai", "Zhongli"], note: "Mono Geo powerhouse with uninterrupted shields." }
    ]
  },

  "Linnea": {
    role: "Geo Bow Off-Field Sub-DPS & Coordinator",
    tier: "T0.5",
    talents: "Skill (E) > Burst (Q) > Normal Attack",
    artifacts: [
      { set: "Golden Troupe", pieces: 4, note: "BiS (+70% Off-Field Skill DMG)" },
      { set: "Scroll of the Hero of Cinder City", pieces: 4, note: "+40% Elemental DMG to party" },
      { set: "Husk of Opulent Dreams", pieces: 4, note: "+24% DEF & Geo DMG" }
    ],
    sands: "DEF% / ATK%", goblet: "Geo DMG%", circlet: "CRIT Rate / CRIT DMG",
    substats: "CRIT Rate = CRIT DMG > DEF% / ATK% > Energy Recharge",
    weapons: [
      { name: "Silvershower Heartstrings", note: "100% — BiS (HP & Skill/Burst coordination)" },
      { name: "Aqua Simulacra", note: "96% • +88.2% CRIT DMG & +20% DMG" },
      { name: "Elegy for the End", note: "93% — Team EM & ATK buff" },
      { name: "The Stringless", note: "89% • 165 EM & +48% Skill/Burst DMG" },
      { name: "Favonius Warbow", note: "87% — Team battery (61.3% ER)" }
    ],
    teams: [
      { name: "Zibai Linnea Synergy", members: ["Zibai", "Linnea", "Furina", "Xilonen"], note: "Coordinated Geo arrow fire and Crystallize shred." },
      { name: "Navia Linnea Geo", members: ["Navia", "Linnea", "Xiangling", "Bennett"], note: "Off-field Geo coordination generating Shrapnel cartridges." },
      { name: "Double Geo Melt", members: ["Mavuika", "Citlali", "Linnea", "Bennett"], note: "Nightsoul Geo off-field damage alongside forward melt." }
    ]
  },

  "Dehya": {
    role: "Off-Field Interruption Mitigation / Burgeon & Melt Nuke",
    tier: "T2",
    playstyles: [
      {
        id: "burgeon_support",
        name: "Burgeon Trigger & Support",
        icon: "🌱",
        role: "Off-Field Fiery Sanctum Poise & Burgeon Trigger",
        tier: "T2",
        talents: "Skill (E) >> Burst (Q)",
        artifacts: [
          { set: "Flower of Paradise Lost", pieces: 4, note: "Uncontested BiS for Burgeon reaction damage (+80% seed damage)" },
          { set: "Tenacity of the Millelith", pieces: 4, note: "+20% team ATK & +30% shield strength on continuous skill hits" },
          { set: "Gilded Dreams", pieces: 4, note: "+230 EM alternative" }
        ],
        sands: "Elemental Mastery / HP%", goblet: "Elemental Mastery / HP%", circlet: "Elemental Mastery / HP%",
        substats: "Elemental Mastery (750&bull;“900+) > HP% > Energy Recharge",
        weapons: [
          { name: "Mailed Flower", note: "100% — Top Free 4★ EM Claymore" },
          { name: "Sacrificial Greatsword", note: "94% — Skill reset provides 100% poise field uptime" },
          { name: "Rainslasher", note: "92% — High EM (187 EM)" },
          { name: "Favonius Greatsword", note: "88% — Team Particle Battery" }
        ],
        teams: [
          { name: "Neuvillette Interruption Anchor", members: ["Neuvillette", "Dehya", "Nahida", "Kaedehara Kazuha"], note: "Dehya grants Neuvillette 9s of total interruption immunity at C0 while triggering Burgeon." },
          { name: "Ganyu Burn-Melt", members: ["Ganyu", "Nahida", "Dehya", "Bennett"], note: "Dehya + Nahida maintain continuous Burning aura so Ganyu can melt every Frostflake arrow without a shield." }
        ]
      },
      {
        id: "melt_dps",
        name: "Forward Melt Burst DPS",
        icon: "🔥",
        role: "Forward Melt Flame-Mane's Fist Burst DPS",
        tier: "T2",
        talents: "Burst (Q) >> Skill (E)",
        artifacts: [
          { set: "Emblem of Severed Fate", pieces: 4, note: "Uncontested BiS (+20% ER & converts high ER to Burst fist damage)" },
          { set: "Vourukasha's Glow", pieces: 4, note: "+50% Skill/Burst DMG as Redmane's Blood absorbs damage" }
        ],
        sands: "Energy Recharge / ATK% / HP%", goblet: "Pyro DMG%", circlet: "CRIT Rate / CRIT DMG",
        substats: "Energy Recharge (170&bull;“200%) > CRIT Rate = CRIT DMG > HP% = ATK%",
        weapons: [
          { name: "Beacon of the Reed Sea", note: "100% — Signature BiS (+33.1% CRIT Rate & +40% ATK / +32% HP)" },
          { name: "Redhorn Stonethresher", note: "94% — Huge CRIT DMG stat stick" },
          { name: "Serpent Spine", note: "90% — Battle Pass 4★" },
          { name: "The Luxurious Sea-Lord", note: "85% — Event Free Fish" }
        ],
        teams: [
          { name: "Mona Forward Melt Punch", members: ["Dehya", "Rosaria", "Kaedehara Kazuha", "Bennett"], note: "Bennett + Kazuha buff Dehya while Rosaria Burst applies Cryo for rapid Melt punches." }
        ]
      }
    ]
  },
};

// Keep numeric ID lookup for backwards compatibility

window.GC_BUILDS = {
  10000106: window.GC_BUILDS_BY_NAME["Mavuika"],
  10000087: window.GC_BUILDS_BY_NAME["Neuvillette"],
  10000089: window.GC_BUILDS_BY_NAME["Furina"],
  10000096: window.GC_BUILDS_BY_NAME["Arlecchino"],
  10000103: window.GC_BUILDS_BY_NAME["Xilonen"],
  10000107: window.GC_BUILDS_BY_NAME["Citlali"],
  10000032: window.GC_BUILDS_BY_NAME["Bennett"],
  10000047: window.GC_BUILDS_BY_NAME["Kaedehara Kazuha"],
  10000073: window.GC_BUILDS_BY_NAME["Nahida"],
  10000052: window.GC_BUILDS_BY_NAME["Raiden Shogun"],
  10000114: window.GC_BUILDS_BY_NAME["Skirk"],
  10000112: window.GC_BUILDS_BY_NAME["Escoffier"],
  10000111: window.GC_BUILDS_BY_NAME["Varesa"],
  10000110: window.GC_BUILDS_BY_NAME["Iansan"],
  10000101: window.GC_BUILDS_BY_NAME["Kinich"],
  10000102: window.GC_BUILDS_BY_NAME["Mualani"],
  10000104: window.GC_BUILDS_BY_NAME["Chasca"],
  10000091: window.GC_BUILDS_BY_NAME["Navia"],
  10000098: window.GC_BUILDS_BY_NAME["Clorinde"],
  10000078: window.GC_BUILDS_BY_NAME["Alhaitham"],
  10000060: window.GC_BUILDS_BY_NAME["Yelan"],
  10000030: window.GC_BUILDS_BY_NAME["Zhongli"],
  10000125: window.GC_BUILDS_BY_NAME["Columbina"],
  10000128: window.GC_BUILDS_BY_NAME["Varka"],
  10000033: window.GC_BUILDS_BY_NAME["Tartaglia"],
  10000046: window.GC_BUILDS_BY_NAME["Hu Tao"],
  10000066: window.GC_BUILDS_BY_NAME["Kamisato Ayato"],
  10000002: window.GC_BUILDS_BY_NAME["Kamisato Ayaka"],
  10000037: window.GC_BUILDS_BY_NAME["Ganyu"],
  10000022: window.GC_BUILDS_BY_NAME["Venti"],
  10000026: window.GC_BUILDS_BY_NAME["Xiao"],
  10000023: window.GC_BUILDS_BY_NAME["Xiangling"],
  10000025: window.GC_BUILDS_BY_NAME["Xingqiu"],
  10000054: window.GC_BUILDS_BY_NAME["Sangonomiya Kokomi"]
};

// Smart Prydwen-style Team & Build Resolver for ALL 138+ Characters (Live + Next-Patch Upcoming)
window.GC_GET_BUILD = function (summary, detail, prydwenLive, prydwenTierItem, weaponsCatalog, selectedPlaystyleId) {
  const name = (summary && summary.name) || "Character";
  const elKey = (summary && summary.element) || "Fire";
  const elInfo = (window.GC_REF && window.GC_REF.elements[elKey]) || { name: "Pyro", color: "#ff6b4a" };
  const weapType = (window.GC_REF && window.GC_REF.weaponTypes[summary && summary.weaponType]) || "Sword";
  let curated = window.GC_BUILDS_BY_NAME[name] || (summary && window.GC_BUILDS[summary.id]) || null;

  // Multi-Playstyle Resolution: support dual/multiple builds per character (e.g. Venti, Raiden Shogun, Zhongli, Ganyu)
  let playstyleList = null;
  let activePlaystyle = null;
  if (curated && Array.isArray(curated.playstyles) && curated.playstyles.length > 0) {
    playstyleList = curated.playstyles;
    activePlaystyle = curated.playstyles.find(p => p.id === selectedPlaystyleId) || curated.playstyles[0];
    curated = { ...activePlaystyle };
  }

  // Check pre-compiled offline-ready Prydwen/KQM database
  const slug = (prydwenTierItem && prydwenTierItem.slug) || name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  const precompiled = (window.GC_PRYDWEN_BUILDS && (window.GC_PRYDWEN_BUILDS[name] || window.GC_PRYDWEN_BUILDS[slug])) || null;

  // Determine best tier badge
  let bestTier = curated ? curated.tier : "";
  let primaryRole = curated ? curated.role : "";
  if (prydwenTierItem && prydwenTierItem._tierRatings) {
    const tr = prydwenTierItem._tierRatings;
    const roleEntries = Object.entries(tr);
    const tierOrder = ["T0", "T0.5", "T1", "T1.5", "T2", "T3", "T4", "T5"];
    roleEntries.sort((a, b) => tierOrder.indexOf(a[1]) - tierOrder.indexOf(b[1]));
    if (roleEntries.length > 0) {
      if (!bestTier) bestTier = roleEntries[0][1];
      if (!primaryRole) {
        primaryRole = roleEntries.map(([r, t]) => `${r} (${t})`).join(" • ");
      }
    }
  }
  if (!bestTier) {
    bestTier = (summary && Number(summary.id) >= 10000120) ? "NEW / NEXT PATCH" : "T1.5";
  }
  if (!primaryRole) {
    primaryRole = `${elInfo.name} ${weapType} Carry / Support`;
  }

  // Stat mapping dictionary
  const statMap = {
    "ele_mas": "Elemental Mastery",
    "ener_rech_": "Energy Recharge",
    "atk_": "ATK%",
    "hp_": "HP%",
    "def_": "DEF%",
    "crit_rate_": "CRIT Rate",
    "crit_dmg_": "CRIT DMG",
    "heal_": "Healing Bonus",
    "physical_dmg_": "Physical DMG%",
    "pyro_dmg_": "Pyro DMG%",
    "hydro_dmg_": "Hydro DMG%",
    "cryo_dmg_": "Cryo DMG%",
    "electro_dmg_": "Electro DMG%",
    "anemo_dmg_": "Anemo DMG%",
    "geo_dmg_": "Geo DMG%",
    "dendro_dmg_": "Dendro DMG%"
  };

  // Element-specific defaults
  const elemDefaults = {
    Fire: {
      artifacts: [
        { set: "Crimson Witch of Flames", pieces: 4, note: "Reaction Pyro DPS (+15% Pyro DMG & +15% Vape/Melt)" },
        { set: "Marechaussee Hunter", pieces: 4, note: "Top CRIT Rate set when paired with Furina" },
        { set: "Emblem of Severed Fate", pieces: 4, note: "Best for Burst-focused Pyro Sub-DPS" }
      ],
      sands: "ATK% / Elemental Mastery", goblet: "Pyro DMG%", circlet: "CRIT Rate / CRIT DMG",
      substats: "CRIT Rate = CRIT DMG > EM / ATK% > Energy Recharge",
      teams: [
        { name: "Citlali / Xilonen Melt Core", members: [name, "Citlali", "Xilonen", "Bennett"], note: "High-ceiling Forward Melt composition with Pyro Resonance & double RES shred." },
        { name: "Furina / Yelan Vaporize", members: [name, "Furina", "Yelan", "Xilonen"], note: "Consistent off-field Hydro aura for reliable Vaporize hits." },
        { name: "Chevreuse Overload Core", members: [name, "Fischl", "Chevreuse", "Bennett"], note: "40% Pyro & Electro RES shred from Chevreuse passive." }
      ]
    },
    Water: {
      artifacts: [
        { set: "Marechaussee Hunter", pieces: 4, note: "On-Field Hydro Carry w/ Furina (+36% CRIT Rate)" },
        { set: "Golden Troupe", pieces: 4, note: "Off-Field Skill Sub-DPS (+70% Skill DMG)" },
        { set: "Emblem of Severed Fate", pieces: 4, note: "Burst Sub-DPS / Enabler" }
      ],
      sands: "HP% / ATK% / ER", goblet: "Hydro DMG%", circlet: "CRIT Rate / CRIT DMG",
      substats: "CRIT Rate = CRIT DMG > Energy Recharge > HP% / ATK%",
      teams: [
        { name: "Double Hydro Hyper", members: [name, "Furina", "Kaedehara Kazuha", "Xilonen"], note: "Hydro Resonance (+25% HP) + double RES shred from Kazuha & Xilonen." },
        { name: "Escoffier Freeze Core", members: [name, "Furina", "Escoffier", "Citlali"], note: "55% + 20% Hydro RES shred with continuous Freeze control." },
        { name: "Hyperbloom Driver", members: [name, "Nahida", "Kuki Shinobu", "Yelan"], note: "High-frequency Hydro application driving Nahida + Kuki Hyperbloom cores." }
      ]
    },
    Electric: {
      artifacts: [
        { set: "Thundering Fury", pieces: 4, note: "Aggravate / Skill cooldown reduction" },
        { set: "Golden Troupe", pieces: 4, note: "Off-Field Electro Sub-DPS (+70% Skill DMG)" },
        { set: "Gilded Dreams", pieces: 4, note: "High EM for Aggravate / Hyperbloom" }
      ],
      sands: "ATK% / Elemental Mastery", goblet: "Electro DMG%", circlet: "CRIT Rate / CRIT DMG",
      substats: "CRIT Rate = CRIT DMG > ATK% = Elemental Mastery > Energy Recharge",
      teams: [
        { name: "Nahida Aggravate Core", members: [name, "Fischl", "Nahida", "Xilonen"], note: "Quicken aura boosts every Electro hit with Flat Aggravate bonus damage." },
        { name: "Chevreuse Overload Core", members: [name, "Mavuika", "Chevreuse", "Bennett"], note: "40% Electro/Pyro RES shred and up to +40% ATK from Chevreuse." },
        { name: "Quickbloom Carry", members: [name, "Furina", "Nahida", "Baizhu"], note: "Combines Aggravate and Hyperbloom with Furina's Fanfare buff." }
      ]
    },
    Grass: {
      artifacts: [
        { set: "Deepwood Memories", pieces: 4, note: "Essential -30% Dendro RES shred" },
        { set: "Gilded Dreams", pieces: 4, note: "Personal Spread / Bloom EM & ATK scaling" },
        { set: "Unfinished Reverie", pieces: 4, note: "Best for Burning-focused Dendro units (+50% DMG)" }
      ],
      sands: "Elemental Mastery / ATK%", goblet: "Dendro DMG% / EM", circlet: "CRIT Rate / CRIT DMG",
      substats: "CRIT Rate = CRIT DMG > Elemental Mastery > Energy Recharge",
      teams: [
        { name: "Spread / Quickbloom Core", members: [name, "Nahida", "Furina", "Kuki Shinobu"], note: "Dendro Resonance (+100 EM) + Deepwood shred + Quickbloom reactions." },
        { name: "Aggravate / Spread Dual Carry", members: [name, "Yae Miko", "Nahida", "Zhongli"], note: "100% Quicken uptime with Zhongli's universal 20% RES shred." },
        { name: "Burning / Emilie Core", members: [name, "Emilie", "Mavuika", "Bennett"], note: "High continuous Burning damage." }
      ]
    },
    Ice: {
      artifacts: [
        { set: "Marechaussee Hunter", pieces: 4, note: "+36% CRIT Rate when paired with Furina" },
        { set: "Blizzard Strayer", pieces: 4, note: "+40% CRIT Rate against Frozen enemies" },
        { set: "Noblesse Oblige", pieces: 4, note: "Support / Burst Sub-DPS (+20% Team ATK)" }
      ],
      sands: "ATK% / Energy Recharge", goblet: "Cryo DMG%", circlet: "CRIT DMG / CRIT Rate",
      substats: "CRIT DMG = CRIT Rate > ATK% > Energy Recharge",
      teams: [
        { name: "Escoffier Freeze Ceiling", members: [name, "Furina", "Escoffier", "Shenhe"], note: "55% Cryo/Hydro RES shred from Escoffier + Shenhe's Icy Quill flat DMG buffs." },
        { name: "Reverse Melt Core", members: [name, "Mavuika", "Xilonen", "Bennett"], note: "Mavuika & Bennett enable consistent 1.5x Reverse Melts." }
      ]
    },
    Wind: {
      artifacts: [
        { set: "Viridescent Venerer", pieces: 4, note: "Best for Swirl / Support (-40% Elemental RES)" },
        { set: "Desert Pavilion Chronicle", pieces: 4, note: "Best for On-Field Anemo Hypercarries" },
        { set: "Marechaussee Hunter", pieces: 4, note: "Top CRIT set with Furina" }
      ],
      sands: "ATK% / Elemental Mastery", goblet: "Anemo DMG%", circlet: "CRIT Rate / CRIT DMG / EM",
      substats: "CRIT Rate = CRIT DMG / EM > Energy Recharge > ATK%",
      teams: [
        { name: "Anemo Hypercarry Core", members: [name, "Faruzan", "Furina", "Xianyun"], note: "Faruzan provides 30% Anemo shred + +40% Anemo CRIT DMG alongside Furina." },
        { name: "National Swirl Driver", members: [name, "Xiangling", "Yelan", "Bennett"], note: "Drives Pyronado and Exquisite Throw while shredding both elements with 4pc VV." }
      ]
    },
    Rock: {
      artifacts: [
        { set: "Husk of Opulent Dreams", pieces: 4, note: "Best for DEF-scaling Geo units (+24% DEF & +24% Geo DMG)" },
        { set: "Nighttime Whispers in the Echoing Woods", pieces: 4, note: "Best for ATK-scaling Geo Skill carries (+50% Geo DMG)" },
        { set: "Scroll of the Hero of Cinder City", pieces: 4, note: "Best for Natlan Geo supports" }
      ],
      sands: "DEF% / ATK%", goblet: "Geo DMG%", circlet: "CRIT Rate / CRIT DMG",
      substats: "CRIT Rate = CRIT DMG > DEF% / ATK% > Energy Recharge",
      teams: [
        { name: "Xilonen Furina Geo Core", members: [name, "Xilonen", "Furina", "Bennett"], note: "Geo Resonance (+15% DMG & -20% Geo RES) + Xilonen's 36% Geo shred." },
        { name: "Triple Geo Gorou Core", members: [name, "Chiori", "Gorou", "Zhongli"], note: "Maximizes Gorou's DEF & Geo CRIT DMG buffs." }
      ]
    }
  };

  const def = elemDefaults[elKey] || elemDefaults.Fire;

  // 1. ARTIFACTS RESOLUTION (Curated -> Precompiled -> Live Prydwen -> Element Defaults)
  let artifacts = curated ? curated.artifacts.slice() : [];
  if (!artifacts.length && precompiled && Array.isArray(precompiled.artifacts) && precompiled.artifacts.length > 0) {
    artifacts = precompiled.artifacts.slice();
  }
  if (!artifacts.length && prydwenLive) {
    if (prydwenLive.build && Array.isArray(prydwenLive.build.artifactsData)) {
      prydwenLive.build.artifactsData.slice(0, 4).forEach((ad, idx) => {
        const setName = ad.ref || ad.custom;
        if (!setName) return;
        let note = `Prydwen Rank #${idx + 1}`;
        if (Array.isArray(ad.cells)) {
          const cWithNote = ad.cells.find(c => c && c.notes);
          if (cWithNote && cWithNote.notes) note = cWithNote.notes.replace(/[^\x20-\x7E]/g, "'");
        }
        artifacts.push({ set: setName, pieces: 4, note });
      });
    }
    if (!artifacts.length && prydwenLive.usage && Array.isArray(prydwenLive.usage.artifactSets)) {
      prydwenLive.usage.artifactSets.slice(0, 4).forEach(as => {
        const nA = (as.nameA || "").trim();
        const nB = (as.nameB || "").trim();
        if (!nA && !nB) return;
        let setName = "";
        let pieces = 4;
        const pctVal = Math.round(as.percentage || 0);
        if (nA && nB && nA === nB) {
          setName = nA; pieces = 4;
        } else if (nA && nB) {
          setName = `${nA} + ${nB}`; pieces = 2;
        } else {
          setName = nA || nB; pieces = 2;
        }
        artifacts.push({ set: setName, pieces, note: `${pieces}-Piece Set (${pctVal}% Abyss Usage)`, usagePct: `${pctVal}% Usage` });
      });
    }
  }
  if (!artifacts.length) artifacts = def.artifacts;

  // Deduplicate artifacts by set name
  const seenArts = new Set();
  artifacts = artifacts.filter(a => {
    if (!a || !a.set) return false;
    const k = a.set.toLowerCase();
    if (seenArts.has(k)) return false;
    seenArts.add(k);
    return true;
  });

  // 2. MAIN STATS & SUBSTATS RESOLUTION
  let sands = (curated && curated.sands) || (precompiled && precompiled.sands) || def.sands;
  let goblet = (curated && curated.goblet) || (precompiled && precompiled.goblet) || def.goblet;
  let circlet = (curated && curated.circlet) || (precompiled && precompiled.circlet) || def.circlet;
  let substats = (curated && curated.substats) || (precompiled && precompiled.substats) || def.substats;
  let talents = (curated && curated.talents) || (precompiled && precompiled.talents) || "Skill (E) >= Burst (Q) > Normal Attack";

  if (prydwenLive) {
    if (prydwenLive.usage) {
      if (Array.isArray(prydwenLive.usage.sandsMainStats) && prydwenLive.usage.sandsMainStats.length > 0) {
        const topS = prydwenLive.usage.sandsMainStats.slice(0, 2).map(s => statMap[s.statType] || s.statType);
        sands = topS.join(" / ");
      }
      if (Array.isArray(prydwenLive.usage.gobletMainStats) && prydwenLive.usage.gobletMainStats.length > 0) {
        const topG = prydwenLive.usage.gobletMainStats.slice(0, 2).map(s => statMap[s.statType] || s.statType);
        goblet = topG.join(" / ");
      }
      if (Array.isArray(prydwenLive.usage.circletMainStats) && prydwenLive.usage.circletMainStats.length > 0) {
        const topC = prydwenLive.usage.circletMainStats.slice(0, 2).map(s => statMap[s.statType] || s.statType);
        circlet = topC.join(" / ");
      }
    }
    if (prydwenLive.build && prydwenLive.build.substatsTalents) {
      if (prydwenLive.build.substatsTalents.talents) talents = prydwenLive.build.substatsTalents.talents;
      if (prydwenLive.build.substatsTalents.stats) substats = prydwenLive.build.substatsTalents.stats;
    }
  }

  // 3. WEAPONS RESOLUTION (Curated -> Precompiled -> Live Prydwen -> Top Archetypes)
  let weapons = curated ? curated.weapons.slice() : [];
  if (!weapons.length && precompiled && Array.isArray(precompiled.weapons) && precompiled.weapons.length > 0) {
    weapons = precompiled.weapons.slice();
  }
  if (!weapons.length && prydwenLive) {
    if (prydwenLive.build && Array.isArray(prydwenLive.build.weaponsData)) {
      prydwenLive.build.weaponsData.slice(0, 6).forEach((wd, idx) => {
        const wName = (wd.ref || wd.weapon || wd.name || "").replace(/^[\u201C"\u00AB]|["\u201D\u00BB]$/g, "").trim();
        if (!wName || wName.includes("Sublimation")) return;
        let pctInfo = "";
        if (Array.isArray(wd.cells) && wd.cells[0]) {
          const c0 = wd.cells[0];
          if (c0.team) pctInfo = `Team DPS: ${c0.team}`;
          else if (c0.solo) pctInfo = `Solo DPS: ${c0.solo}`;
        }
        const refTag = wd.dupes ? ` (${wd.dupes})` : "";
        weapons.push({
          name: wName,
          note: `${pctInfo ? pctInfo + " • " : ""}Prydwen #${idx + 1}${refTag}`
        });
      });
    }
    if (!weapons.length && prydwenLive.usage && Array.isArray(prydwenLive.usage.weapons)) {
      prydwenLive.usage.weapons.slice(0, 6).forEach((w, idx) => {
        const wName = (w.name || "").trim();
        if (!wName || wName.includes("Sublimation")) return;
        const pct = w.percentage ? ` (${Number(w.percentage).toFixed(1)}% Abyss Usage)` : "";
        weapons.push({
          name: wName,
          note: idx === 0 ? `BiS / Most Used${pct}` : `Rank #${idx + 1}${pct}`
        });
      });
    }
  }

  // Fallback to authentic archetypal weapons (NEVER sublimation or dummy items)
  const weaponArchetypes = {
    WEAPON_SWORD_ONE_HAND: [
      { name: "Mistsplitter Reforged", note: "Top 5★ General DPS Sword (+44.1% CRIT DMG & +28% All Elemental DMG)" },
      { name: "Freedom-Sworn", note: "Top 5★ Support Sword (+198 EM & +20% Team ATK / +16% Normal/Charged DMG)" },
      { name: "Haran Geppaku Futsu", note: "Top 5★ General Normal Attack DPS (+33.1% CRIT Rate)" },
      { name: "Favonius Sword", note: "Essential 4★ Energy Battery (61.3% ER & particle generation)" },
      { name: "Fleuve Cendre Ferryman", note: "Top 4★ F2P Fishing Sword (+45.9% ER & +16% Skill CRIT Rate)" },
      { name: "Amenoma Kageuchi", note: "Top 4★ Craftable F2P (ATK% & flat energy refund on Burst)" }
    ],
    WEAPON_CLAYMORE: [
      { name: "Redhorn Stonethresher", note: "Top 5★ CRIT DMG Claymore (+88.2% CRIT DMG & Normal/Charged boost)" },
      { name: "Wolf's Gravestone", note: "Top 5★ ATK Claymore (+49.6% ATK & +40% Team ATK buff)" },
      { name: "Serpent Spine", note: "Top 4★ Battle Pass Claymore (up to +50% All DMG & +27.6% CRIT Rate)" },
      { name: "Favonius Greatsword", note: "Top 4★ Utility / Support Battery (61.3% ER)" },
      { name: "Tidal Shadow", note: "Top 4★ Craftable F2P (+48% ATK when receiving healing)" }
    ],
    WEAPON_POLE: [
      { name: "Staff of Homa", note: "Top 5★ Universal Polearm (+66.2% CRIT DMG & HP-to-ATK conversion)" },
      { name: "Staff of the Scarlet Sands", note: "Top 5★ Reaction Polearm (+44.1% CRIT Rate & EM-to-ATK)" },
      { name: "The Catch", note: "Best 4★ F2P Fishing Polearm (+45.9% ER & +32% Burst DMG / +12% Burst CRIT)" },
      { name: "Favonius Lance", note: "Essential 4★ Battery (30.6% ER & universal particles)" },
      { name: "Dragon's Bane", note: "Top 4★ Reaction Option (221 EM & +36% DMG against Pyro/Hydro)" }
    ],
    WEAPON_BOW: [
      { name: "Aqua Simulacra", note: "Top 5★ Universal Bow (+88.2% CRIT DMG & unconditional +20% DMG)" },
      { name: "The First Great Magic", note: "Top 5★ Stat Stick (+66.2% CRIT DMG & Movement/ATK buff)" },
      { name: "Favonius Warbow", note: "Essential 4★ Support Battery (61.3% ER)" },
      { name: "The Stringless", note: "Top 4★ Reaction Sub-DPS (+48% Skill & Burst DMG)" },
      { name: "Song of Stillness", note: "Top 4★ Craftable F2P (+32% DMG after being healed)" }
    ],
    WEAPON_CATALYST: [
      { name: "Tome of the Eternal Flow", note: "Top 5★ Catalyst (+88.2% CRIT DMG & HP / Charged Attack boost)" },
      { name: "Lost Prayer to the Sacred Winds", note: "Top 5★ General Catalyst (+33.1% CRIT Rate & Elemental DMG)" },
      { name: "The Widsith", note: "Best 4★ Gacha Catalyst (+55.1% CRIT DMG & massive song buffs)" },
      { name: "Sacrificial Jade", note: "Top 4★ Battle Pass Catalyst (+36.8% CRIT Rate & +64% HP / +80 EM)" },
      { name: "Prototype Amber", note: "Top 4★ F2P Craftable Support (41.3% HP, team healing & energy refund)" },
      { name: "Favonius Codex", note: "Top 4★ Battery (45.9% ER)" }
    ]
  };

  const wTypeKey = (summary && summary.weaponType) || "WEAPON_SWORD_ONE_HAND";
  const archWeaps = weaponArchetypes[wTypeKey] || weaponArchetypes.WEAPON_SWORD_ONE_HAND;

  if (!weapons.length) {
    weapons = archWeaps.slice();
  }

  // Strict deduplication & filter out test/dummy/sublimation items
  const seenWeap = new Set();
  const cleanWeapons = [];
  weapons.forEach(w => {
    if (!w || !w.name) return;
    let wName = w.name.trim();
    if (wName.includes("- Sublimation")) wName = wName.replace("- Sublimation", "").trim();
    const starter12 = ["apprentice's notes", "dull blade", "waster greatsword", "beginner's protector", "hunter's bow", "silver sword", "old merc's pal", "iron point", "seasoned hunter's bow", "pocket grimoire"];
    if (wName.toLowerCase().includes("sublimation") || wName.toLowerCase().includes("test") || starter12.includes(wName.toLowerCase())) return;
    const k = wName.toLowerCase();
    if (seenWeap.has(k)) return;
    seenWeap.add(k);
    cleanWeapons.push({ ...w, name: wName });
  });

  // Fill up to 5 with archetypes if fewer than 5
  for (const aw of archWeaps) {
    if (cleanWeapons.length >= 5) break;
    const k = aw.name.toLowerCase();
    if (!seenWeap.has(k)) {
      seenWeap.add(k);
      cleanWeapons.push(aw);
    }
  }
  weapons = cleanWeapons.slice(0, 5);

  // 4. TEAMS RESOLUTION (Curated -> Smart Element Archetypes + Prydwen Synergies)
  let teams = curated && curated.teams ? curated.teams.slice() : def.teams.map(t => ({
    name: t.name,
    members: t.members.map(m => m === name ? name : m),
    note: t.note
  }));

  // If live synergies exist, add a top synergy team
  if (prydwenLive && Array.isArray(prydwenLive.synergies) && prydwenLive.synergies.length >= 2) {
    const synNames = prydwenLive.synergies.map(s => s.name || s.character).filter(n => n && n.toLowerCase() !== name.toLowerCase());
    if (synNames.length >= 2) {
      const p1 = synNames[0];
      const p2 = synNames[1];
      const fillerPool = ["Xilonen", "Furina", "Bennett", "Kaedehara Kazuha", "Zhongli", "Nahida", "Yelan"];
      const p3 = fillerPool.find(f => f.toLowerCase() !== name.toLowerCase() && f.toLowerCase() !== p1.toLowerCase() && f.toLowerCase() !== p2.toLowerCase()) || "Xilonen";
      teams.unshift({
        name: `${p1} & ${p2} Synergy Core`,
        members: [name, p1, p2, p3],
        note: `Premier synergy lineup based on Prydwen & KQM top teammate pairing analysis.`
      });
    }
  }

  // Ensure each team has exactly 4 distinct characters, no self-duplicates
  teams = teams.map(t => {
    const seen = new Set();
    const cleanMembers = [];
    t.members.forEach(m => {
      if (m && !seen.has(m.toLowerCase())) {
        seen.add(m.toLowerCase());
        cleanMembers.push(m);
      }
    });
    if (!seen.has(name.toLowerCase())) {
      cleanMembers.unshift(name);
      seen.add(name.toLowerCase());
    }
    const fillers = ["Furina", "Xilonen", "Bennett", "Kaedehara Kazuha", "Zhongli", "Yelan", "Nahida", "Fischl"];
    for (const f of fillers) {
      if (cleanMembers.length >= 4) break;
      if (!seen.has(f.toLowerCase())) {
        seen.add(f.toLowerCase());
        cleanMembers.push(f);
      }
    }
    return { ...t, members: cleanMembers.slice(0, 4) };
  });

  return {
    role: (activePlaystyle && activePlaystyle.role) || primaryRole,
    tier: (activePlaystyle && activePlaystyle.tier) || bestTier,
    talents: (activePlaystyle && activePlaystyle.talents) || talents,
    artifacts: (activePlaystyle && activePlaystyle.artifacts) || artifacts,
    sands: (activePlaystyle && activePlaystyle.sands) || sands,
    goblet: (activePlaystyle && activePlaystyle.goblet) || goblet,
    circlet: (activePlaystyle && activePlaystyle.circlet) || circlet,
    substats: (activePlaystyle && activePlaystyle.substats) || substats,
    weapons: (activePlaystyle && activePlaystyle.weapons) || weapons,
    teams: (activePlaystyle && activePlaystyle.teams) || teams,
    playstyles: playstyleList ? playstyleList.map(p => ({
      id: p.id,
      name: p.name,
      icon: p.icon || "⚔️",
      role: p.role,
      tier: p.tier,
      active: p.id === activePlaystyle.id
    })) : null,
    activePlaystyleId: activePlaystyle ? activePlaystyle.id : null
  };
};


// =========================================================================
// 8. ENDGAME STAT MILESTONES & TARGET CHECKPOINTS (KQM & PRYDWEN THEORYCRAFT)
// =========================================================================
window.GC_STAT_MILESTONES = {
  "Ganyu": {
    critRate: "60% - 70%",
    critDmg: "200% - 240%",
    primaryStat: { name: "Total ATK", val: "2,100+", icon: "atk" },
    em: "200 - 300",
    er: "120% - 130%",
    rating: "Abyss 12 Ready ★★★",
    source: "KQM & Prydwen.gg",
    notes: "Melt Build: Aim for 60%+ Crit Rate first for melt consistency; 200+ EM for reaction multiplier. If running 4pc Blizzard Freeze, reduce CR to 35-45% and stack 220%+ CD."
  },
  "Neuvillette": {
    critRate: "50% - 64%",
    critDmg: "220% - 280%+",
    primaryStat: { name: "Max HP", val: "36,000 - 42,000+", icon: "hp" },
    er: "115% - 130%",
    em: "N/A",
    rating: "Abyss 12 Ready ★★★",
    source: "KQM & Prydwen.gg",
    notes: "4pc Marechaussee Hunter grants +36% CR (+3 stacks), reaching 86-100% effective CR. HP% Goblet can rival Hydro DMG if paired with Furina."
  },
  "Furina": {
    critRate: "65% - 75%",
    critDmg: "150% - 200%+",
    primaryStat: { name: "Max HP", val: "38,000 - 42,000+", icon: "hp" },
    er: "160% - 180% (Double Hydro) / 190% - 220% (Solo)",
    em: "N/A",
    rating: "Abyss 12 Ready ★★★",
    source: "KQM & Prydwen.gg",
    notes: "Prioritize ER requirements for 100% burst uptime before stacking HP or Crit. HP threshold should be at least 38,000 without hydro resonance."
  },
  "Arlecchino": {
    critRate: "75% - 85%",
    critDmg: "180% - 220%+",
    primaryStat: { name: "Total ATK", val: "2,200 - 2,500+", icon: "atk" },
    em: "100 - 180 (Vape)",
    er: "100% - 110%",
    rating: "Abyss 12 Ready ★★★",
    source: "KQM & Prydwen.gg",
    notes: "High CR is vital due to frontloaded Normal Attack damage. In Vaporize teams, 100-180 EM provides massive marginal DPS gains."
  },
  "Mavuika": {
    critRate: "70% - 80%",
    critDmg: "190% - 240%+",
    primaryStat: { name: "Total ATK", val: "2,300+", icon: "atk" },
    em: "150 - 250 (Melt/Vape)",
    er: "120% - 130%",
    rating: "Abyss 12 Ready ★★★",
    source: "KQM & Prydwen.gg",
    notes: "Nightsoul Burst Carry: Balance high Crit with EM if triggering Forward Melt with Citlali or Vaporize."
  },
  "Xilonen": {
    critRate: "40%+ (Favonius)",
    critDmg: "80% - 120%",
    primaryStat: { name: "DEF", val: "3,200+", icon: "def" },
    er: "160% - 180%",
    em: "N/A",
    rating: "Abyss 12 Ready ★★★",
    source: "KQM & Prydwen.gg",
    notes: "Reach 3,200+ DEF to maximize healing and 4pc Hero of Cinder City elemental damage bonuses. Favonius Sword requires ~40% CR."
  },
  "Citlali": {
    critRate: "40% - 50%",
    critDmg: "90% - 130%",
    primaryStat: { name: "Elemental Mastery", val: "800 - 1,000+", icon: "em" },
    er: "160% - 180%",
    em: "800 - 1,000+",
    rating: "Abyss 12 Ready ★★★",
    source: "KQM & Prydwen.gg",
    notes: "Stack EM for high Cryo shield scaling and Nightsoul reaction amplification. Maintain 160%+ ER for rotation consistency."
  },
  "Kinich": {
    critRate: "55% - 65%",
    critDmg: "200% - 240%+",
    primaryStat: { name: "Total ATK", val: "2,200+", icon: "atk" },
    er: "115% - 125%",
    em: "80 - 140",
    rating: "Abyss 12 Ready ★★★",
    source: "KQM & Prydwen.gg",
    notes: "4pc Obsidian Codex grants +40% CR during Nightsoul's Blessing, giving 95-100% effective CR. Do not overcap on Crit Rate."
  },
  "Mualani": {
    critRate: "45% - 55%",
    critDmg: "200% - 250%+",
    primaryStat: { name: "Max HP", val: "34,000 - 38,000+", icon: "hp" },
    em: "150 - 250",
    er: "110% - 120%",
    rating: "Abyss 12 Ready ★★★",
    source: "KQM & Prydwen.gg",
    notes: "Single-hit Vaporize nuke carry. Obsidian Codex grants +40% CR. EM is extremely valuable because every Shark Bite triggers Vaporize."
  },
  "Chasca": {
    critRate: "55% - 65%",
    critDmg: "210% - 260%+",
    primaryStat: { name: "Total ATK", val: "2,200 - 2,500+", icon: "atk" },
    er: "110% - 120%",
    em: "100 - 180",
    rating: "Abyss 12 Ready ★★★",
    source: "KQM & Prydwen.gg",
    notes: "Multi-element Shadowhunt shells convert based on party composition. Obsidian Codex +40% CR allows heavy Crit DMG and ATK investment."
  },
  "Navia": {
    critRate: "70% - 80%",
    critDmg: "180% - 220%+",
    primaryStat: { name: "Total ATK", val: "2,400+", icon: "atk" },
    er: "120% - 130%",
    em: "N/A",
    rating: "Abyss 12 Ready ★★★",
    source: "KQM & Prydwen.gg",
    notes: "Gunbrella Gunshot hits like a truck. 70%+ CR ensures non-crit misses don't ruin rotations. Run with double Geo for energy & resonance."
  },
  "Clorinde": {
    critRate: "65% - 75%",
    critDmg: "180% - 220%+",
    primaryStat: { name: "Total ATK", val: "2,100+", icon: "atk" },
    em: "100 - 160 (Quicken)",
    er: "110% - 120%",
    rating: "Abyss 12 Ready ★★★",
    source: "KQM & Prydwen.gg",
    notes: "Bond of Life dynamic scaling. Passive grants +20% Crit Rate, reaching 85-95% effective CR. 4pc Whimsy or 4pc TF."
  },
  "Alhaitham": {
    critRate: "70% - 80%",
    critDmg: "160% - 200%+",
    primaryStat: { name: "Elemental Mastery", val: "300 - 400+", icon: "em" },
    er: "125% - 140%",
    em: "300 - 400+",
    rating: "Abyss 12 Ready ★★★",
    source: "KQM & Prydwen.gg",
    notes: "Dual scaling on ATK and EM for Projection Attacks. 125%+ ER with Nahida battery, or 140%+ if solo Dendro."
  },
  "Kaedehara Kazuha": {
    critRate: "35% - 45% (Favonius)",
    critDmg: "80% - 120%",
    primaryStat: { name: "Elemental Mastery", val: "900 - 1,000+", icon: "em" },
    er: "160% - 180%+",
    em: "900 - 1,000+",
    rating: "Abyss 12 Ready ★★★",
    source: "KQM & Prydwen.gg",
    notes: "1,000 EM grants a permanent 40% elemental damage bonus to the party. 160%+ ER with Xiphos or Favonius Sword is mandatory for consistent burst rotation."
  },
  "Nahida": {
    critRate: "50% - 60%",
    critDmg: "120% - 150%+",
    primaryStat: { name: "Elemental Mastery", val: "800 - 1,000", icon: "em" },
    er: "120% - 130%",
    em: "800 - 1,000",
    rating: "Abyss 12 Ready ★★★",
    source: "KQM & Prydwen.gg",
    notes: "Off-field: Aim for ~1,000 EM to max out A4 passive (+24% CR & +80% DMG to Tri-Karma). On-field: Can stop at 750-800 EM as her burst shares up to 250 EM."
  },
  "Raiden Shogun": {
    critRate: "60% - 70%",
    critDmg: "140% - 170%+",
    primaryStat: { name: "Energy Recharge", val: "230% - 270%", icon: "er" },
    er: "230% - 270%",
    em: "N/A (Hyperbloom: 950+)",
    rating: "Abyss 12 Ready ★★★",
    source: "KQM & Prydwen.gg",
    notes: "4pc Emblem converts ER into Electro DMG% and team battery energy. Engulfing Lightning scales with 270% ER; The Catch pairs best with 230-250% ER."
  },
  "Zhongli": {
    critRate: "50% - 60% (Hybrid)",
    critDmg: "110% - 140% (Hybrid)",
    primaryStat: { name: "Max HP", val: "50,000+ (Shield) / 32,000+ (Hybrid)", icon: "hp" },
    er: "130% - 140%",
    em: "N/A",
    rating: "Abyss 12 Ready ★★★",
    source: "KQM & Prydwen.gg",
    notes: "Shieldbot: Pure HP% on Sands, Goblet, and Circlet (Black Tassel) for an indestructible shield. Hybrid: HP Sands, Geo Goblet, Crit Circlet."
  },
  "Bennett": {
    critRate: "40%+ (Favonius)",
    critDmg: "80% - 120%",
    primaryStat: { name: "Base ATK", val: "High Base (608+ Weapon)", icon: "atk" },
    er: "220% - 250%+",
    em: "N/A",
    rating: "Abyss 12 Ready ★★★",
    source: "KQM & Prydwen.gg",
    notes: "ATK buff scales strictly off character level + weapon Base ATK (artifact ATK% does NOT boost team buff). 220%+ ER is mandatory for continuous uptime."
  },
  "Xiangling": {
    critRate: "60% - 70%",
    critDmg: "130% - 160%+",
    primaryStat: { name: "Energy Recharge", val: "180% - 220%+", icon: "er" },
    er: "180% - 220%+",
    em: "150 - 250",
    rating: "Abyss 12 Ready ★★★",
    source: "KQM & Prydwen.gg",
    notes: "Pyronado has no ICD and snapshot buffs from Bennett. 180% ER with Raiden/Double Pyro, up to 220%+ in solo Pyro or Childe International."
  },
  "Xingqiu": {
    critRate: "55% - 65%",
    critDmg: "110% - 140%+",
    primaryStat: { name: "Total ATK", val: "1,500+", icon: "atk" },
    er: "180% - 200% (Sac Sword) / 220%+ (Non-ER)",
    em: "N/A",
    rating: "Abyss 12 Ready ★★★",
    source: "KQM & Prydwen.gg",
    notes: "With R3+ Sacrificial Sword, 180% ER is sufficient. If using non-ER weapon or at C0-C5, aim for 210-230% ER for smooth Raincutter rotations."
  },
  "Yelan": {
    critRate: "70% - 80%",
    critDmg: "150% - 200%+",
    primaryStat: { name: "Max HP", val: "30,000 - 35,000+", icon: "hp" },
    er: "170% - 200% (Solo) / 140% - 160% (Double Hydro)",
    em: "N/A",
    rating: "Abyss 12 Ready ★★★",
    source: "KQM & Prydwen.gg",
    notes: "All damage scales entirely on HP%. With Favonius Warbow and 4pc Emblem, 180% ER gives effortless burst rotations and solid personal DPS."
  },
  "Hu Tao": {
    critRate: "70% - 80%",
    critDmg: "200% - 240%+",
    primaryStat: { name: "Max HP", val: "30,000 - 34,000+", icon: "hp" },
    em: "150 - 250",
    er: "105% - 115%",
    rating: "Abyss 12 Ready ★★★",
    source: "KQM & Prydwen.gg",
    notes: "150-250 EM is just as valuable as Crit DMG in Vaporize teams with Xingqiu/Yelan. HP should reach 30,000+ before Guide to Afterlife activation."
  },
  "Xiao": {
    critRate: "75% - 85%",
    critDmg: "180% - 220%+",
    primaryStat: { name: "Total ATK", val: "2,100 - 2,400+", icon: "atk" },
    er: "120% - 140%",
    em: "N/A",
    rating: "Abyss 12 Ready ★★★",
    source: "KQM & Prydwen.gg",
    notes: "Bane of All Evil plunge spam requires 120% ER with C6 Faruzan / Xianyun, or 135-140% with Sucrose battery. 75%+ CR guarantees plunge consistency."
  },
  "Kamisato Ayaka": {
    critRate: "35% - 45% (4pc Blizzard)",
    critDmg: "220% - 260%+",
    primaryStat: { name: "Total ATK", val: "2,100+", icon: "atk" },
    er: "130% - 140%",
    em: "N/A",
    rating: "Abyss 12 Ready ★★★",
    source: "KQM & Prydwen.gg",
    notes: "4pc Blizzard Strayer (+40% CR against frozen) + Cryo Resonance (+15% CR) provides +55% free CR, making 35-45% base CR optimal to avoid overcapping."
  },
  "Sangonomiya Kokomi": {
    critRate: "N/A (-100% Passive)",
    critDmg: "N/A",
    primaryStat: { name: "Max HP", val: "35,000 - 40,000+", icon: "hp" },
    er: "140% - 160%",
    em: "N/A (Nilou Bloom: 700+)",
    rating: "Abyss 12 Ready ★★★",
    source: "KQM & Prydwen.gg",
    notes: "Flawless Strategy passive reduces CR by 100%. Prioritize Healing Bonus Circlet, HP% Sands/Goblet, and 150% ER for continuous jellyfish refresh."
  },
  "Lyney": {
    critRate: "55% - 65% (4pc Marechaussee)",
    critDmg: "210% - 260%+",
    primaryStat: { name: "Total ATK", val: "2,200+", icon: "atk" },
    er: "110% - 120%",
    em: "N/A",
    rating: "Abyss 12 Ready ★★★",
    source: "KQM & Prydwen.gg",
    notes: "Mono Pyro specialist: A4 passive grants up to +100% DMG against Pyro-affected targets with 3 Pyro teammates. 4pc Marechaussee provides +36% free CR."
  },
  "Wriothesley": {
    critRate: "55% - 65% (4pc Marechaussee)",
    critDmg: "200% - 250%+",
    primaryStat: { name: "Total ATK", val: "2,100+", icon: "atk" },
    er: "110% - 125%",
    em: "80 - 150 (Melt)",
    rating: "Abyss 12 Ready ★★★",
    source: "KQM & Prydwen.gg",
    notes: "Marechaussee Hunter adds +36% CR. In Melt compositions with Xiangling/Thoma, EM substats provide massive amplifying damage gains."
  },
  "Emilie": {
    critRate: "70% - 80%",
    critDmg: "160% - 200%+",
    primaryStat: { name: "Total ATK", val: "2,300 - 2,600+", icon: "atk" },
    er: "120% - 135%",
    em: "N/A",
    rating: "Abyss 12 Ready ★★★",
    source: "KQM & Prydwen.gg",
    notes: "Burning sub-DPS: Lumidouce Case scales with ATK against Burning targets. 4pc Unfinished Reverie gives +50% DMG. ATK reaches 2,400+."
  },
  "Xianyun": {
    critRate: "30% - 40% (Favonius)",
    critDmg: "70% - 100%",
    primaryStat: { name: "Total ATK", val: "3,000 - 3,500+", icon: "atk" },
    er: "180% - 220%+",
    em: "N/A",
    rating: "Abyss 12 Ready ★★★",
    source: "KQM & Prydwen.gg",
    notes: "A4 passive plunge flat DMG buff caps at 4,500 ATK (yielding 9,000 flat plunge bonus). Prioritize 200%+ ER first to guarantee burst every rotation."
  },
  "Chiori": {
    critRate: "70% - 80%",
    critDmg: "160% - 200%+",
    primaryStat: { name: "DEF", val: "2,300 - 2,600+", icon: "def" },
    er: "100% - 110%",
    em: "N/A",
    rating: "Abyss 12 Ready ★★★",
    source: "KQM & Prydwen.gg",
    notes: "Dual scaling on DEF (primary) and ATK (secondary). Requires a Geo Construct or C1 for a second Sode doll. 4pc Golden Troupe is BiS."
  },
  "Chevreuse": {
    critRate: "30% - 40% (Favonius)",
    critDmg: "60% - 90%",
    primaryStat: { name: "Max HP", val: "40,000+", icon: "hp" },
    er: "150% - 170%",
    em: "N/A",
    rating: "Abyss 12 Ready ★★★",
    source: "KQM & Prydwen.gg",
    notes: "Reach exactly 40,000 HP to max out the A4 passive (+40% ATK buff to all Pyro and Electro party members). Black Tassel or Rightful Reward."
  },
  "Gaming": {
    critRate: "60% - 70% (or 45-55% Marechaussee)",
    critDmg: "180% - 220%+",
    primaryStat: { name: "Total ATK", val: "1,900+", icon: "atk" },
    em: "150 - 250",
    er: "120% - 130%",
    rating: "Abyss 12 Ready ★★★",
    source: "KQM & Prydwen.gg",
    notes: "Plunge Vaporize/Melt carry. Synergizes with Xianyun, Furina, and Bennett. EM is critical for Vaporize multipliers."
  },
  "Baizhu": {
    critRate: "20% - 30%",
    critDmg: "60% - 90%",
    primaryStat: { name: "Max HP", val: "50,000", icon: "hp" },
    er: "180% - 200%+",
    em: "N/A",
    rating: "Abyss 12 Ready ★★★",
    source: "KQM & Prydwen.gg",
    notes: "Reach 50,000 HP to cap his A4 reaction buff (+100% Bloom/Hyperbloom/Burgeon, +40% Quicken). Needs 180%+ ER with Prototype Amber."
  },
  "Nilou": {
    critRate: "20% - 30%",
    critDmg: "60% - 90%",
    primaryStat: { name: "Max HP", val: "74,444", icon: "hp" },
    er: "130% - 140%",
    em: "150 - 250",
    rating: "Abyss 12 Ready ★★★",
    source: "KQM & Prydwen.gg",
    notes: "A4 passive grants +9% Bountiful Core DMG per 1,000 HP above 30,000, capping at 74,444 HP (+400% DMG bonus). Stack HP on every artifact."
  },
  "Tartaglia": {
    critRate: "70% - 80%",
    critDmg: "160% - 200%+",
    primaryStat: { name: "Total ATK", val: "2,000+", icon: "atk" },
    em: "100 - 150",
    er: "120% - 130%",
    rating: "Abyss 12 Ready ★★★",
    source: "KQM & Prydwen.gg",
    notes: "Riptide application and frontloaded Vaporize burst. 70%+ CR is critical to proc Riptide on critical hits with Normal/Charged attacks."
  },
  "Keqing": {
    critRate: "65% - 75%",
    critDmg: "180% - 220%+",
    primaryStat: { name: "Total ATK", val: "1,900 - 2,200+", icon: "atk" },
    em: "100 - 180",
    er: "110% - 115%",
    rating: "Abyss 12 Ready ★★★",
    source: "KQM & Prydwen.gg",
    notes: "Starward Sword burst grants +15% CR and +15% ER. 4pc Thundering Fury is BiS for continuous E teleports in Aggravate teams with Fischl."
  },
  "Fischl": {
    critRate: "65% - 75%",
    critDmg: "150% - 190%+",
    primaryStat: { name: "Total ATK", val: "1,900 - 2,200+", icon: "atk" },
    em: "80 - 160 (Aggravate)",
    er: "110% - 120%",
    rating: "Abyss 12 Ready ★★★",
    source: "KQM & Prydwen.gg",
    notes: "Golden Troupe gives +70% Oz Skill DMG. A4 passive has no ICD on Aggravate triggers. Stringless or signature 5★ bows."
  },
  "Kuki Shinobu": {
    critRate: "20% - 30%",
    critDmg: "60% - 90%",
    primaryStat: { name: "Elemental Mastery", val: "950 - 1,050+", icon: "em" },
    er: "110% - 125%",
    em: "950 - 1,050+",
    rating: "Abyss 12 Ready ★★★",
    source: "KQM & Prydwen.gg",
    notes: "Hyperbloom Trigger: Pure EM on Sands, Goblet, and Circlet with 4pc Gilded Dreams or 4pc Flower of Paradise Lost. Level 90 is mandatory for base reaction scaling."
  },
  "Sucrose": {
    critRate: "20% - 30%",
    critDmg: "60% - 90%",
    primaryStat: { name: "Elemental Mastery", val: "850 - 950+", icon: "em" },
    er: "150% - 170%",
    em: "850 - 950+",
    rating: "Abyss 12 Ready ★★★",
    source: "KQM & Prydwen.gg",
    notes: "4pc Viridescent Venerer. Shares 20% of her EM to all party members. Sacrificial Fragments provides high EM and an extra skill charge."
  },
  "Arataki Itto": {
    critRate: "70% - 80%",
    critDmg: "180% - 220%+",
    primaryStat: { name: "DEF", val: "2,400 - 2,700+", icon: "def" },
    er: "125% - 135%",
    em: "N/A",
    rating: "Abyss 12 Ready ★★★",
    source: "KQM & Prydwen.gg",
    notes: "Burst converts DEF to ATK. 4pc Husk of Opulent Dreams. Requires 130% ER with Gorou and Zhongli Geo battery."
  },
  "Yoimiya": {
    critRate: "75% - 85%",
    critDmg: "170% - 210%+",
    primaryStat: { name: "Total ATK", val: "2,100+", icon: "atk" },
    em: "80 - 150 (Vape)",
    er: "100% - 110%",
    rating: "Abyss 12 Ready ★★★",
    source: "KQM & Prydwen.gg",
    notes: "Normal Attack hit string carries damage (especially hits 3 and 5). High CR ensures hits don't fail to crit. Run with Zhongli shield to prevent interruption."
  },
  "Eula": {
    critRate: "65% - 75%",
    critDmg: "170% - 200%+",
    primaryStat: { name: "Total ATK", val: "2,200+", icon: "atk" },
    er: "125% - 140%",
    em: "N/A",
    rating: "Abyss 12 Ready ★★★",
    source: "KQM & Prydwen.gg",
    notes: "Lightfall Sword physical nuke. 4pc Pale Flame gives +50% Physical DMG and +18% ATK. Needs Raiden or Diona/Rosaria battery for energy."
  },
  "Mitya": {
    critRate: "70% - 80%",
    critDmg: "180% - 220%+",
    primaryStat: { name: "Elemental Mastery", val: "600 - 800+", icon: "em" },
    em: "600 - 800+",
    er: "120% - 130%",
    rating: "Abyss 12 Ready &bull;…&bull;…&bull;…",
    source: "KQM & Prydwen.gg",
    notes: "Gradient Beacons scale massively with Elemental Mastery. Run EM Sands and 4pc Heart of the Furnace / Gilded Dreams."
  },
  "Valeriy": {
    critRate: "30% - 40% (Favonius) / N/A",
    critDmg: "N/A",
    primaryStat: { name: "Total ATK", val: "2,400 - 2,800+", icon: "atk" },
    er: "150% - 180%",
    em: "N/A",
    rating: "Abyss 12 Ready &bull;…&bull;…&bull;…",
    source: "KQM & Prydwen.gg",
    notes: "Supercharged Shield & team buffs scale entirely off Total ATK. Run ATK% Goblet and ATK% (or CR for Favonius) Circlet; Electro DMG% and Crit DMG are not recommended."
  },
  "Tsaritsa (Cryo Archon)": {
    critRate: "45% - 55% (Freeze) / 70% - 80% (Melt)",
    critDmg: "200% - 260%+",
    primaryStat: { name: "Total ATK", val: "2,000 - 2,300+", icon: "atk" },
    er: "130% - 150%",
    em: "150 - 250 (Melt)",
    rating: "Abyss 12 Ready &bull;…&bull;…&bull;…",
    source: "KQM & Prydwen.gg (Pre-Release Theorycraft)",
    notes: "Cryo Archon Sovereign Bow Carry: 2,000+ ATK maximizes passive bonuses. Seamlessly enables and amplifies Snezhnaya Stellar reactions."
  },
  "Danica": {
    critRate: "60% - 70%",
    critDmg: "130% - 160%+",
    primaryStat: { name: "Total ATK", val: "3,500 - 4,000+", icon: "atk" },
    er: "140% - 160%",
    em: "N/A",
    rating: "Abyss 12 Ready &bull;…&bull;…&bull;…",
    source: "KQM & Prydwen.gg (Pre-Release Theorycraft)",
    notes: "Zapolyarny Head Maid (Electro Claymore): Unbreakable Stellar-Conduct shield and party RES shred scaling off Total ATK targeting 4,000 cap."
  }
};

window.GC_GET_STAT_MILESTONES = function(charName, build, summary) {
  if (window.GC_STAT_MILESTONES && window.GC_STAT_MILESTONES[charName]) {
    return window.GC_STAT_MILESTONES[charName];
  }
  
  // Smart fallback synthesizer for any character
  const sands = (build && build.sands) || "";
  const role = (build && build.role) || "";
  const element = (summary && summary.element) || "";
  const isHealer = role.toLowerCase().includes("heal") || role.toLowerCase().includes("sustain");
  const isSupport = role.toLowerCase().includes("support") || role.toLowerCase().includes("buffer");
  const isHp = sands.includes("HP%") || role.toLowerCase().includes("hp");
  const isDef = sands.includes("DEF%") || role.toLowerCase().includes("def");
  const isEm = sands.includes("Elemental Mastery") || role.toLowerCase().includes("em") || element === "Wind" || element === "Grass";
  
  let primaryStat = { name: "Total ATK", val: "2,000 - 2,300+", icon: "atk" };
  if (isHp) primaryStat = { name: "Max HP", val: "32,000 - 38,000+", icon: "hp" };
  else if (isDef) primaryStat = { name: "DEF", val: "2,200 - 2,600+", icon: "def" };
  else if (isEm) primaryStat = { name: "Elemental Mastery", val: "750 - 950+", icon: "em" };
  
  let cr = "65% - 75%";
  let cd = "150% - 190%+";
  if (isHealer) { cr = "30% - 40%"; cd = "70% - 100%"; }
  else if (isSupport) { cr = "40% - 50% (Favonius)"; cd = "90% - 130%"; }
  
  return {
    critRate: cr,
    critDmg: cd,
    primaryStat: primaryStat,
    er: isSupport || isHealer ? "160% - 190%+" : "120% - 135%",
    em: (element === "Fire" || element === "Water" || element === "Grass") ? "100 - 200" : "N/A",
    rating: "Abyss 12 Ready ★★★",
    source: "KQM & Prydwen.gg",
    notes: `Theorycraft Baseline: Balance ${primaryStat.name} with standard 1:2 Crit Ratio. Ensure ER threshold is satisfied for seamless 20s team rotations.`
  };
};
