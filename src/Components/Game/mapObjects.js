const h = {type: "hero", explored: false}
const o = {type: "empty", explored: false}
const x = {type: "chest", explored: false}
const l = {type: "wall", explored: false}
const z = {type: "exit", explored: false}
const w = [l, l, l, l, l, l, l, l, l]
const r = {type: "monster", explored: false}
const p = {type: "pushable", explored: false}
const a = {type: "water", explored: false}
const q = {type: "quicksand", explored: false}
const m = {type: "lava", explored: false}

export const mapObjects3 = [
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
    [...w, o, q, q, o, o, r, o, o, l, l, l, o, l, l, l, ...w],
    [...w, o, q, q, o, o, l, o, l, o, o, o, l, o, o, o, ...w],
    [...w, o, q, q, l, l, o, l, o, o, o, o, o, o, o, o, ...w],
    [...w, o, q, q, o, o, o, o, o, o, o, o, o, o, o, o, ...w],
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
    [l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,o,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l],
    [l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l],
    [l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l],
    [l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l],
    [l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l],
    [l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l],
    [l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l]



                            ]


    export const mapObjects = [
            [...w, l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,...w],
            [...w, l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,...w],
            [...w, l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,...w],
            [...w, l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,...w],
            [...w, l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,...w],
            [...w, l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,...w],
            [...w, l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,...w],
            [...w, l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,...w],
            [...w, l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,...w],
            [...w, z,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,l,o,o,o,o,z,o,l,x,x,x,x,x,...w],
            [...w, o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,l,o,o,o,o,o,o,o,l,x,l,l,l,r,...w],
            [...w, o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,l,l,l,l,l,l,l,l,l,o,o,o,o,o,o,o,l,l,x,l,o,r,r,...w],
            [...w, o,o,o,o,o,o,o,p,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,l,l,x,x,x,l,r,...w],
            [...w, o,o,o,o,o,o,m,o,o,o,o,o,o,o,o,o,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,o,l,l,l,l,o,o,...w],
            [...w, o,o,o,o,o,p,o,p,m,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,l,o,o,l,l,l,x,o,...w],
            [...w, o,o,o,p,q,q,q,o,o,m,o,o,o,o,o,o,l,l,l,l,l,l,l,l,l,l,l,l,l,o,o,l,o,o,l,l,l,r,...w],
            [...w, o,o,o,o,q,o,p,o,o,o,m,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,l,o,o,o,l,o,...w],
            [...w, o,o,o,o,q,q,q,q,p,o,m,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,l,l,o,l,o,l,o,l,o,...w],
            [...w, o,o,o,o,q,q,q,q,o,o,m,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,l,o,o,o,l,l,o,l,o,l,o,...w],
            [...w, o,o,o,o,q,q,q,q,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,l,o,r,o,l,o,l,o,...w],
            [...w, o,o,o,o,o,o,o,o,o,o,o,o,o,o,l,o,l,o,o,o,o,o,o,o,o,l,l,o,o,l,o,o,x,l,l,o,l,o,...w],
            [...w, o,o,o,o,o,o,o,o,l,o,o,o,o,o,l,r,l,o,o,o,o,o,o,o,o,l,l,o,o,o,o,o,l,o,o,o,l,o,...w],
            [...w, o,o,o,o,o,o,o,l,l,o,o,o,o,l,o,o,o,l,o,o,o,o,o,o,o,l,l,o,o,o,o,o,l,o,l,l,l,r,...w],
            [...w, o,o,o,o,o,o,l,l,l,o,o,o,o,l,o,l,o,o,l,l,o,o,o,o,o,l,l,o,o,o,o,l,o,o,r,r,r,o,...w],
            [...w, o,o,o,o,o,l,l,l,o,o,l,o,o,l,o,l,o,o,o,o,l,o,l,l,l,l,l,l,l,l,l,l,o,r,l,l,l,r,...w],
            [...w, o,o,o,o,l,l,l,o,o,l,o,o,l,o,o,l,o,l,o,o,o,l,o,o,o,o,o,o,o,o,o,o,l,o,o,x,l,o,...w],
            [...w, o,o,o,l,l,l,o,o,l,o,o,l,o,o,l,o,o,l,l,l,o,o,o,o,o,l,l,l,l,l,l,o,r,o,x,o,l,o,...w],
            [...w, o,o,o,l,l,o,o,l,o,o,l,o,o,l,o,o,l,o,x,x,l,o,o,o,l,o,o,o,o,o,o,l,l,x,o,o,l,o,...w],
            [...w, o,o,o,o,o,o,o,o,o,l,o,o,l,o,o,l,r,o,o,l,l,l,l,l,o,o,o,o,o,o,o,o,o,l,l,l,l,o,...w],
            [...w, l,l,l,l,l,l,l,o,o,l,o,l,l,o,l,o,o,l,l,l,l,l,o,o,o,o,l,o,o,l,o,o,l,o,o,o,l,o,...w],
            [...w, o,o,o,o,o,o,o,o,o,l,o,l,l,o,o,o,l,l,l,l,o,o,o,l,l,l,o,l,o,l,o,o,o,r,l,o,l,o,...w],
            [...w, o,o,o,o,o,o,l,o,o,l,o,l,l,l,o,o,o,o,o,o,o,o,l,o,o,o,o,o,o,o,l,o,o,l,o,o,l,o,...w],
            [...w, o,o,l,o,o,o,l,o,o,r,o,l,l,l,l,l,l,l,l,l,l,o,o,o,l,o,l,l,l,o,o,l,l,o,o,l,l,o,...w],
            [...w, l,a,l,r,l,l,l,l,l,l,l,l,l,o,o,o,o,o,o,o,o,l,o,o,o,l,o,o,o,l,o,o,o,o,l,l,l,o,...w],
            [...w, l,o,l,o,o,o,l,l,o,o,o,l,l,o,o,l,l,o,l,l,o,o,l,o,o,o,o,l,o,l,o,l,o,l,l,l,l,o,...w],
            [...w, o,p,o,o,l,o,l,l,o,l,o,l,l,o,o,l,l,o,o,o,l,o,l,l,l,o,o,l,o,l,r,l,o,l,l,l,l,o,...w],
            [...w, o,o,o,o,l,o,o,l,o,l,o,l,o,r,o,o,l,l,l,o,l,o,o,o,o,o,o,o,o,l,x,l,o,l,l,l,l,o,...w],
            [...w, l,o,o,o,o,o,m,o,o,l,o,o,o,o,l,o,o,o,l,o,l,o,o,l,l,o,r,l,l,l,l,l,o,l,l,l,l,o,...w],
            [...w, l,l,l,l,o,o,o,o,o,l,l,l,o,l,l,o,l,o,o,o,l,l,l,o,o,l,x,l,l,l,l,l,o,l,l,l,l,o,...w],
            [...w, l,l,l,l,m,o,p,l,l,q,q,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,o,l,l,l,o,o,...w],
            [...w, l,l,l,l,l,m,o,l,q,q,q,q,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,o,o,o,l,o,l,...w],
            [...w, l,l,l,l,l,l,o,q,q,q,q,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,o,l,o,l,...w],
            [...w, l,l,l,l,l,l,o,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,o,o,o,l,...w],
            [...w, l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,...w],
            [...w, l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,...w],
            [...w, l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,...w],
            [...w, l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,...w],
            [...w, l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,...w],
            [...w, l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,...w],
            [...w, l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,...w],
            [...w, l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,...w],
            [...w, l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,...w],
            [...w, l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,...w]

    ]





    export const mapObjects2 = [

        [o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,z,o,l,x,x,x,x,x],
        [o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,l,x,x,x,x,r],
        [o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,l,l,x,x,x,r,r],
        [o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,l,l,x,x,x,l,r],
        [o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,l,l,l,l,o,o],
        [o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,l,l,l,x,o],
        [o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,l,l,l,r],
        [o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,l,o],
        [o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,l,o],
        [o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,l,o],
        [o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,l,o],
        [o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,l,o],
        [o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,l,o],
        [o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,l,r],
        [o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,r,o],
        [o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,l,r],
        [o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,l,o],
        [o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,l,o],
        [o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,l,o],
        [o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,l,o],
        [l,l,l,l,l,l,l,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,l,o],
        [o,o,o,o,o,o,o,o,o,o,o,l,l,l,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,l,o],
        [o,o,o,o,o,o,l,o,o,o,o,l,l,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,l,o],
        [o,o,l,o,o,o,l,o,o,o,o,l,l,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,l,o],
        [o,o,l,r,l,l,l,l,l,l,l,l,l,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,l,o],
        [o,o,l,o,o,o,l,l,o,o,o,l,l,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o],
        [o,o,o,o,l,o,l,l,o,l,o,l,l,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o],
        [o,o,o,o,l,o,l,l,o,l,o,l,o,r,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,l],
        [l,o,o,o,o,o,o,o,o,l,o,o,o,o,l,o,o,o,o,o,o,o,o,o,o,o,o,l,l,l,l,l,l,l,l,l,l,l],
        [l,l,l,l,o,o,"S",o,o,l,l,l,o,l,l,o,o,o,o,o,o,o,o,o,o,l,l,l,l,l,l,l,l,l,l,l,l]

    ]

