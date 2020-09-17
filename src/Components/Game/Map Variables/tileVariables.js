const ll = {tileType: "wall", elevation: 10}

export const tileVariables = {
    o: {tileType: "empty", elevation: 0, color: "sienna"},
    x: {tileType: "chest", elevation: 0, level: 1, color: ""},
    ll: {tileType: "wall", elevation: 10, color: ""},
    zz: {tileType: "exit", elevation: 0, color: ""},
    wl: [ll, ll, ll, ll, ll, ll, ll, ll, ll],
    // m: {tileType: "monster", elevation: 0, level: 1, color: ""},
    p: {tileType: "empty", pushable: true, elevation: 0, color: ""},
    pk: {tileType: "cliff", pushable: true, elevation: 3, color: ""},
    w: {tileType: "water", elevation: 0, color: ""},
    Q: {tileType: "quicksand", elevation: 0, color: ""},
    F: {tileType: "lava", elevation: 0, color: ""},
    uT: {tileType: "uneven", elevation: 0, color: ""},
    MI: {tileType: "empty", mist: true, elevation: 0, color: ""},
    h: {tileType: "empty", hidden: true, elevation: 0, color: ""},
    mi: {tileType: "monster", mist: true, elevation: 0, color: ""},
    MX: {tileType: "chest", mist: true, elevation: 0, color: ""},
    hc: {tileType: "chest", hidden: true, elevation: 0, color: ""},
    Cl: {tileType: "cliff", elevation: 3, color: ""},
    Pl: {tileType: "platform", elevation: 2, color: ""},
    PP: {tileType: "platform", pushable: true, elevation: 2, color: ""},
    G: {tileType: "gold-pile", elevation: 0, level: 1, color: ""},
    WL: [ll, ll, ll, ll, ll, ll, ll, ll, ll, ll],
    hp: {tileType: "empty", hidden: true, pushable: true, elevation: 0, color: ""}
}

export const treasureChests = {
    xt: {tileType: "chest", elevation: 0, level: 0},
     x: {tileType: "chest", elevation: 0, level: 1},
    x2: {tileType: "chest", elevation: 0, level: 2},
    x3: {tileType: "chest", elevation: 0, level: 3},
    x4: {tileType: "chest", elevation: 0, level: 4},
    x5: {tileType: "chest", elevation: 0, level: 5},

     X: {tileType: "chest", elevation: 1, level: 1},
    X2: {tileType: "chest", elevation: 1, level: 2},
    X3: {tileType: "chest", elevation: 1, level: 3},
    X4: {tileType: "chest", elevation: 1, level: 4},
    X5: {tileType: "chest", elevation: 1, level: 5},

    X6: {tileType: "chest", elevation: 3, level: 1},
    X7: {tileType: "chest", elevation: 3, level: 2},
    X8: {tileType: "chest", elevation: 3, level: 3},
    X9: {tileType: "chest", elevation: 3, level: 4},
    XX: {tileType: "chest", elevation: 3, level: 5},
}

export const keys = {
    k1: {tileType: "empty", elevation: 0, level: 1, itemObject: "door-key", name: "Bronze Key", code: "k1"},
    k2: {tileType: "platform", elevation: 1, level: 1, itemObject: "door-key", door: []},
    k3: {tileType: "cliff", elevation: 3, level: 1, itemObject: "door-key", door: []},
    // k4: {tileType: "empty", elevation: 0, level: 1, item: "quest-key", door: []},
    // k5: {tileType: "empty", elevation: 0, level: 1, item: "quest-key", door: []},
}

export const doors = {
    d1: {tileType: "locked-door", elevation: 0, key: "k1"},
    d2: {tileType: "locked-door", elevation: 1, key: "k1"},
    d3: {tileType: "locked-door", elevation: 2, key: "k1"},
    d4: {tileType: "unlocked-door", elevation: 1, key: "k1"},
    d5: {tileType: "unlocked-door", elevation: 2, key: "k1"},
    d6: {tileType: "unlocked-door", elevation: 3, key: "k1"},

}

export const teleporters = {
    t1: {tileType: "teleporter-1", end: [11, 30], elevation: 0},
    t2: {tileType: "teleporter-1", end: [17, 33], elevation: 0},
    t3: {tileType: "teleporter-1", end: [39, 12], elevation: 0},
    t4: {tileType: "teleporter-4", end: [15, 42], elevation: 0},
    t5: {tileType: "teleporter-5", end: [15, 42], elevation: 0},
}

export const monsters = {
     m: {tileType: "monster", elevation: 0, level: 1},
    m2: {tileType: "monster", elevation: 0, level: 2},
    m3: {tileType: "monster", elevation: 0, level: 3},
    m4: {tileType: "monster", elevation: 0, level: 4},
    m5: {tileType: "monster", elevation: 0, level: 5},

     M: {tileType: "monster", elevation: 1, level: 1},
    M2: {tileType: "monster", elevation: 1, level: 2},
    M3: {tileType: "monster", elevation: 1, level: 3},
    M4: {tileType: "monster", elevation: 1, level: 4},
    M5: {tileType: "monster", elevation: 1, level: 5},

    M6: {tileType: "monster", elevation: 3, level: 1},
    M7: {tileType: "monster", elevation: 3, level: 2},
    M8: {tileType: "monster", elevation: 3, level: 3},
    M9: {tileType: "monster", elevation: 3, level: 4},
    MM: {tileType: "monster", elevation: 3, level: 5},
}

export const visionTiles = {
    lt: {tileType: "lookout", elevation: 0},
    lT: {tileType: "lookout", elevation: 1},
    LT: {tileType: "lookout", elevation: 3},
    HT: {tileType: "lookout-hidden-door", elevation: 0, area: []},
    hd: {tileType: "hidden-door", elevation: 0},
}
