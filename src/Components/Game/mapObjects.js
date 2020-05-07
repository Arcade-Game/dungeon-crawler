const h = {type: "hero", explored: false}
const o = {type: "empty", explored: false}
const x = {type: "chest", explored: false}
const l = {type: "wall", explored: false}
const z = {type: "exit", explored: false}
const w = [l, l, l, l, l, l, l, l, l]
const r = {type: "monster", explored: false}

export const mapObjects = [
    [l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l],
    [l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l],
    [l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l],
    [l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l],
    [l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l],
    [l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l],
    [l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l],
    [l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l],
    [l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l],
    [...w, o, o, o, o, o, o, o, o, o, o, o, o, o, o, z, ...w],
    [...w, o, o, l, l, o, o, l, l, l, l, l, l, l, o, o, ...w],
    [...w, o, l, l, l, x, x, x, x, o, o, o, o, o, o, o, ...w],
    [...w, o, o, l, l, x, x, x, x, o, o, o, o, o, o, o, ...w],
    [...w, o, o, o, o, o, r, o, o, l, l, l, o, l, l, l, ...w],
    [...w, o, o, o, o, o, l, o, l, o, o, o, l, o, o, o, ...w],
    [...w, o, o, o, l, l, o, l, o, o, o, o, o, o, o, o, ...w],
    [...w, o, o, l, o, o, o, o, o, o, o, o, o, o, o, o, ...w],
    [...w, o, o, l, o, l, l, l, l, l, l, l, o, o, o, o, ...w],
    [...w, o, o, l, o, l, o, o, o, o, o, o, l, o, o, o, ...w],
    [...w, o, o, x, o, l, o, l, l, l, x, o, l, o, o, o, ...w],
    [...w, x, o, x, o, l, o, o, o, o, l, o, l, o, r, o, ...w],
    [...w, l, o, o, o, l, r, o, o, o, l, o, l, o, o, l, ...w],
    [...w, l, l, o, o, l, l, o, o, o, l, o, o, o, l, l, ...w],
    [l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,o,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l],
    [l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,o,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l],
    [l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,o,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l],
    [l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,o,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l],
    [l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l],
    [l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l],
    [l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l],
    [l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l],
    [l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l],
    [l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l]



                            ]

