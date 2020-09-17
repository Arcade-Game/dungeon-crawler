const ll = {tileType: "empty", elevation: 10}

export const elevationVariables = [
    {title: "wall", modifier: {elevation: 10}},
    {title: "cliff", modifier: {elevation: 3}},
    {title: "platform", modifier: {elevation: 1}},
    {title: "ground", modifier: {elevation: 0}},
    
    
]

export const terrainVariables = [
    {title: "lava", modifier: {tileType: "lava"}},
    {title: "quicksand", modifier: {tileType: "quicksand"}},
    {title: "uneven", modifier: {tileType: "uneven"}},
    {title: "water", modifier: {tileType: "water"}},
    {title: "push-bridge", modifier: {tileType: "push-bridge"}},
    {title: "clear", modifier: {tileType: "empty"}},
]

export const objectVariables = [
    {title: "pushable", modifier: {objType: "pushable"}},
    {title: "chest", modifier: {objType: "chest"}},
    {title: "gold-pile", modifier: {objType: "gold-pile"}},
    {title: "delete", modifier: {objType: null}},
    {title: "start"},
    {title: "exit", modifier: {objType: "exit"}},
]

export const monsterVariables = [
    {title: "monster", modifier: {objType: "monster"}},
]

// export const tileVariables = {


//     o: {tileType: "empty", elevation: 0, color: "sienna"},
//     x: {tileType: "empty", objType: "chest", elevation: 0, level: 1, color: ""},
//     ll: {tileType: "empty", elevation: 10, color: ""},
//     zz: {tileType: "empty", objType: "exit", elevation: 0, color: ""},
//     wl: [ll, ll, ll, ll, ll, ll, ll, ll, ll],
//     // m: {tileType: "monster", elevation: 0, level: 1, color: ""},
//     p: {tileType: "empty", objType: "pushable", elevation: 0, color: ""},
//     pk: {tileType: "empty", objType: "pushable", elevation: 3, color: ""},
//     w: {tileType: "water", elevation: 0, color: ""},
//     Q: {tileType: "quicksand", elevation: 0, color: ""},
//     F: {tileType: "lava", elevation: 0, color: ""},
//     uT: {tileType: "uneven", elevation: 0, color: ""},
//     MI: {tileType: "empty", mist: true, elevation: 0, color: ""},
//     h: {tileType: "empty", hidden: true, elevation: 0, color: ""},
//     mi: {tileType: "empty", objType: "monster", mist: true, elevation: 0, color: ""},
//     MX: {tileType: "empty", objType: "chest", mist: true, elevation: 0, color: ""},
//     hc: {tileType: "empty", objType: "chest", hidden: true, elevation: 0, color: ""},
//     Cl: {tileType: "empty", elevation: 3, color: ""}, // Cliff
//     Pl: {tileType: "empty", elevation: 1, color: ""}, // Platform
//     PP: {tileType: "empty", objType: "pushable", elevation: 0, color: ""},
//     G: {tileType: "empty", objType: "gold-pile", elevation: 0, level: 1, color: ""},
//     WL: [ll, ll, ll, ll, ll, ll, ll, ll, ll, ll],
//     hp: {tileType: "empty", hidden: true, objType: "pushable", elevation: 0, color: ""}
// }

// export const treasureChests = {
//     xt: {tileType: "empty", objType: "chest", elevation: 0, level: 0},
//      x: {tileType: "empty", objType: "chest", elevation: 0, level: 1},
//     x2: {tileType: "empty", objType: "chest", elevation: 0, level: 2},
//     x3: {tileType: "empty", objType: "chest", elevation: 0, level: 3},
//     x4: {tileType: "empty", objType: "chest", elevation: 0, level: 4},
//     x5: {tileType: "empty", objType: "chest", elevation: 0, level: 5},

//      X: {tileType: "empty", objType: "chest", elevation: 1, level: 1},
//     X2: {tileType: "empty", objType: "chest", elevation: 1, level: 2},
//     X3: {tileType: "empty", objType: "chest", elevation: 1, level: 3},
//     X4: {tileType: "empty", objType: "chest", elevation: 1, level: 4},
//     X5: {tileType: "empty", objType: "chest", elevation: 1, level: 5},

