const h = {type: "hero"}
const o = {type: "empty"}
const x = {type: "chest"}
const l = {type: "wall"}
const z = {type: "exit"}
const w = [l, l, l, l, l, l, l, l, l]

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
    [...w, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, ...w],
    [...w, o, o, l, l, o, o, l, l, l, l, l, l, l, o, o, ...w],
    [...w, o, l, l, l, o, o, o, o, o, o, o, o, o, o, o, ...w],
    [...w, o, o, l, l, o, o, o, o, o, o, o, o, o, o, o, ...w],
    [...w, o, o, o, o, o, o, o, o, l, l, l, o, l, l, l, ...w],
    [...w, o, o, o, o, o, l, o, l, o, o, o, l, o, o, o, ...w],
    [...w, o, o, o, l, l, o, l, o, o, o, o, o, o, o, o, ...w],
    [...w, o, o, l, o, o, o, o, o, o, o, o, o, o, o, o, ...w],
    [...w, o, o, l, o, l, l, l, l, l, l, l, o, o, o, o, ...w],
    [...w, o, o, l, o, l, o, o, o, o, o, o, l, o, o, o, ...w],
    [...w, o, o, x, o, l, o, l, l, l, x, o, l, o, o, o, ...w],
    [...w, x, o, x, o, l, o, o, o, o, l, o, l, o, o, o, ...w],
    [...w, x, o, o, o, o, l, o, o, o, l, o, l, o, o, o, ...w],
    [...w, x, o, o, o, l, o, l, h, o, l, o, o, o, o, o, ...w],
    [l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l],
    [l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l],
    [l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l],
    [l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l],
    [l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l],
    [l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l],
    [l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l],
    [l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l],
    [l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l]



                    ]

