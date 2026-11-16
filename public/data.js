// Region collectibles for the schematic map (approximate positions - not to scale).
// Character data now comes live from gi.yatta.moe; curated builds live in builds.js.
window.GENSHIN_DATA = {
  regions: [
    {
      id: "mondstadt",
      name: "Mondstadt",
      nation: "City of Freedom (Anemo)",
      mapCenter: { x: 50, y: 48 },
      totalStats: { chests: 468, oculi: 65, challenges: 17, seelies: 51, shrines: 10 },
      collectibles: [
        { id: "m_c_1", type: "chest", subType: "Luxurious Chest", name: "Cathedral Belfry Top", x: 48.2, y: 38.5, hint: "Climb to the very top bell tower of the Favonius Cathedral.", reward: "10-40 Primogems, Anemo Sigils" },
        { id: "m_c_2", type: "chest", subType: "Luxurious Chest", name: "Mondstadt Plaza Ring Sprint", x: 50.1, y: 44.2, hint: "Run through the sparkling ring starting on the plaza fence without falling off.", reward: "10 Primogems, Artefacts" },
        { id: "m_c_3", type: "chest", subType: "Precious Chest", name: "Knights of Favonius Rooftop", x: 46.5, y: 42.0, hint: "On top of the Knights of Favonius headquarters next to the teleport.", reward: "5 Primogems" },
        { id: "m_c_4", type: "chest", subType: "Exquisite Chest", name: "Cider Lake Northern Island", x: 52.8, y: 32.1, hint: "Guarded by Cryo and Hydro slime ring on the small island.", reward: "2 Primogems" },
        { id: "m_c_5", type: "chest", subType: "Common Chest", name: "Whispering Woods Camp", x: 57.3, y: 39.4, hint: "Defeat 3 Hilichurls guarding the campsite.", reward: "Normal loot, 2 Sigils" },
        { id: "m_c_6", type: "chest", subType: "Luxurious Chest", name: "Stormbearer Point Cliff Corner", x: 68.4, y: 22.8, hint: "Hidden just beneath the cliff edge looking towards the secret uninhabited island.", reward: "10-40 Primogems" },
        { id: "m_c_7", type: "chest", subType: "Exquisite Chest", name: "Windrise Giant Oak Tree Hollow", x: 58.2, y: 55.4, hint: "Investigate behind the giant tree of Vanessa near the Statue of the Seven.", reward: "2 Primogems" },
        { id: "m_c_8", type: "chest", subType: "Precious Chest", name: "Dadaupa Gorge Sword Cemetery", x: 67.5, y: 68.3, hint: "Complete the 3 Hilichurl tribe seals (Electro, Pyro, Cryo totems).", reward: "10 Primogems, Billet" },
        { id: "m_o_1", type: "oculi", subType: "Anemoculus", name: "Favonius Cathedral Spire", x: 48.0, y: 37.8, hint: "Gliding off the belfry apex directly onto the cross.", reward: "Statue of Seven Upgrade" },
        { id: "m_o_2", type: "oculi", subType: "Anemoculus", name: "Windrise Ancient Tree Branch", x: 58.0, y: 54.0, hint: "Climb high onto the eastern branch of Vanessa's Oak Tree.", reward: "Statue of Seven Upgrade" },
        { id: "m_o_3", type: "oculi", subType: "Anemoculus", name: "Stormterror's Lair Central Dome", x: 26.5, y: 31.2, hint: "Ride the ascending wind current directly inside the tower dome.", reward: "Statue of Seven Upgrade" },
        { id: "m_o_4", type: "oculi", subType: "Anemoculus", name: "Cape Oath Tip", x: 73.1, y: 72.8, hint: "Floating in the air; guide 3 Seelies to create a wind current to the portal.", reward: "Statue of Seven Upgrade" },
        { id: "m_ch_1", type: "challenge", subType: "Time Trial", name: "Starsnatch Cliff Barrel Buster", x: 64.1, y: 33.2, hint: "Explode 6 exploding barrels within 45 seconds.", reward: "Exquisite Chest" },
        { id: "m_ch_2", type: "challenge", subType: "Time Trial", name: "Wolvendom Speed Run", x: 38.6, y: 52.4, hint: "Collect 8 Anemo particles along the canyon path within 40 seconds.", reward: "Common Chest" },
        { id: "m_s_1", type: "seelie", subType: "Seelie", name: "Dawn Winery Vineyard Seelie", x: 41.2, y: 62.1, hint: "Follow the gentle blue spirit around the grape trellis back to its garden.", reward: "Exquisite Chest" },
        { id: "m_sh_1", type: "shrine", subType: "Shrine of Depths", name: "Brightcrown Mountain Shrine", x: 32.1, y: 39.8, hint: "Requires Mondstadt Shrine of Depths Key from temples or handbook.", reward: "Luxurious Chest + 40 Primos" },
        { id: "m_sh_2", type: "shrine", subType: "Shrine of Depths", name: "Galesong Hill Cliffside Shrine", x: 62.4, y: 75.2, hint: "Situated on the grassy cliff overlooking the ocean.", reward: "Luxurious Chest + 40 Primos" },
        { id: "m_b_1", type: "fight", subType: "World Boss", name: "Anemo Hypostasis (Beth)", x: 63.8, y: 26.5, hint: "Standard Boss: Use non-Anemo DPS, swirl elemental cores in final phase.", reward: "Vayuda Gemstones, Hurricane Seeds" },
        { id: "m_b_2", type: "fight", subType: "Weekly Boss", name: "Andrius, Dominator of Wolves", x: 34.5, y: 54.8, hint: "Lupus Boreas weekly challenge. Immune to Cryo and Anemo.", reward: "Ring of Boreas, Tail, Spirit Locket" }
      ]
    },
    {
      id: "liyue",
      name: "Liyue",
      nation: "City of Contracts (Geo)",
      mapCenter: { x: 48, y: 52 },
      totalStats: { chests: 1131, oculi: 131, challenges: 45, seelies: 84, shrines: 10 },
      collectibles: [
        { id: "l_c_1", type: "chest", subType: "Luxurious Chest", name: "Liyue Harbor Bank Vault", x: 62.8, y: 78.4, hint: "Inside the Northland Bank up the stairs, behind receptionist Ekaterina.", reward: "200,000 Mora Chest" },
        { id: "l_c_2", type: "chest", subType: "Luxurious Chest", name: "Qingce Village Peak Heart", x: 38.2, y: 26.4, hint: "Chi of Yore quest puzzle: light Statues facing Windterror, Dragonspine, Harbor, Jueyun.", reward: "Luxurious Chest + 4-Star Artifact" },
        { id: "l_c_3", type: "chest", subType: "Luxurious Chest", name: "Mt. Aocang Floating Pavilion", x: 26.4, y: 44.1, hint: "Rotate the 3 crane statues on Qingyun, Hulao, and Aocang to face the peak.", reward: "3 Luxurious Chests at summit!" },
        { id: "l_c_4", type: "chest", subType: "Precious Chest", name: "Guyun Stone Forest Ruin Guard Fleet", x: 74.6, y: 72.1, hint: "Defeat 4 Ruin Guards simultaneously on the central island.", reward: "Precious Chest" },
        { id: "l_c_5", type: "chest", subType: "Exquisite Chest", name: "Wangshu Inn Water Wheel Puzzle", x: 51.5, y: 46.2, hint: "Strike the elemental totems under the porch and water wheel.", reward: "2 Primogems" },
        { id: "l_o_1", type: "oculi", subType: "Geoculus", name: "Qingyun Peak Sky Garden", x: 29.8, y: 48.6, hint: "At the absolute highest point on the floating stone pillar above cloud sea.", reward: "Statue of Seven Upgrade" },
        { id: "l_o_2", type: "oculi", subType: "Geoculus", name: "Beidou's Crux Alcor Crow's Nest", x: 78.4, y: 81.2, hint: "Climb the main mast rope ladder to the top lookout point of the pirate ship.", reward: "Statue of Seven Upgrade" },
        { id: "l_o_3", type: "oculi", subType: "Geoculus", name: "Dihua Marsh Wooden Bridge Underpass", x: 49.3, y: 39.5, hint: "Gliding under the arched wooden bridge connecting Dihua to Bishui.", reward: "Statue of Seven Upgrade" },
        { id: "l_ch_1", type: "challenge", subType: "Time Trial", name: "Yaoguang Shoal Combat Challenge", x: 65.4, y: 56.7, hint: "Defeat 3 Stonehide Lawachurls within 60s without freezing.", reward: "Precious Chest" },
        { id: "l_sh_1", type: "shrine", subType: "Shrine of Depths", name: "Guyun Stone Forest Islet Shrine", x: 77.2, y: 76.5, hint: "Located on the southern tiny jagged rock of Guyun archipelago.", reward: "Luxurious Chest + 40 Primos" },
        { id: "l_b_1", type: "fight", subType: "World Boss", name: "Primo Geovishap", x: 33.1, y: 64.2, hint: "Tianqiu Valley underground cave. Reflect its Primordial Shower with a shield!", reward: "Juvenile Jade, Elemental Chunks" },
        { id: "l_b_2", type: "fight", subType: "Weekly Boss", name: "Azhdaha (Dragon-Queller)", x: 22.4, y: 51.3, hint: "Ancient Geo Dragon sealed under the tree. Changes two elements weekly.", reward: "Bloodjade Branch, Scale, Horn" }
      ]
    },
    {
      id: "inazuma",
      name: "Inazuma",
      nation: "Nation of Eternity (Electro)",
      mapCenter: { x: 52, y: 50 },
      totalStats: { chests: 730, oculi: 181, challenges: 40, seelies: 60, shrines: 10 },
      collectibles: [
        { id: "i_c_1", type: "chest", subType: "Luxurious Chest", name: "Tenshukaku Palace Roof Peak", x: 68.2, y: 65.4, hint: "Scale the Shogun's grand imperial palace to the golden finial ornament.", reward: "Luxurious Chest + Electro Sigils" },
        { id: "i_c_2", type: "chest", subType: "Luxurious Chest", name: "Grand Narukami Shrine Floating Rock", x: 59.4, y: 34.2, hint: "Summon Electrogranum at shrine base and fly through thunder spheres.", reward: "Luxurious Chest" },
        { id: "i_c_3", type: "chest", subType: "Remarkable Chest", name: "Tsurumi Island Murkwood Furnishing", x: 28.5, y: 78.4, hint: "Use the Peculiar Pinion on the Thunderbird statue to reveal puzzle.", reward: "Inazuman Furnishing Blueprint" },
        { id: "i_c_4", type: "chest", subType: "Precious Chest", name: "Araumi Underground Cube Puzzle", x: 55.1, y: 26.8, hint: "Synchronize the 5 rotating Electro stone cubes so all face forward.", reward: "Precious Chest, Water draining" },
        { id: "i_o_1", type: "oculi", subType: "Electroculus", name: "Grand Narukami Sacred Sakura Tree", x: 61.2, y: 32.5, hint: "Resting inside the heart hollow of the gigantic fox sakura tree.", reward: "Statue of Seven Upgrade" },
        { id: "i_o_2", type: "oculi", subType: "Electroculus", name: "Tatarasuna Furnace Dome Apex", x: 44.8, y: 55.1, hint: "Requires disabling the Mikage Furnace barrier via Tatara Tales quest.", reward: "Statue of Seven Upgrade" },
        { id: "i_sh_1", type: "shrine", subType: "Shrine of Depths", name: "Seirai Island Crater Rim Shrine", x: 64.2, y: 82.5, hint: "Perched along the purple rocky rim overlooking Amakumo Peak.", reward: "Luxurious Chest + 40 Primos" },
        { id: "i_b_1", type: "fight", subType: "World Boss", name: "Thunder Manifestation", x: 62.0, y: 86.4, hint: "Electric bat soaring above Amakumo Peak. Bring Pyro, Cryo or Dendro DPS.", reward: "Storm Beads" }
      ]
    },
    {
      id: "sumeru",
      name: "Sumeru",
      nation: "Nation of Wisdom (Dendro)",
      mapCenter: { x: 50, y: 50 },
      totalStats: { chests: 1480, oculi: 271, challenges: 68, seelies: 92, shrines: 10 },
      collectibles: [
        { id: "s_c_1", type: "chest", subType: "Luxurious Chest", name: "Sumeru City Tree Canopy Branch", x: 58.6, y: 44.2, hint: "Climb the highest twisted roots of the divine tree above Sanctuary of Surasthana.", reward: "Luxurious Chest" },
        { id: "s_c_2", type: "chest", subType: "Luxurious Chest", name: "Mausoleum of King Deshret Summit", x: 28.4, y: 64.2, hint: "Climb atop the solar pyramid after acquiring maximum clearance.", reward: "Luxurious Chest + Achievement" },
        { id: "s_o_1", type: "oculi", subType: "Dendroculus", name: "Palace of Alcazarzaray Dome", x: 64.1, y: 32.8, hint: "Use the Four-Leaf Sigils to zip to the highest palace dome spire.", reward: "Statue of Seven Upgrade" },
        { id: "s_o_2", type: "oculi", subType: "Dendroculus", name: "Apam Woods Giant Rain Tree Core", x: 48.7, y: 72.1, hint: "Hit the bouncy mushroom with Electro to leap into the high branch canopy.", reward: "Statue of Seven Upgrade" },
        { id: "s_b_1", type: "fight", subType: "World Boss", name: "Dendro Hypostasis (Zain)", x: 38.2, y: 78.4, hint: "Underground cavern in Dar al-Shifa. Cleanse its 3 vine restorative cores with Dendro.", reward: "Quelled Creeper" }
      ]
    },
    {
      id: "fontaine",
      name: "Fontaine",
      nation: "Nation of Justice (Hydro)",
      mapCenter: { x: 50, y: 50 },
      totalStats: { chests: 810, oculi: 216, challenges: 54, seelies: 62, shrines: 10 },
      collectibles: [
        { id: "f_c_1", type: "chest", subType: "Luxurious Chest", name: "Palais Mermonia Clocktower", x: 52.4, y: 38.2, hint: "Glide from the top aquabus viaduct onto the highest Palais Mermonia tower.", reward: "Luxurious Chest" },
        { id: "f_c_2", type: "chest", subType: "Luxurious Chest", name: "Underwater Sunken Remuria Galley", x: 42.1, y: 58.6, hint: "Use Xenochromatic Armored Crab ability to shatter the barnacled hull.", reward: "Luxurious Chest + Hydro Sigils" },
        { id: "f_o_1", type: "oculi", subType: "Hydroculus", name: "Opera Epiclese Fountain Arch", x: 62.5, y: 44.1, hint: "High in the air between the twin water columns of Fountain of Lucine.", reward: "Statue of Seven Upgrade" },
        { id: "f_b_1", type: "fight", subType: "World Boss", name: "Hydro Tulpa", x: 36.8, y: 46.5, hint: "Submerged cavern near Chemin de L'Espoir. Disrupt Half-Tulpas with Pyro/Electro.", reward: "Water That Failed To Transcend" }
      ]
    },
    {
      id: "natlan",
      name: "Natlan",
      nation: "Nation of War (Pyro)",
      mapCenter: { x: 50, y: 50 },
      totalStats: { chests: 520, oculi: 108, challenges: 38, seelies: 42, shrines: 8 },
      collectibles: [
        { id: "n_c_1", type: "chest", subType: "Luxurious Chest", name: "Stadium of the Sacred Flame Apex", x: 50.2, y: 48.6, hint: "Ascend to the highest tier of the grand battle arena banner structure.", reward: "Luxurious Chest + Pyro Sigils" },
        { id: "n_c_2", type: "chest", subType: "Precious Chest", name: "Saurian Nest Hidden Grotto", x: 38.4, y: 39.2, hint: "Indwell a Tepetlisaur to tunnel underground and break the cracked volcanic floor.", reward: "Precious Chest" },
        { id: "n_o_1", type: "oculi", subType: "Pyroculus", name: "Tepeacac Rise Volcanic Arch", x: 42.1, y: 34.8, hint: "Morph into a Yumkasaur to grapple through the flame ring high above.", reward: "Statue of Seven Upgrade" },
        { id: "n_b_1", type: "fight", subType: "World Boss", name: "Secret Source Automaton", x: 56.4, y: 58.2, hint: "Climb the energy pillars using Nightsoul Blessing before the blast detonates.", reward: "Gold-Inscribed Core" }
      ]
    }
  ]
};

