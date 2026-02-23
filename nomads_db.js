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
const nomadsDatabase_Part3 = [
    // --- KRIZA BORAC ---
    {
        id_profilo: "kriza_hmg",
        nome: "Kriza Borac",
        arma: "Heavy Machine Gun / Heavy Pistol, CC Weapon", 
        cc: 16, bs: 13, wip: 13, arm: 5, 
        skills: "360 Visor, Courage, Fireteam: Haris, Immunity (Shock)" 
    },
    {
        id_profilo: "kriza_mk12",
        nome: "Kriza Borac",
        arma: "Mk12 / Heavy Pistol, CC Weapon", 
        cc: 16, bs: 13, wip: 13, arm: 5, 
        skills: "360 Visor, Courage, Fireteam: Haris, Immunity (Shock)" 
    },

    // --- TASKMASTER ---
    {
        id_profilo: "taskmaster_hmg",
        nome: "Taskmaster",
        arma: "Heavy Machine Gun, Crazykoala / Heavy Pistol, DA CC Weapon (PS=5)", 
        cc: 20, bs: 13, wip: 13, arm: 5, 
        skills: "Heavyweight, Courage, Kinematika L1, Mimetism (-3), NCO" 
    },
    {
        id_profilo: "taskmaster_redfury",
        nome: "Taskmaster",
        arma: "Red Fury, Crazykoala / Heavy Pistol, DA CC Weapon (PS=5)", 
        cc: 20, bs: 13, wip: 13, arm: 5, 
        skills: "Heavyweight, Courage, Kinematika L1, Mimetism (-3), NCO" 
    },

    // --- HOLLOW MEN ---
    {
        id_profilo: "hollowmen_combi",
        nome: "Hollow Men",
        arma: "Combi Rifle, Chain-colt, Pitcher / Breaker Pistol, CC Weapon", 
        cc: 15, bs: 13, wip: 13, arm: 3, 
        skills: "Courage, Super-Jump (Jet Propulsion)" 
    },
    {
        id_profilo: "hollowmen_ml",
        nome: "Hollow Men",
        arma: "Missile Launcher, Chain-colt / Breaker Pistol, CC Weapon", 
        cc: 15, bs: 13, wip: 13, arm: 3, 
        skills: "Courage, Super-Jump (Jet Propulsion)" 
    },

    // --- GECKO (TAG Leggero) ---
    {
        id_profilo: "gecko_combi",
        nome: "Gecko",
        arma: "2 Combi Rifles, Chain-colt / Heavy Pistol, CC Weapon", 
        cc: 17, bs: 13, wip: 13, arm: 5, 
        skills: "Courage, ECM: Hacker (-3), Heavyweight, Pilot" 
    },
    {
        id_profilo: "gecko_mk12",
        nome: "Gecko",
        arma: "Mk12, Chain-colt / Heavy Pistol, CC Weapon", 
        cc: 17, bs: 13, wip: 13, arm: 5, 
        skills: "Courage, ECM: Hacker (-3), Heavyweight, Pilot" 
    },

    // --- BANDIT ---
    {
        id_profilo: "bandit_bsg",
        nome: "Bandit",
        arma: "Boarding Shotgun, Adhesive Launcher / Pistol, DA CC Weapon (PS=6)", 
        cc: 22, bs: 11, wip: 13, arm: 1, 
        skills: "Camouflage, Infiltration, Martial Arts L2, Scavenger, Stealth, Terrain (Total)" 
    },
    {
        id_profilo: "bandit_combi",
        nome: "Bandit (Hacker)",
        arma: "Combi Rifle, Adhesive Launcher / Pistol, DA CC Weapon (PS=6)", 
        cc: 22, bs: 11, wip: 13, arm: 1, 
        skills: "Killer Hacking Device, Camouflage, Infiltration, Martial Arts L2, Scavenger, Stealth, Terrain (Total)" 
    },

    // --- WILDCAT ---
    {
        id_profilo: "wildcat_combi",
        nome: "Wildcat",
        arma: "Combi Rifle, Light Flamethrower, D-Charges / Pistol, CC Weapon", 
        cc: 15, bs: 13, wip: 13, arm: 2, 
        skills: "Courage, Immunity (Shock)" 
    },
    {
        id_profilo: "wildcat_hrl",
        nome: "Wildcat",
        arma: "Heavy Rocket Launcher, Light Flamethrower / Pistol, CC Weapon", 
        cc: 15, bs: 13, wip: 13, arm: 2, 
        skills: "Courage, Immunity (Shock)" 
    },

    // --- TOMCAT ---
    {
        id_profilo: "tomcat_doctor",
        nome: "Tomcat (Doctor)",
        arma: "Combi Rifle, Light Flamethrower | MediKit / Pistol, CC Weapon", 
        cc: 14, bs: 12, wip: 14, arm: 1, 
        skills: "Doctor, Climbing Plus, Courage, Parachutist" 
    },
    {
        id_profilo: "tomcat_engineer",
        nome: "Tomcat (Engineer)",
        arma: "Combi Rifle, Light Flamethrower, D-Charges / Pistol, CC Weapon", 
        cc: 14, bs: 12, wip: 14, arm: 1, 
        skills: "Engineer, Climbing Plus, Courage, Parachutist" 
    },

    // --- YUAN YUAN (Mercenario) ---
    {
        id_profilo: "yuanyuan_chain_da",
        nome: "Yuan Yuan",
        arma: "Chain Rifle, Smoke Grenades / Pistol, DA CC Weapon (PS=6)", 
        cc: 20, bs: 9, wip: 13, arm: 0, 
        skills: "Combat Jump, Impetuous, Martial Arts L3, Booty" 
    },
    {
        id_profilo: "yuanyuan_chain_ap",
        nome: "Yuan Yuan",
        arma: "Chain Rifle, Smoke Grenades / Pistol, AP CC Weapon (PS=6)", 
        cc: 20, bs: 9, wip: 13, arm: 0, 
        skills: "Combat Jump, Impetuous, Martial Arts L3, Booty" 
    }
];
const nomadsDatabase_Part4 = [
    // --- SWITCHER ---
    {
        id_profilo: "switcher_combi",
        nome: "Switcher",
        arma: "Combi Rifle, E/Mitter, Zapper / Pistol, Viral CC Weapon (PS=5)", 
        cc: 15, bs: 12, wip: 13, arm: 1, 
        skills: "Courage, Dogged, Tactical Awareness, Transmutation (WIP)" 
    },
    {
        id_profilo: "switcher_thunderbolt",
        nome: "Switcher",
        arma: "Thunderbolt, E/M Carbine, E/M Grenades / Pistol, Viral CC Weapon (PS=5)", 
        cc: 15, bs: 12, wip: 13, arm: 1, 
        skills: "BS Attack (+1B), Courage, Dogged, Tactical Awareness, Transmutation (WIP)" 
    },
    {
        id_profilo: "switcher_ap_smg",
        nome: "Switcher (Forward Observer)",
        arma: "AP Submachine Gun, Flash Pulse(+1B), E/M Grenades / Pistol, Viral CC Weapon (PS=5)", 
        cc: 15, bs: 12, wip: 13, arm: 1, 
        skills: "Forward Observer, Courage, Dogged, Tactical Awareness, Transmutation (WIP)" 
    },

    // --- TAG PILOTS ---
    {
        id_profilo: "gecko_pilot",
        nome: "Gecko Pilot",
        arma: "Combi Rifle | GizmoKit / Assault Pistol(+1B), CC Weapon", 
        cc: 13, bs: 11, wip: 13, arm: 1, 
        skills: "Specialist Operative, TAGCom" 
    },
    {
        id_profilo: "szalamandra_pilot",
        nome: "Szalamandra Pilot",
        arma: "Light Shotgun, Cybermine / Pistol, CC Weapon", 
        cc: 13, bs: 11, wip: 13, arm: 1, 
        skills: "Hacker, Killer Hacking Device, Specialist Operative, TAGCom" 
    },
    {
        id_profilo: "gator_pilot",
        nome: "Gator Pilot",
        arma: "Boarding Shotgun, D-Charges / Kobra Pistol, PARA CC Weapon(-6)", 
        cc: 13, bs: 11, wip: 13, arm: 1, 
        skills: "CC Attack (+9), Specialist Operative, TAGCom" 
    },

    // --- TRIGGERMEN ---
    {
        id_profilo: "triggermen_sniper",
        nome: "Triggermen",
        arma: "MULTI Sniper Rifle, E/Marat(+1B), Pulzar(+1B) / MULTI Pistol, CC Weapon(-3)", 
        cc: 17, bs: 13, wip: 13, arm: 4, 
        skills: "BS Attack (+1SD), CC Attack (+1B), Mimetism (-3), Regeneration (PH=14), Stealth, 360 Visor" 
    },
    {
        id_profilo: "triggermen_hrl",
        nome: "Triggermen",
        arma: "Heavy Rocket Launcher, AP Submachine Gun / MULTI Pistol, CC Weapon(-3)", 
        cc: 17, bs: 13, wip: 13, arm: 4, 
        skills: "BS Attack (+1SD), CC Attack (+1B), Mimetism (-3), Regeneration (PH=14), Stealth, 360 Visor" 
    },

    // --- DRUZE ---
    {
        id_profilo: "druze_combi",
        nome: "Druze",
        arma: "Combi Rifle, Chain-colt / Viral Pistol, CC Weapon", 
        cc: 16, bs: 12, wip: 13, arm: 1, 
        skills: "BS Attack (SR-1), Warhorse, X Visor" 
    },
    {
        id_profilo: "druze_hmg",
        nome: "Druze",
        arma: "Heavy Machine Gun, Chain-colt / Viral Pistol, CC Weapon", 
        cc: 16, bs: 12, wip: 13, arm: 1, 
        skills: "BS Attack (SR-1), Warhorse, X Visor" 
    },
    {
        id_profilo: "druze_shock",
        nome: "Druze",
        arma: "Shock Marksman Rifle, Chain-colt / Viral Pistol, CC Weapon", 
        cc: 16, bs: 12, wip: 13, arm: 1, 
        skills: "BS Attack (SR-1), Warhorse, X Visor" 
    },

    // --- SCARFACE & CORDELIA (Mercenaries) ---
    {
        id_profilo: "scarface_alpha",
        nome: "Scarface (TAG)",
        arma: "Mk12(+1B), Heavy Rocket Launcher(+1B) / DA CC Weapon (PS=4)", 
        cc: 22, bs: 13, wip: 13, arm: 7, 
        skills: "Berserk (+3), BS Attack (SR-1), CC Attack (-3), Courage, Tactical Awareness" 
    },
    {
        id_profilo: "scarface_gamma",
        nome: "Scarface (TAG)",
        arma: "AP Spitfire(+1B), Panzerfaust / DA CC Weapon (PS=4)", 
        cc: 22, bs: 13, wip: 13, arm: 7, 
        skills: "Berserk (+3), BS Attack (SR-1), CC Attack (-3), Courage, Tactical Awareness" 
    },
    {
        id_profilo: "cordelia_turner",
        nome: "Cordelia Turner",
        arma: "Combi Rifle, D-Charges, PARA Mine / Boarding Pistol, CC Weapon", 
        cc: 13, bs: 11, wip: 13, arm: 1, 
        skills: "Courage, Engineer, Mimetism (-3), Deactivator, GizmoKit" 
    },

    // --- ANACONDA (TAG) ---
    {
        id_profilo: "anaconda_spitfire",
        nome: "Anaconda (TAG)",
        arma: "AP Spitfire, Heavy Flamethrower(+1B), Thunderbolt(AP) / DA CC Weapon (PS=4)", 
        cc: 21, bs: 13, wip: 13, arm: 7, 
        skills: "BS Attack (SR-1), Courage, Immunity (AP), Tactical Awareness, Warhorse" 
    },
    {
        id_profilo: "anaconda_hmg",
        nome: "Anaconda (TAG)",
        arma: "Heavy Machine Gun, Light Shotgun(+2B), Panzerfaust / DA CC Weapon (PS=4)", 
        cc: 21, bs: 13, wip: 13, arm: 7, 
        skills: "BS Attack (SR-1), Courage, Immunity (AP), Tactical Awareness, Warhorse" 
    },

    // --- MONSTRUCKER ---
    {
        id_profilo: "monstrucker_smg",
        nome: "Monstrucker",
        arma: "Submachine Gun, Chain Rifle, Drop Bears / Pistol, CC Weapon", 
        cc: 16, bs: 11, wip: 13, arm: 1, 
        skills: "Climbing Plus, Engineer, Deactivator, GizmoKit" 
    },

    // --- HEROES & CHARACTERS ---
    {
        id_profilo: "saito_togan",
        nome: "Saito Togan",
        arma: "T2 Boarding Shotgun, Smoke Grenades / Pistol, EXP CC Weapon (PS=4)", 
        cc: 24, bs: 11, wip: 13, arm: 1, 
        skills: "Camouflage, Courage, Dodge (+1), Hidden Deployment, Infiltration, Martial Arts L4, Mimetism (-6), Stealth" 
    },
    {
        id_profilo: "mcmurrough",
        nome: "McMurrough",
        arma: "Chain Rifle(+1B), Grenades (PS=6), Smoke Grenades / AP+DA CC Weapon (PS=6)", 
        cc: 23, bs: 11, wip: 14, arm: 4, 
        skills: "Berserk, Courage, Dodge (+2), Dogged, Immunity (ARM), Impetuous, Martial Arts L2, No Cover, Super-Jump" 
    },
    {
        id_profilo: "spector",
        nome: "Spector",
        arma: "MULTI Rifle, Drop Bears(+1SD) / Boarding Pistol (PS=6), E/M CC Weapon (PS=6)", 
        cc: 22, bs: 12, wip: 13, arm: 2, 
        skills: "Courage, Dodge (+2), Martial Arts L3, Mimetism (-6), Natural Born Warrior, Specialist Operative, Stealth" 
    },
    {
        id_profilo: "armand_sniper",
        nome: "Armand",
        arma: "MULTI Sniper Rifle, Nanopulser, Shock Mine / Breaker Pistol(+1B), Viral CC Weapon (PS=7)", 
        cc: 21, bs: 13, wip: 13, arm: 2, 
        skills: "BS Attack (Shock), Forward Deployment (+4), Mimetism (-6), Natural Born Warrior, Stealth, Transmutation (1)" 
    },
    {
        id_profilo: "carmen",
        nome: "Carmen",
        arma: "Chain Rifle(+1B), Smoke Grenades, Smoke Grenade Launcher / AP Heavy Pistol(+1B), DA CC Weapon(PS=6)", 
        cc: 22, bs: 11, wip: 13, arm: 1, 
        skills: "Booty, CC Attack (-6), Courage, Dodge (+2), Dogged, Impetuous, Mimetism (-3), Natural Born Warrior" 
    }
];
const nomadsDatabase_Part5 = [
    // --- CATERAN ---
    {
        id_profilo: "cateran_t2",
        nome: "Cateran",
        arma: "T2 Sniper Rifle / Pistol, AP CC Weapon (PS=7)", 
        cc: 22, bs: 12, wip: 12, arm: 0, 
        skills: "Camouflage (1 Use), Climbing Plus, Mimetism (-3), Stealth, Surprise Attack (-3)" 
    },
    {
        id_profilo: "cateran_ap",
        nome: "Cateran",
        arma: "AP Sniper Rifle / Pistol, AP CC Weapon (PS=7)", 
        cc: 22, bs: 12, wip: 12, arm: 0, 
        skills: "Camouflage (1 Use), Climbing Plus, Mimetism (-3), Stealth, Surprise Attack (-3)" 
    },

    // --- CSU ---
    {
        id_profilo: "csu_breaker",
        nome: "CSU",
        arma: "Breaker Rifle, Nanopulser(+1B) / MULTI Pistol, PARA CC Weapon(-6)", 
        cc: 16, bs: 12, wip: 12, arm: 0, 
        skills: "MetaChemistry, Sixth Sense" 
    },
    {
        id_profilo: "csu_combi",
        nome: "CSU",
        arma: "Combi Rifle, Nanopulser(+1B) / MULTI Pistol, PARA CC Weapon(-6)", 
        cc: 16, bs: 12, wip: 12, arm: 0, 
        skills: "MetaChemistry, Sixth Sense" 
    },
    {
        id_profilo: "csu_bsg",
        nome: "CSU",
        arma: "Boarding Shotgun, Adhesive Launcher Rifle (+1B) / MULTI Pistol, PARA CC Weapon(-6)", 
        cc: 16, bs: 12, wip: 12, arm: 0, 
        skills: "MetaChemistry, Sixth Sense" 
    },

    // --- MIYAMOTO MUSHASHI ---
    {
        id_profilo: "miyamoto",
        nome: "Miyamoto Mushashi",
        arma: "Chain Rifle, Tactical Bow, Flash Pulse / Pistol, EXP CC Weapon (PS=4)", 
        cc: 25, bs: 9, wip: 15, arm: 1, 
        skills: "CC Attack (AP), Courage, Dodge (+2), Immunity (ARM), Martial Arts L5, NWI, Stealth" 
    },

    // --- BASHI BAZOUK ---
    {
        id_profilo: "bashi_contender",
        nome: "Bashi Bazouk",
        arma: "Contender(+1B) / Boarding Pistol(+1B), CC Weapon", 
        cc: 16, bs: 11, wip: 12, arm: 0, 
        skills: "Holomask, Holoprojector, Combat Jump, Parachutist, Surprise Attack (-3)" 
    },
    {
        id_profilo: "bashi_t2",
        nome: "Bashi Bazouk",
        arma: "T2 Boarding Shotgun / Boarding Pistol(+1B), CC Weapon", 
        cc: 16, bs: 11, wip: 12, arm: 0, 
        skills: "Holomask, Holoprojector, Combat Jump, Parachutist, Surprise Attack (-3)" 
    },

    // --- SEÑOR MASSACRE ---
    {
        id_profilo: "massacre_breaker",
        nome: "Señor Massacre",
        arma: "Breaker Combi Rifle, Eclipse Grenades, E/M Grenades / Boarding Pistol, Shock CC Weapon (PS=5), E/M CC Weapon (PS=5)", 
        cc: 24, bs: 12, wip: 13, arm: 2, 
        skills: "Courage, Dodge (+2), Immunity (Shock), Martial Arts L3, Regeneration, Stealth" 
    },
    {
        id_profilo: "massacre_bsg",
        nome: "Señor Massacre",
        arma: "Boarding Shotgun(+1B), E/M Grenades, Eclipse Grenades / Boarding Pistol, Shock CC Weapon (PS=5), E/M CC Weapon (PS=5)", 
        cc: 24, bs: 12, wip: 13, arm: 2, 
        skills: "Courage, Dodge (+2), Immunity (Shock), Martial Arts L3, Regeneration, Stealth" 
    },

    // --- MOTORIZED YOJIMBO ---
    {
        id_profilo: "motorized_yojimbo",
        nome: "Motorized Yojimbo",
        arma: "Contender(+1B), Nanopulser, Smoke Grenades, Smoke Grenade Launcher, Crazykoala / Pistol, DA CC Weapon (PS=3)", 
        cc: 24, bs: 12, wip: 13, arm: 1, 
        skills: "Motorcycle, Courage, Dodge (+2), Immunity (Critical), Martial Arts L4, Mimetism (-3), NWI" 
    },

    // --- SFORZA ---
    {
        id_profilo: "sforza",
        nome: "Sforza",
        arma: "Viral Rifle, Adhesive Launcher Rifle(+1B), Nanopulser / Heavy Pistol(+1B), PARA CC Weapon(-9)", 
        cc: 19, bs: 13, wip: 13, arm: 2, 
        skills: "Holomask, X Visor, Combat Instinct, Dogged, Immunity (ARM), Stealth" 
    },

    // --- VALERYA GROMOZ ---
    {
        id_profilo: "valerya",
        nome: "Valerya Gromoz (Hacker)",
        arma: "Combi Rifle, Zapper, Pitcher / Pistol, CC Weapon", 
        cc: 15, bs: 11, wip: 14, arm: 1, 
        skills: "Hacking Device (Total Control +1B)" 
    },

    // --- AVICENNA ---
    {
        id_profilo: "avicenna",
        nome: "Avicenna",
        arma: "Combi Rifle, Flash Pulse, Nanopulser / Pistol, CC Weapon", 
        cc: 16, bs: 11, wip: 15, arm: 3, 
        skills: "Doctor (+3), Courage, Immunity (ARM), NWI" 
    },

    // --- KNAUF ---
    {
        id_profilo: "knauf",
        nome: "Knauf",
        arma: "MULTI Sniper Rifle / AP Heavy Pistol, CC Weapon", 
        cc: 21, bs: 13, wip: 13, arm: 1, 
        skills: "MSV L1, BS Attack (+1B), BS Attack (Shock), Courage, Mimetism (-3), Stealth" 
    },

    // --- AÏDA SWANSON ---
    {
        id_profilo: "aida",
        nome: "Aïda Swanson",
        arma: "Submachine Gun(+1B), Viral Mine / Viral Pistol, Shock CC Weapon", 
        cc: 19, bs: 12, wip: 13, arm: 1, 
        skills: "Booty, Courage, Forward Deployment (+4), Martial Arts L2, Mimetism (-3), Shasvastii, Stealth" 
    },

    // --- LIBERTO ---
    {
        id_profilo: "liberto_smg",
        nome: "Liberto",
        arma: "Submachine Gun, Chain-colt / Pistol, CC Weapon", 
        cc: 16, bs: 11, wip: 12, arm: 0, 
        skills: "Camouflage (1 Use), Courage, Dodge (+3), Dogged, Forward Deployment (+8)" 
    },
    {
        id_profilo: "liberto_lsg",
        nome: "Liberto",
        arma: "Light Shotgun, Shock Mine / Pistol, CC Weapon", 
        cc: 16, bs: 11, wip: 12, arm: 0, 
        skills: "Camouflage (1 Use), Courage, Dodge (+3), Dogged, Forward Deployment (+8)" 
    },

    // --- VALKYRIE ---
    {
        id_profilo: "valkyrie_hsg",
        nome: "Valkyrie",
        arma: "Heavy Shotgun, Grenades / Heavy Pistol, EXP CC Weapon (PS=5)", 
        cc: 22, bs: 12, wip: 13, arm: 3, 
        skills: "Berserk (+3), Dodge (+2), Frenzy, Immunity (Enhanced), Martial Arts L3, NWI" 
    },
    {
        id_profilo: "valkyrie_multi",
        nome: "Valkyrie",
        arma: "MULTI Rifle, Grenades / Heavy Pistol, EXP CC Weapon (PS=5)", 
        cc: 22, bs: 12, wip: 13, arm: 3, 
        skills: "Berserk (+3), Dodge (+2), Frenzy, Immunity (Enhanced), Martial Arts L3, NWI" 
    },

    // --- KAPLAN ---
    {
        id_profilo: "kaplan_combi",
        nome: "Kaplan",
        arma: "Combi Rifle, Adhesive Launcher Rifle, D-Charges / Boarding Pistol, CC Weapon", 
        cc: 15, bs: 12, wip: 14, arm: 2, 
        skills: "Combat Instinct, Courage, Immunity (Shock), Mimetism (-3)" 
    },
    {
        id_profilo: "kaplan_spitfire",
        nome: "Kaplan",
        arma: "Spitfire / Boarding Pistol, CC Weapon", 
        cc: 15, bs: 12, wip: 14, arm: 2, 
        skills: "Combat Instinct, Courage, Immunity (Shock), Mimetism (-3)" 
    },

    // --- LAXMEE ---
    {
        id_profilo: "laxmee",
        nome: "Laxmee (Hacker)",
        arma: "Submachine Gun, Pitcher, Cybermine, D-Charges / Pistol, CC Weapon", 
        cc: 18, bs: 11, wip: 14, arm: 2, 
        skills: "Hacking Device Plus, Mimetism (-3), Minelayer" 
    },

    // --- WARDRIVER ---
    {
        id_profilo: "wardriver",
        nome: "Wardriver (Hacker)",
        arma: "Boarding Shotgun, Flash Pulse, Cybermine / Pistol, CC Weapon", 
        cc: 13, bs: 11, wip: 13, arm: 0, 
        skills: "Hacking Device (Zero Pain), Sixth Sense" 
    },

    // --- HANNIBAL ---
    {
        id_profilo: "hannibal_vulkan",
        nome: "Hannibal",
        arma: "Vulkan Shotgun, Nanopulser(+1B), Flash Pulse / Breaker Pistol, CC Weapon", 
        cc: 15, bs: 13, wip: 14, arm: 2, 
        skills: "BS Attack (+1SD), Counterintelligence, Courage, Dodge (+3), NWI, Tactical Awareness" 
    },

    // --- WILD BILL ---
    {
        id_profilo: "wildbill_contender",
        nome: "Wild Bill",
        arma: "Contender / MULTI Pistol(+1B), CC Weapon", 
        cc: 15, bs: 13, wip: 13, arm: 1, 
        skills: "BS Attack (SR-1), Courage, Dodge (+3), Marksmanship, NWI" 
    },

    // --- MIRANDA ASHCROFT ---
    {
        id_profilo: "miranda_multi",
        nome: "Miranda Ashcroft",
        arma: "MULTI Rifle, PARA Mine / Boarding Pistol, Monofilament CC Weapon", 
        cc: 19, bs: 12, wip: 13, arm: 1, 
        skills: "CC Attack (-6), Marksmanship, Mimetism (-6), Stealth" 
    },

    // --- KRAKOT RENEGADE ---
    {
        id_profilo: "krakot_chain",
        nome: "Krakot Renegade",
        arma: "Chain Rifle, Chest Mine, Grenades / Heavy Pistol, DA CC Weapon (PS=6)", 
        cc: 23, bs: 11, wip: 12, arm: 1, 
        skills: "Berserk (+3), Dodge (+2), Forward Deployment (+4), MetaChemistry, Super-Jump" 
    },

    // --- CUBE JÄGER ---
    {
        id_profilo: "cube_jager",
        nome: "Cube Jäger",
        arma: "Submachine Gun, E/Mitter / Pistol, Monofilament CC Weapon", 
        cc: 16, bs: 13, wip: 14, arm: 1, 
        skills: "Immunity (Shock), Parachutist, Stealth" 
    },

    // --- MAJOR LUNAH ---
    {
        id_profilo: "lunah",
        nome: "Major Lunah",
        arma: "VIRAL Sniper Rifle / Boarding Pistol, CC Weapon", 
        cc: 16, bs: 11, wip: 13, arm: 1, 
        skills: "MSV L1, BS Attack (SR-1), Camouflage (1 Use), Mimetism (-3)" 
    },

    // --- LIANG KAI ---
    {
        id_profilo: "liang_kai",
        nome: "Liang Kai",
        arma: "Chain Rifle, Light Shotgun, Flash Pulse / Pistol, EXP CC Weapon (PS=4)", 
        cc: 23, bs: 11, wip: 14, arm: 1, 
        skills: "Berserk, Dodge (+1), Dodge (+3), Martial Arts L4, Mimetism (-3), NWI, Super-Jump" 
    },

    // --- SHONA CARANO ---
    {
        id_profilo: "shona",
        nome: "Shona Carano",
        arma: "Submachine Gun, Nanopulser(+1B), Flash Pulse / Pistol, Shock CC Weapon (PS=6)", 
        cc: 23, bs: 11, wip: 13, arm: 2, 
        skills: "Courage, Dodge (+3), Dodge (+2), Frenzy, Martial Arts L4, NWI, Super-Jump" 
    },

    // --- HAWKWOOD ---
    {
        id_profilo: "hawkwood_k1",
        nome: "Hawkwood",
        arma: "K1 Sniper Rifle, Nanopulser(+1B) / MULTI Pistol, DA CC Weapon (PS=7)", 
        cc: 22, bs: 13, wip: 14, arm: 3, 
        skills: "BS Attack (+1SD), Courage, Martial Arts L1, Mimetism (-3), NWI" 
    }
];
const nomadsDatabase_Part6 = [
    // --- MOTORIZED BOUNTY HUNTER ---
    {
        id_profilo: "motorized_bh_bsg",
        nome: "Motorized Bounty Hunter",
        arma: "Boarding Shotgun, Heavy Riotstopper / Pistol, PARA CC Weapon(-6)", 
        cc: 17, bs: 12, wip: 13, arm: 1, 
        skills: "Booty (ReRoll), Dodge (+2), Impetuous, Limited Cover, Mimetism (-3), Motorcycle" 
    },
    {
        id_profilo: "motorized_bh_smg",
        nome: "Motorized Bounty Hunter",
        arma: "Submachine Gun, Chain-colt(+1B) / Pistol, PARA CC Weapon(-6)", 
        cc: 17, bs: 12, wip: 13, arm: 1, 
        skills: "Booty (ReRoll), Dodge (+2), Impetuous, Limited Cover, Mimetism (-3), Motorcycle" 
    },
    {
        id_profilo: "motorized_bh_redfury",
        nome: "Motorized Bounty Hunter",
        arma: "Red Fury / Breaker Pistol, PARA CC Weapon(-6)", 
        cc: 17, bs: 12, wip: 13, arm: 1, 
        skills: "Booty (ReRoll), Dodge (+2), Impetuous, Limited Cover, Mimetism (-3), Motorcycle" 
    },

    // --- DIGGER ---
    {
        id_profilo: "digger_rifle",
        nome: "Digger",
        arma: "Rifle, Light Shotgun, Grenades / Pistol, AP CC Weapon (PS=6)", 
        cc: 21, bs: 11, wip: 12, arm: 2, 
        skills: "Booty, CC Attack (+1B), Courage, Dodge (+1), Impetuous, Natural Born Warrior, No Cover, Transmutation (1)" 
    },
    {
        id_profilo: "digger_chain",
        nome: "Digger",
        arma: "Chain Rifle(+1B), Grenades / Pistol, AP CC Weapon (PS=6)", 
        cc: 21, bs: 11, wip: 12, arm: 2, 
        skills: "Booty, CC Attack (+1B), Courage, Dodge (+1), Impetuous, Natural Born Warrior, No Cover, Transmutation (1)" 
    },

    // --- TRIPHAMMER (TAG Mercenario) ---
    {
        id_profilo: "triphammer_spitfire",
        nome: "Triphammer (TAG)",
        arma: "AP Spitfire, Heavy Flamethrower / AP CC Weapon (PS=4)", 
        cc: 17, bs: 13, wip: 12, arm: 7, 
        skills: "Booty, BS Attack (SR-1), CC Attack (Antimaterial), Dodge (PH=9), Gizmokit (PH=10), Tactical Awareness, Transmutation (2)" 
    },
    {
        id_profilo: "triphammer_chain",
        nome: "Triphammer (TAG)",
        arma: "AP Spitfire, Chain-colt(+1B) / AP CC Weapon (PS=4)", 
        cc: 17, bs: 13, wip: 12, arm: 7, 
        skills: "Booty, BS Attack (SR-1), CC Attack (Antimaterial), Dodge (PH=9), Gizmokit (PH=10), Tactical Awareness, Transmutation (2)" 
    },
    {
        id_profilo: "triphammer_hsg",
        nome: "Triphammer (TAG)",
        arma: "Heavy Shotgun, Thunderbolt(+1B) / AP CC Weapon (PS=4)", 
        cc: 17, bs: 13, wip: 12, arm: 7, 
        skills: "Booty, BS Attack (SR-1), CC Attack (Antimaterial), Dodge (PH=9), Gizmokit (PH=10), Tactical Awareness, Transmutation (2)" 
    },
    {
        id_profilo: "triphammer_hrl",
        nome: "Triphammer (TAG)",
        arma: "Heavy Shotgun, Heavy Rocket Launcher, Panzerfaust(+1B) / AP CC Weapon (PS=4)", 
        cc: 17, bs: 13, wip: 12, arm: 7, 
        skills: "Booty, BS Attack (SR-1), CC Attack (Antimaterial), Dodge (PH=9), Gizmokit (PH=10), Tactical Awareness, Transmutation (2)" 
    },

    // --- TURTLEMEK (Drone di supporto) ---
    {
        id_profilo: "turtlemek",
        nome: "TurtleMek",
        arma: "Nessuna", 
        cc: 10, bs: 0, wip: 12, arm: 0, 
        skills: "Courage, Dodge (+3), Mimetism (-3), Peripheral (Ancillary), Specialist Operative" 
    },

    // --- BEASTHUNTERS ---
    {
        id_profilo: "beasthunter_panzerfaust",
        nome: "Beasthunter",
        arma: "Heavy Flamethrower, Panzerfaust, AP Mine / Pistol, DA CC Weapon(PS=5)", 
        cc: 21, bs: 11, wip: 12, arm: 0, 
        skills: "Surprise Attack (-3), Camouflage, Forward Deployment (+8), Mimetism (-3), Religious Troop, Stealth, Super-Jump, Terrain (Total)" 
    },
    {
        id_profilo: "beasthunter_bow",
        nome: "Beasthunter",
        arma: "Heavy Flamethrower, Tactical Bow, AP Mine / Pistol, DA CC Weapon(PS=5)", 
        cc: 21, bs: 11, wip: 12, arm: 0, 
        skills: "Surprise Attack (-3), Camouflage, Forward Deployment (+8), Mimetism (-3), Religious Troop, Stealth, Super-Jump, Terrain (Total)" 
    },

    // --- SAMSA ---
    {
        id_profilo: "samsa",
        nome: "Samsa",
        arma: "Plasma Rifle, D-Charges / Pistol, CC Weapon", 
        cc: 15, bs: 13, wip: 13, arm: 1, 
        skills: "Decoy (1), Dodge (+1), Exrah, Infiltration, Mimetism (-3), Specialist Operative, Super-Jump, Surprise Attack (-3)" 
    },

    // --- YOJIMBO ---
    {
        id_profilo: "yojimbo",
        nome: "Yojimbo",
        arma: "Contender(+1B), Nanopulser, Smoke Grenades, Crazykoala / Pistol, DA CC Weapon(PS=3)", 
        cc: 24, bs: 12, wip: 13, arm: 1, 
        skills: "Courage, Dodge (+1), Immunity (Critical), Martial Arts L4, Minelayer, No Cover, No Wound Incapacitation, Stealth" 
    }
];

// --- UNIONE FINALE DEL DATABASE ---
// Inserisci questa riga alla fine del file per unire tutti i 6 blocchi in un unico grande array
const masterNomadsDatabase = [
    ...nomadsDatabase_Part1,
    ...nomadsDatabase_Part2,
    ...nomadsDatabase_Part3,
    ...nomadsDatabase_Part4,
    ...nomadsDatabase_Part5,
    ...nomadsDatabase_Part6
];

// Esportazione per poterlo leggere nell'App
window.masterNomadsDatabase = masterNomadsDatabase;
