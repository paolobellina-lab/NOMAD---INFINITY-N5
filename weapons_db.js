window.masterWeaponsDatabase = {
    "COMBI RIFLE": { burst: 3, dam: "13", ammo: "Normal", attr: "BS", bands: [ { label: "0-16\"", mod: 3 }, { label: "16-32\"", mod: -3 }, { label: "32-48\"", mod: -6 } ] },
    "MULTI RIFLE": { burst: 3, dam: "13", ammo: "AP / Shock", attr: "BS", bands: [ { label: "0-16\"", mod: 3 }, { label: "16-32\"", mod: -3 }, { label: "32-48\"", mod: -6 } ] },
    "HMG": { burst: 4, dam: "15", ammo: "Normal", attr: "BS", bands: [ { label: "0-8\"", mod: -3 }, { label: "8-16\"", mod: 0 }, { label: "16-32\"", mod: 3 }, { label: "32-48\"", mod: -3 } ] },
    "BOARDING SHOTGUN": { burst: 2, dam: "14", ammo: "AP", attr: "BS", bands: [ { label: "0-8\"", mod: 3 }, { label: "8-16\"", mod: 0 }, { label: "16-24\"", mod: -3 } ] },
    "MULTI SNIPER RIFLE": { burst: 2, dam: "15", ammo: "DA / AP", attr: "BS", bands: [ { label: "0-16\"", mod: -3 }, { label: "16-48\"", mod: 3 }, { label: "48-96\"", mod: -3 } ] },
    "GRENADES": { burst: 1, dam: "13", ammo: "Normal", attr: "PH", bands: [ { label: "0-8\"", mod: 3 }, { label: "8-16\"", mod: -3 }, { label: "16-24\"", mod: -6 } ] }, // Usa PH invece di BS!
    "DEFAULT": { burst: 1, dam: "N/A", ammo: "Normal", attr: "BS", bands: [ { label: "0-8\"", mod: 3 }, { label: "8-16\"", mod: 0 }, { label: "16-32\"", mod: -3 } ] }
};
