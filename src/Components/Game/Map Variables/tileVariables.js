const ll = {type: "wall", elevation: 10}

export const tileVariables = {
    o: {type: "empty", elevation: 0},
    x: {type: "chest", elevation: 0, level: 1},
    ll: {type: "wall", elevation: 10},
    zz: {type: "exit", elevation: 0},
    wl: [ll, ll, ll, ll, ll, ll, ll, ll, ll],
    m: {type: "monster", elevation: 0},
    p: {type: "empty", pushable: true, elevation: 0},
    pk: {type: "cliff", pushable: true, elevation: 3},
    w: {type: "water", elevation: 0},
    Q: {type: "quicksand", elevation: 0},
    F: {type: "lava", elevation: 0},
    hd: {type: "hiddenDoor", elevation: 0},
    lt: {type: "lookout", elevation: 0},
    uT: {type: "uneven", elevation: 0},
    MI: {type: "empty", mist: true, elevation: 0},
    h: {type: "empty", hidden: true, elevation: 0},
    mi: {type: "monster", mist: true, elevation: 0},
    MX: {type: "chest", mist: true, elevation: 0},
    hc: {type: "chest", hidden: true, elevation: 0},
    Cl: {type: "cliff", elevation: 3},
    Pl: {type: "platform", elevation: 2},
    PP: {type: "platform", pushable: true, elevation: 2},
    T: {type: "teleporter-1", end: [15, 42], elevation: 0},
    G: {type: "gold-pile", level: 0, level: 1},
    WL: [ll, ll, ll, ll, ll, ll, ll, ll, ll, ll]
}

export const treasureChests = {
    xt: {type: "chest", elevation: 0, level: 0},
     x: {type: "chest", elevation: 0, level: 1},
    x2: {type: "chest", elevation: 0, level: 2},
    x3: {type: "chest", elevation: 0, level: 3},
    x4: {type: "chest", elevation: 0, level: 4},
    x5: {type: "chest", elevation: 0, level: 5},

     X: {type: "chest", elevation: 1, level: 1},
    X2: {type: "chest", elevation: 1, level: 2},
    X3: {type: "chest", elevation: 1, level: 3},
    X4: {type: "chest", elevation: 1, level: 4},
    X5: {type: "chest", elevation: 1, level: 5},

    X6: {type: "chest", elevation: 3, level: 1},
    X7: {type: "chest", elevation: 3, level: 2},
    X8: {type: "chest", elevation: 3, level: 3},
    X9: {type: "chest", elevation: 3, level: 4},
    XX: {type: "chest", elevation: 3, level: 5},
}



export const monsters = {
     m: {type: "monster", elevation: 0, level: 1},
    m2: {type: "monster", elevation: 0, level: 2},
    m3: {type: "monster", elevation: 0, level: 3},
    m4: {type: "monster", elevation: 0, level: 4},
    m5: {type: "monster", elevation: 0, level: 5},

     M: {type: "monster", elevation: 1, level: 1},
    M2: {type: "monster", elevation: 1, level: 2},
    M3: {type: "monster", elevation: 1, level: 3},
    M4: {type: "monster", elevation: 1, level: 4},
    M5: {type: "monster", elevation: 1, level: 5},

    M6: {type: "monster", elevation: 3, level: 1},
    M7: {type: "monster", elevation: 3, level: 2},
    M8: {type: "monster", elevation: 3, level: 3},
    M9: {type: "monster", elevation: 3, level: 4},
    MM: {type: "monster", elevation: 3, level: 5},
}


export const questItems = {
    k1: {type: "empty", elevation: 0, level: 1, item: "quest-key", door: []},
    k2: {type: "empty", elevation: 1, level: 1, item: "quest-key", door: []},
    k3: {type: "empty", elevation: 3, level: 1, item: "quest-key", door: []},
    k4: {type: "empty", elevation: 0, level: 1, item: "quest-key", door: []},
    k5: {type: "empty", elevation: 0, level: 1, item: "quest-key", door: []},
}