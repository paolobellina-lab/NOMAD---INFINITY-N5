const nomadsDatabase_Part1 = [
    // --- GRENZER ---
    {
        id_profilo: "grenzer_ml",
        nome: "Grenzer",
        arma: "Missile Launcher / Pistol, Breaker Pistol, CC Weapon", // [cite: 37]
        cc: 16, bs: 13, wip: 13, arm: 3, // [cite: 20, 21, 23, 24]
        skills: "Multispectral Visor L1, Courage, Immunity (Shock), Warhorse" // [cite: 35, 36]
    },
    {
        id_profilo: "grenzer_redfury",
        nome: "Grenzer",
        arma: "Red Fury / Pistol, Breaker Pistol, CC Weapon", // [cite: 39]
        cc: 16, bs: 13, wip: 13, arm: 3,
        skills: "Multispectral Visor L1, Courage, Immunity (Shock), Warhorse"
    },
    {
        id_profilo: "grenzer_fo",
        nome: "Grenzer (Forward Observer)",
        arma: "Combi Rifle, Light Flamethrower(+1B), Flash Pulse / Pistol, Breaker Pistol, CC Weapon", // [cite: 66]
        cc: 16, bs: 13, wip: 13, arm: 3,
        skills: "Multispectral Visor L1, Forward Observer, Sensor, NCO, Courage, Immunity (Shock), Warhorse" // [cite: 44, 64, 65]
    },
    {
        id_profilo: "grenzer_sniper",
        nome: "Grenzer (Marksmanship)",
        arma: "MULTI Sniper Rifle / Pistol, Breaker Pistol, CC Weapon", // [cite: 97]
        cc: 16, bs: 13, wip: 13, arm: 3,
        skills: "Multispectral Visor L1, Marksmanship, Courage, Immunity (Shock), Warhorse" // [cite: 74, 93, 95]
    },

    // --- HELLCAT ---
    {
        id_profilo: "hellcat_bsg",
        nome: "Hellcat",
        arma: "Boarding Shotgun, Adhesive Launcher Rifle, D-Charges / Pistol, CC Weapon", // [cite: 122]
        cc: 14, bs: 12, wip: 13, arm: 2, // [cite: 115, 116]
        skills: "Combat Jump (+3), Courage, Parachutist, Super-Jump (Jet Propulsion), Terrain (Zero-G)" // [cite: 121]
    },
    {
        id_profilo: "hellcat_spitfire",
        nome: "Hellcat",
        arma: "Spitfire / Pistol, CC Weapon", // [cite: 124]
        cc: 14, bs: 12, wip: 13, arm: 2,
        skills: "Combat Jump (+3), Courage, Parachutist, Super-Jump (Jet Propulsion), Terrain (Zero-G)"
    },
    {
        id_profilo: "hellcat_hacker",
        nome: "Hellcat (Hacker)",
        arma: "Boarding Shotgun, D-Charges / Pistol, CC Weapon", // [cite: 155]
        cc: 14, bs: 12, wip: 13, arm: 2,
        skills: "Hacking Device, Combat Jump (+3), Courage, Parachutist, Super-Jump (Jet Propulsion), Terrain (Zero-G)" // [cite: 128, 149]
    },

    // --- ZONDNAUTICA ---
    {
        id_profilo: "zondnautica_spitfire",
        nome: "Zondnautica",
        arma: "Spitfire, Chain Rifle, Smoke Grenade Launcher / Pistol, CC Weapon", // [cite: 179]
        cc: 15, bs: 12, wip: 13, arm: 3, // [cite: 161, 162]
        skills: "AI Motorcycle, Courage, Impetuous, Limited Cover, Mimetism (-3), Transmutation (Auto)" // [cite: 167, 178]
    },
    {
        id_profilo: "zondnautica_bsg",
        nome: "Zondnautica",
        arma: "Boarding Shotgun, Chain Rifle, Smoke Grenade Launcher / Pistol, CC Weapon", // [cite: 180]
        cc: 15, bs: 12, wip: 13, arm: 3,
        skills: "AI Motorcycle, Courage, Impetuous, Limited Cover, Mimetism (-3), Transmutation (Auto)"
    },

    // --- INTRUDER ---
    {
        id_profilo: "intruder_hmg",
        nome: "Intruder",
        arma: "Heavy Machine Gun, Grenades / Pistol, CC Weapon", // [cite: 247]
        cc: 14, bs: 13, wip: 14, arm: 3, // [cite: 238-243]
        skills: "Multispectral Visor L2, Camouflage, Mimetism (-3), Stealth, Surprise Attack (-3), Terrain (Total)" // [cite: 241, 246]
    },
    {
        id_profilo: "intruder_sniper",
        nome: "Intruder",
        arma: "MULTI Sniper Rifle / Pistol, CC Weapon", // [cite: 263]
        cc: 14, bs: 13, wip: 14, arm: 3,
        skills: "Multispectral Visor L2, X Visor, Camouflage, Mimetism (-3), Stealth, Surprise Attack (-3), Terrain (Total)" // [cite: 250, 261, 262]
    },
    {
        id_profilo: "intruder_hacker",
        nome: "Intruder (Killer Hacker)",
        arma: "AP Submachine Gun(+1B), Pulzar(+1B), Grenades / Pistol, CC Weapon", // [cite: 338]
        cc: 14, bs: 13, wip: 14, arm: 3,
        skills: "Multispectral Visor L2, Killer Hacking Device, Camouflage, Mimetism (-3), Stealth, Surprise Attack (-3), Terrain (Total)" // [cite: 323, 336, 337]
    },

    // --- HECKLER ---
    {
        id_profilo: "heckler_redfury",
        nome: "Heckler",
        arma: "Red Fury / Pistol, CC Weapon", // [cite: 283]
        cc: 15, bs: 12, wip: 13, arm: 1, // [cite: 279-282]
        skills: "Camouflage (1 Use), Forward Deployment (+4), Mimetism (-3), Stealth, Surprise Attack (-3), Terrain (Zero-G)" // [cite: 283]
    },
    {
        id_profilo: "heckler_combi",
        nome: "Heckler",
        arma: "Combi Rifle, Chain Rifle, Smoke Grenade Launcher, Flash Pulse / Pistol, CC Weapon", // [cite: 285]
        cc: 15, bs: 12, wip: 13, arm: 1,
        skills: "Camouflage (1 Use), Forward Deployment (+4), Mimetism (-3), Stealth, Surprise Attack (-3), Terrain (Zero-G)"
    },

    // --- ZERO ---
    {
        id_profilo: "zero_combi",
        nome: "Zero",
        arma: "Combi Rifle, Shock Mine / Pistol, CC Weapon", // [cite: 459]
        cc: 15, bs: 11, wip: 13, arm: 0, // [cite: 449, 450]
        skills: "Camouflage, Infiltration, Mimetism (-3), Stealth, Surprise Attack (-3), Terrain (Total)" // [cite: 458]
    },
    {
        id_profilo: "zero_bsg",
        nome: "Zero",
        arma: "Boarding Shotgun, Shock Mine, PARA Mine / Pistol, CC Weapon", // [cite: 478]
        cc: 15, bs: 11, wip: 13, arm: 0,
        skills: "Camouflage, Infiltration, Mimetism (-3), Stealth, Surprise Attack (-3), Terrain (Total)"
    },
    {
        id_profilo: "zero_sniper",
        nome: "Zero",
        arma: "MULTI Sniper Rifle, Shock Mine / Pistol, CC Weapon", // [cite: 505]
        cc: 15, bs: 11, wip: 13, arm: 0,
        skills: "Camouflage, Infiltration, Mimetism (-3), Stealth, Surprise Attack (-3), Terrain (Total)"
    },

    // --- ALGUACIL ---
    {
        id_profilo: "alguacil_combi",
        nome: "Alguacil",
        arma: "Combi Rifle / Pistol, CC Weapon", // [cite: 602]
        cc: 14, bs: 11, wip: 13, arm: 1, // [cite: 592-595]
        skills: "Line Troops" // [cite: 588]
    },
    {
        id_profilo: "alguacil_hmg",
        nome: "Alguacil",
        arma: "Heavy Machine Gun / Pistol, CC Weapon", // [cite: 603]
        cc: 14, bs: 11, wip: 13, arm: 1,
        skills: "Line Troops"
    },
    {
        id_profilo: "alguacil_ml",
        nome: "Alguacil",
        arma: "Missile Launcher / Pistol, CC Weapon", // [cite: 607]
        cc: 14, bs: 11, wip: 13, arm: 1,
        skills: "Line Troops"
    },

    // --- MARY PROBLEMS ---
    {
        id_profilo: "mary_problems",
        nome: "Mary Problems (Hacker)",
        arma: "Submachine Gun, Zapper, Pitcher / Pistol, CC Weapon", // [cite: 680]
        cc: 14, bs: 12, wip: 14, arm: 1, // [cite: 671, 672]
        skills: "Hacking Device (Oblivion +1B), Killer Hacking Device (Trinity AP), Climbing Plus, Dodge (+3), Forward Deployment (+4), Mimetism (-6)" // [cite: 679, 680]
    },

    // --- SPEKTR ---
    {
        id_profilo: "spektr_sniper",
        nome: "Spektr",
        arma: "MULTI Sniper Rifle, Shock Mine / Silenced Pistol, CC Weapon", // [cite: 691]
        cc: 13, bs: 12, wip: 14, arm: 1, // [cite: 685]
        skills: "Camouflage, Hidden Deployment, Infiltration, Mimetism (-6), Stealth, Surprise Attack (-3), Terrain (Total)" // [cite: 690]
    },
    {
        id_profilo: "spektr_bsg",
        nome: "Spektr (Forward Observer)",
        arma: "Boarding Shotgun, Shock Mine, Flash Pulse / Silenced Pistol, CC Weapon", // [cite: 740]
        cc: 13, bs: 12, wip: 14, arm: 1,
        skills: "Forward Observer, Camouflage, Hidden Deployment, Infiltration, Mimetism (-6), Stealth, Surprise Attack (-3), Terrain (Total)" // [cite: 727, 739]
    },

    // --- MORLOCK ---
    {
        id_profilo: "morlock_chain_da",
        nome: "Morlock",
        arma: "Chain Rifle, Smoke Grenades / Kobra Pistol, DA CC Weapon (PS=6)", // [cite: 779]
        cc: 23, bs: 11, wip: 14, arm: 1, // [cite: 772, 774]
        skills: "Courage, Dodge (+1), Impetuous, Martial Arts L2, MetaChemistry, No Cover" // [cite: 778]
    },
    {
        id_profilo: "morlock_chain_ap",
        nome: "Morlock",
        arma: "Chain Rifle, Smoke Grenades / Assault Pistol, AP CC Weapon(PS=6)", // [cite: 783]
        cc: 23, bs: 11, wip: 14, arm: 1,
        skills: "Courage, Dodge (+1), Impetuous, Martial Arts L2, MetaChemistry, No Cover"
    },

    // --- PERSEUS ---
    {
        id_profilo: "perseus_multi",
        nome: "Perseus",
        arma: "MULTI Rifle, Nanopulser, Smoke Grenades / AP Heavy Pistol, DA CC Weapon (PS=5)", // [cite: 860]
        cc: 23, bs: 13, wip: 13, arm: 2, // [cite: 841-845]
        skills: "BS Attack (+1B), Courage, Dodge (+1), Frenzy, Martial Arts L3, Mimetism (-6), No Wound Incapacitation, Stealth, Super-Jump" // [cite: 859]
    },

    // --- DAKTARI & CLOCKMAKER ---
    {
        id_profilo: "daktari",
        nome: "Daktari",
        arma: "Combi Rifle | MediKit / Pistol, CC Weapon", // [cite: 885]
        cc: 11, bs: 10, wip: 14, arm: 1, // [cite: 882-884, 870-872]
        skills: "Doctor" // [cite: 883]
    },
    {
        id_profilo: "clockmaker",
        nome: "Clockmaker",
        arma: "Combi Rifle, D-Charges / Pistol, CC Weapon", // [cite: 886]
        cc: 14, bs: 11, wip: 15, arm: 1, // 
        skills: "Engineer, Deactivator, GizmoKit (+1B)" // [cite: 877, 881]
    },

    // --- MOBILE BRIGADA ---
    {
        id_profilo: "mobile_brigada_multi",
        nome: "Mobile Brigada",
        arma: "MULTI Rifle | TinBot: Firewall (-6) / Boarding Pistol(+1B), CC Weapon", // [cite: 933]
        cc: 18, bs: 13, wip: 13, arm: 5, // 
        skills: "360 Visor, Courage, Jump (3)" // [cite: 929, 932]
    },
    {
        id_profilo: "mobile_brigada_hmg",
        nome: "Mobile Brigada",
        arma: "Heavy Machine Gun / Boarding Pistol(+1B), CC Weapon", // [cite: 936]
        cc: 18, bs: 13, wip: 13, arm: 5,
        skills: "360 Visor, Courage, Jump (3)"
    }
];
const nomadsDatabase_Part2 = [
    // --- MOBILE BRIGADA (Integrazione armi pesanti) ---
    {
        id_profilo: "mobile_brigada_multi",
        nome: "Mobile Brigada",
        arma: "MULTI Rifle | TinBot: Firewall (-6) / Boarding Pistol(+1B), CC Weapon", // [cite: 1017]
        cc: 18, bs: 13, wip: 13, arm: 5, // [cite: 968-976]
        skills: "360 Visor, Courage, Jump (3)" // [cite: 989-992]
    },
    {
        id_profilo: "mobile_brigada_bsg",
        nome: "Mobile Brigada",
        arma: "Boarding Shotgun | TinBot: Firewall [-6] / Boarding Pistol(+1B), CC Weapon", // [cite: 993, 998]
        cc: 18, bs: 13, wip: 13, arm: 5, // [cite: 999-1005]
        skills: "360 Visor, Courage, Jump (3)" // [cite: 989-992]
    },

    // --- INTERVENTOR ---
    {
        id_profilo: "interventor_combi",
        nome: "Interventor",
        arma: "Combi Rifle | FastPanda / Pistol, CC Weapon", // [cite: 1076, 1120]
        cc: 13, bs: 11, wip: 15, arm: 1, // [cite: 1082-1085]
        skills: "Hacking Device Plus, Support Troops" // [cite: 1088]
    },
    {
        id_profilo: "interventor_bsg",
        nome: "Interventor",
        arma: "Boarding Shotgun | FastPanda / Pistol, CC Weapon", // [cite: 1100, 1121]
        cc: 13, bs: 11, wip: 15, arm: 1, // [cite: 1090-1093]
        skills: "Hacking Device Plus, Support Troops" // [cite: 1088]
    },

    // --- DRONI (ZONDS) ---
    {
        id_profilo: "stempler_zond",
        nome: "Stempler Zond",
        arma: "Combi Rifle, Flash Pulse / PARA CC Weapon(-3)", // [cite: 1146, 1157]
        cc: 13, bs: 11, wip: 13, arm: 0, // [cite: 1133-1135]
        skills: "Deactivator, Repeater, Climbing Plus, Courage, Forward Observer, Remote Presence, Sensor, Triangulated Fire" // [cite: 1144, 1145]
    },
    {
        id_profilo: "reaktion_zond_hmg",
        nome: "Reaktion Zond",
        arma: "Heavy Machine Gun / PARA CC Weapon(-3)", // [cite: 1181]
        cc: 13, bs: 11, wip: 13, arm: 1, // [cite: 1163-1167]
        skills: "360 Visor, Climbing Plus, Courage, Remote Presence, Total Reaction" // [cite: 1174, 1181]
    },
    {
        id_profilo: "vertigo_zond",
        nome: "Vertigo Zond",
        arma: "Missile Launcher / PARA CC Weapon(-3)", // [cite: 1202]
        cc: 13, bs: 12, wip: 13, arm: 0, // [cite: 1188-1190]
        skills: "BS Attack (Guided), Courage, Remote Presence" // [cite: 1202]
    },
    {
        id_profilo: "meteor_zond_bsg",
        nome: "Meteor Zond",
        arma: "Boarding Shotgun, Flash Pulse / PARA CC Weapon(-6)", // [cite: 1235]
        cc: 14, bs: 11, wip: 13, arm: 0, // [cite: 1210-1212]
        skills: "ECM: Hacker (-3), Repeater, Combat Jump, Courage, Forward Observer, Parachutist, Remote Presence, Sensor, Super-Jump (Jet Propulsion), Triangulated Fire" // [cite: 1221-1223]
    },
    {
        id_profilo: "transductor_zond",
        nome: "Transductor Zond",
        arma: "Flash Pulse / PARA CC Weapon(-3)", // [cite: 1237]
        cc: 13, bs: 8, wip: 13, arm: 0, // [cite: 1225-1231]
        skills: "Repeater, Courage, Mimetism (-3), Remote Presence" // [cite: 1236, 1237]
    },
    {
        id_profilo: "tsyklon_spitfire",
        nome: "Tsyklon Zond",
        arma: "Spitfire, Chain Rifle, Pitcher / PARA CC Weapon(-6)", // [cite: 1649]
        cc: 14, bs: 12, wip: 13, arm: 3, // [cite: 1628-1632]
        skills: "360 Visor, Repeater, X Visor, Climbing Plus, Courage, Remote Presence" // [cite: 1646, 1647]
    },
    {
        id_profilo: "lunokhod",
        nome: "Lunokhod Zond",
        arma: "Heavy Shotgun, Heavy Flamethrower, E/Mitter, Crazykoala / PARA CC Weapon(-3)", // [cite: 1668]
        cc: 14, bs: 12, wip: 13, arm: 3, // [cite: 1654-1661]
        skills: "Repeater, Climbing Plus, Courage, Forward Deployment (+4), Minelayer, Remote Presence" // [cite: 1666, 1667]
    },
    {
        id_profilo: "salyut",
        nome: "Salyut Zond",
        arma: "Combi Rifle / PARA CC Weapon(-3)", // [cite: 1778]
        cc: 13, bs: 11, wip: 13, arm: 2, // [cite: 1718-1723]
        skills: "Baggage, Courage, Remote Presence" // [cite: 1735, 1736]
    },

    // --- ZOE & PI-WELL ---
    {
        id_profilo: "zoe",
        nome: "Zoe",
        arma: "Combi Rifle, D-Charges / Pistol, PARA CC Weapon(-3)", // [cite: 1259]
        cc: 16, bs: 11, wip: 15, arm: 1, // [cite: 1249-1254]
        skills: "Deactivator, GizmoKit, Hacking Device (Zero Pain), Engineer, Immunity (Shock), Immunity (BTS)" // [cite: 1258, 1259]
    },
    {
        id_profilo: "pi_well",
        nome: "Pi-Well",
        arma: "Combi Rifle, Flash Pulse(+1B), Pitcher / PARA CC Weapon(-6)", // [cite: 1328]
        cc: 13, bs: 11, wip: 13, arm: 0, // [cite: 1309, 1314]
        skills: "ECM: Hacker (-3), Repeater, Courage, Forward Observer, Mimetism (-6), Remote Presence, Sensor, Triangulated Fire" // [cite: 1325, 1327]
    },

    // --- MODERATOR ---
    {
        id_profilo: "moderator_combi",
        nome: "Moderator",
        arma: "Combi Rifle / Pistol, PARA CC Weapon(-6)", // [cite: 1359]
        cc: 18, bs: 10, wip: 13, arm: 0, // [cite: 1341-1345]
        skills: "Immunity (Shock)" // [cite: 1351]
    },
    {
        id_profilo: "moderator_spitfire",
        nome: "Moderator",
        arma: "Spitfire / Pistol, PARA CC Weapon(-6)", // [cite: 1403]
        cc: 18, bs: 10, wip: 13, arm: 0, // [cite: 1391-1399]
        skills: "Immunity (Shock)" // [cite: 1402]
    },
    {
        id_profilo: "moderator_bsg",
        nome: "Moderator",
        arma: "Boarding Shotgun, E/M Carbine / Pistol, PARA CC Weapon(-6)", // [cite: 1460]
        cc: 18, bs: 10, wip: 13, arm: 0, // [cite: 1449-1453]
        skills: "Immunity (Shock)" // [cite: 1459]
    },

    // --- SIN-EATER ---
    {
        id_profilo: "sineater_hmg",
        nome: "Sin-Eater",
        arma: "Heavy Machine Gun / Pistol, CC Weapon", // [cite: 1480]
        cc: 14, bs: 13, wip: 13, arm: 3, // [cite: 1468-1470]
        skills: "Immunity (Shock), Mimetism (-3), Neurocinetics, Religious Troop" // [cite: 1480]
    },
    {
        id_profilo: "sineater_mk12",
        nome: "Sin-Eater",
        arma: "Mk12 / Pistol, CC Weapon", // [cite: 1502]
        cc: 14, bs: 13, wip: 13, arm: 3, // [cite: 1489-1491]
        skills: "Immunity (Shock), Mimetism (-3), Neurocinetics, Religious Troop" // [cite: 1502]
    },
    {
        id_profilo: "sineater_sniper",
        nome: "Sin-Eater",
        arma: "MULTI Sniper Rifle / Pistol, CC Weapon", // [cite: 1503]
        cc: 14, bs: 13, wip: 13, arm: 3, // [cite: 1496]
        skills: "Immunity (Shock), Mimetism (-3), Neurocinetics, Religious Troop" // [cite: 1503]
    },

    // --- MORAN ---
    {
        id_profilo: "moran_combi",
        nome: "Moran",
        arma: "Combi Rifle, Flash Pulse, D-Charges, Crazykoala / Pistol, CC Weapon", // [cite: 1519]
        cc: 15, bs: 12, wip: 13, arm: 0, // [cite: 1516]
        skills: "Surprise Attack (-3), Camouflage (1 Use), Courage, Forward Observer, Infiltration, Mimetism (-3), Minelayer, Stealth, Terrain (Total)" // [cite: 1505, 1518]
    },
    {
        id_profilo: "moran_bsg",
        nome: "Moran",
        arma: "Boarding Shotgun, Flash Pulse(+1B), Crazykoala / Pistol, CC Weapon", // [cite: 1581]
        cc: 15, bs: 12, wip: 13, arm: 0, // [cite: 1560-1564]
        skills: "Surprise Attack (-3), Camouflage (1 Use), Courage, Forward Observer, Infiltration, Mimetism (-3), Minelayer, Stealth, Terrain (Total)" // [cite: 1554, 1580]
    },

    // --- CHIMERA ---
    {
        id_profilo: "chimera",
        nome: "Chimera",
        arma: "Combi Rifle, Nanopulser, Eclipse Grenades / Pistol, Viral CC Weapon (PS=6)", // [cite: 1621]
        cc: 24, bs: 11, wip: 12, arm: 1, // [cite: 1609-1613]
        skills: "CC Attack (-3), Climbing Plus, Dodge (+1), Immunity (Enhanced), Impetuous, Natural Born Warrior, No Cover" // [cite: 1620]
    },

    // --- SZALAMANDRA (TAG) ---
    {
        id_profilo: "szalamandra",
        nome: "Szalamandra",
        arma: "Hyper-Rapid Magnetic Cannon, Heavy Flamethrower / CC Weapon (PS=5)", // [cite: 1541]
        cc: 17, bs: 14, wip: 13, arm: 8, // [cite: 1529-1534]
        skills: "ECM: Guided (-6), BS Attack (SR-1), Dodge (PH=11), Gizmokit (PH=11), NCO" // [cite: 1539, 1540]
    }
];