//     X6: {tileType: "empty", objType: "chest", elevation: 3, level: 1},
//     X7: {tileType: "empty", objType: "chest", elevation: 3, level: 2},
//     X8: {tileType: "empty", objType: "chest", elevation: 3, level: 3},
//     X9: {tileType: "empty", objType: "chest", elevation: 3, level: 4},
//     XX: {tileType: "empty", objType: "chest", elevation: 3, level: 5},
// }

// export const keys = {
//     k1: {tileType: "empty", elevation: 0, level: 1, objType: "door-key", name: "Bronze Key", code: "k1"},
//     k2: {tileType: "empty", elevation: 1, level: 1, objType: "door-key", door: []},
//     k3: {tileType: "empty", elevation: 3, level: 1, objType: "door-key", door: []},
//     // k4: {tileType: "empty", elevation: 0, level: 1, item: "quest-key", door: []},
//     // k5: {tileType: "empty", elevation: 0, level: 1, item: "quest-key", door: []},
// }

// export const doors = {
//     d1: {tileType: "empty", objType: "locked-door", elevation: 0, key: "k1"},
//     d2: {tileType: "empty", objType: "locked-door", elevation: 1, key: "k1"},
//     d3: {tileType: "empty", objType: "locked-door", elevation: 2, key: "k1"},
//     d4: {tileType: "empty", objType: "unlocked-door", elevation: 1, key: "k1"},
//     d5: {tileType: "empty", objType: "unlocked-door", elevation: 2, key: "k1"},
//     d6: {tileType: "empty", objType: "unlocked-door", elevation: 3, key: "k1"},

// }

// export const teleporters = {
//     t1: {tileType: "empty", objType: "teleporter-1", end: [11, 30], elevation: 0},
//     t2: {tileType: "empty", objType: "teleporter-1", end: [17, 33], elevation: 0},
//     t3: {tileType: "empty", objType: "teleporter-1", end: [39, 12], elevation: 0},
//     t4: {tileType: "empty", objType: "teleporter-4", end: [15, 42], elevation: 0},
//     t5: {tileType: "empty", objType: "teleporter-5", end: [15, 42], elevation: 0},
// }

// export const monsters = {
//      m: {tileType: "empty", objType: "monster", elevation: 0, level: 1},
//     m2: {tileType: "empty", objType: "monster", elevation: 0, level: 2},
//     m3: {tileType: "empty", objType: "monster", elevation: 0, level: 3},
//     m4: {tileType: "empty", objType: "monster", elevation: 0, level: 4},
//     m5: {tileType: "empty", objType: "monster", elevation: 0, level: 5},

//      M: {tileType: "empty", objType: "monster", elevation: 1, level: 1},
//     M2: {tileType: "empty", objType: "monster", elevation: 1, level: 2},
//     M3: {tileType: "empty", objType: "monster", elevation: 1, level: 3},
//     M4: {tileType: "empty", objType: "monster", elevation: 1, level: 4},
//     M5: {tileType: "empty", objType: "monster", elevation: 1, level: 5},

//     M6: {tileType: "empty", objType: "monster", elevation: 3, level: 1},
//     M7: {tileType: "empty", objType: "monster", elevation: 3, level: 2},
//     M8: {tileType: "empty", objType: "monster", elevation: 3, level: 3},
//     M9: {tileType: "empty", objType: "monster", elevation: 3, level: 4},
//     MM: {tileType: "empty", objType: "monster", elevation: 3, level: 5},
// }

// export const visionTiles = {
//     lt: {tileType: "empty", objType: "lookout", elevation: 0},
//     lT: {tileType: "empty", objType: "lookout", elevation: 1},
//     LT: {tileType: "empty", objType: "lookout", elevation: 3},
//     HT: {tileType: "empty", objType: "lookout-hidden-door", elevation: 0, area: []},
//     hd: {tileType: "empty", objType: "hidden-door", elevation: 0},
// }
