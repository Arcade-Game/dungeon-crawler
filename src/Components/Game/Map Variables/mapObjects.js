import {tileVariables, treasureChests, monsters, keys, visionTiles} from './tileVariables';

const {o, ll, zz, wl, p, pk, w, Q, F, uT, MI, h, mi, MX, hc, Cl, Pl, PP, T, G, WL} = tileVariables;
const {x, x2, x3, x4, x5, X, X2, X3, X4, X5, X6, X7, X8, X9, XX} = treasureChests;
const {m, m2, m3, m4, m5, M, M2, M3, M4, M5, M6, M7, M8, M9, MM} = monsters;
const {hd, lt} = visionTiles;


export const mapObject = {    
    mapX: 27,
    mapY: "mapArray.length-10",
    mapArray: [
        [...wl, ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,...wl],
        [...wl, ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,...wl],
        [...wl, ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,...wl],
        [...wl, ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,...wl],
        [...wl, ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,...wl],
        [...wl, ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,...wl],
        [...wl, ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,...wl],
        [...wl, ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,...wl],
        [...wl, ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,...wl],
        [...wl, zz, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o,ll, o, o, o, o,zz, o,ll, x, x, x, x, x,...wl],
        [...wl,  o, o, o, o, w,Cl,Cl, o,uT, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o,ll, o, o, o, o, o, o, o,ll, x,ll,ll,ll, m,...wl],
        [...wl, Cl, o, o,uT,Cl,Cl,Cl, o, o, o, o, o, o, o, o,ll,ll,ll,ll,ll,ll,ll,ll,ll, o, o, o, o, o, o, o,ll,ll, x,ll, o, m, m,...wl],
        [...wl, Cl, p,Pl, p,Cl, o,pk, p, w, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o,ll,ll, x, x, x,ll, m,...wl],
        [...wl, Cl,uT, o, Q, o, o, F, o, o, o, o, o, o, o, o, o,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll, o,ll,ll,ll,ll, o, o,...wl],
        [...wl, Cl, p, o, o, o, p, o, p, F, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o,ll, o, o,ll,ll,ll, x, o,...wl],
        [...wl, pk, o, o, p, Q, Q, Q, o, o, w, o, o, o, o, o, o,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll, o, o,ll, o, o,ll,ll,ll, m,...wl],
        [...wl, Cl, o, o, T, Q, o, p, o, p, o, F, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o,ll, o, o, o,ll, o,...wl],
        [...wl, Pl,Pl,Pl, p, Q, Q, Q, Q, p, o, F, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o,ll,ll, o,ll, o,ll, o,ll, o,...wl],
        [...wl,  o, o,Pl, o, Q, Q, Q, Q, o, o, F, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o,ll, o, o, o,ll,ll, o,ll, o,ll, o,...wl],
        [...wl, Cl,pk,PP, o, Q, Q, Q, Q, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o,ll, o, m, o,ll, o,ll, o,...wl],
        [...wl, Cl,Cl,Pl, o, o, o, o, o, o, o, o, o, o, o,ll, o,ll, o, o, o, o, o, o, o, o,ll,ll, o, o,ll, o, o, x,ll,ll, o,ll, o,...wl],
        [...wl, Cl,Cl,Cl,Cl,Cl,Cl,Cl, p,ll, o, o, o, o, o,ll, m,ll, o, o, o, o, o, o, o, o,ll,ll, o, o, o, o, o,ll, o, o, o,ll, o,...wl],
        [...wl,  o,Cl,pk,pk,pk,pk,pk,Pl,ll, o, o, o, o,ll, o, o, o,ll, o, o, o, o, o, o, o,ll,ll, o, o, o, o, o,ll, o,ll,ll,ll, m,...wl],
        [...wl,  o,Cl, F, w,uT, Q, T, o,ll, o, o, o, o,ll, o,ll, o, o,ll,ll, o, o, o, o, o,ll,ll, o, o, o, o,ll, o, o, m, m, m, o,...wl],
        [...wl, Cl,Cl,pk,pk,pk,pk,pk, o, o, o,ll, o, o,ll, o,ll, o, o, o, o,ll, o,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll, o, m,ll,ll,ll, m,...wl],
        [...wl,  o,Cl,Cl,Cl,Cl,Cl,Cl, o, o,ll, o, o,ll, o, o,ll, o,ll, o, o, o,ll, o, o, o, o, o, o, o, o, o, o,ll, o, o, x,ll, o,...wl],
        [...wl,  o, o, o,ll,ll,ll, o, o,ll, o, o,ll, o, o,ll, o, o,ll,ll,ll, o, o, o, o, o,ll,ll,ll,ll,ll,ll, o, m, o, x, o,ll, o,...wl],
        [...wl,  o, o, o,ll,ll, o, o,ll, o, o,ll, o, o,ll, o, o,ll, o, x, x,ll, o, o, o,ll, o, o, o, o, o, o,ll,ll, x, o, o,ll, o,...wl],
        [...wl,  o, o, o, o, o, o, o, o, o,ll, o, o,ll, o, o,ll, m, o, o,ll,ll,ll,ll,ll, o, o, o, o, o, o, o, o, o,ll,ll,ll,ll, o,...wl],
        [...wl, ll,ll,ll,ll,ll,ll,ll, o, o,ll, o,ll,ll, o,ll, o, o,ll,ll,ll,ll,ll, o, o, o, o,ll, o, o,ll, o, o,ll, o, o, o,ll, o,...wl],
        [...wl,  o, o, o, o, o, o, o, o, o,ll, o,ll,ll, o, o, o,ll,ll,ll,ll,Cl,Cl,Cl,ll,ll,ll, o, m, o,ll, o, o, o, m,ll, o,ll, o,...wl],
        [...wl,  o, o, o, o, o, o,ll, o, o,ll, o,ll,ll,ll,Cl,Cl,Cl,Cl,Cl,Cl,Cl,Cl,ll, w, w, w, o, o, o, o,ll, o, o,ll, o, o,ll, o,...wl],
        [...wl,  h, h,ll, o, o, o,ll, o, o, m, o,ll,ll,ll,Cl,Cl,Cl,Cl,Cl,Cl,Cl,Cl,Cl, w,ll, G, o, o, o, o, o,ll,ll, o, o,ll,ll, o,...wl],
        [...wl, ll, h,ll, m,ll,ll,ll,ll,lt,ll,ll,ll,ll,Cl,Cl,Cl,Cl,Cl,Cl,Cl,Cl,Cl, o, w, o, o, m,Cl,Cl,ll, o, o, o, o,ll,ll,ll, o,...wl],
        [...wl, ll, h,ll, o, o, o,ll,ll, o, o, o,ll,ll, o, o,Cl,Cl,Cl,Cl,Cl,Cl, o, o, p,ll,ll, G, G,Cl,ll, o,ll, o,ll,ll,ll,ll, o,...wl],
        [...wl,  h, h, o, o,ll, o,ll,ll, o,ll, o,ll,ll, o, o, o, o,Cl,Cl,Cl, o, o, o, o, o,Cl, G, x,Cl,ll, m,ll, o,ll,ll,ll,ll, o,...wl],
        [...wl,  h, h, h, h,hd, o, o,ll, o,ll, o,ll, o, m, o, o, o, w, x, w, o, G, G, o,Cl,Cl,Cl,Cl,Cl,ll, x,ll, o,ll,ll,ll,ll, o,...wl],
        [...wl, ll, h, h, h, o, o, F, o, o,ll, o, o, o, o, o, o, o, o, m, o, o, F, F, o,Cl,Cl,Cl,ll,ll,ll,ll,ll, o,ll,ll,ll,ll, o,...wl],
        [...wl, ll,ll,ll,ll, o, o, o, o, o,ll,ll,ll, o, o, o, o, o, o, o, o, F, F, F, F,Cl,pk,Cl,ll,ll,ll,ll,ll, o,ll,ll,ll,ll, o,...wl],
        [...wl, ll,ll,ll,ll, F, o, F, h,ll, h, h,ll,mi,MI, F, F, G, o, o, F, F, F, F, o,Cl,Cl,ll,ll,ll,ll,ll,ll, o,ll,ll,ll, o, o,...wl],
        [...wl, ll,ll,ll,ll,ll,Cl,pk, w, h, h, h,MI,MI, F, F, F,ll,ll, o,ll, F, F,ll, o,ll,ll,ll,ll,ll,ll,ll,ll, o, o, o,ll, o,ll,...wl],
        [...wl, ll,ll,ll,ll,ll,ll, o,hd, h,MI,MI,MI,MX, F, F,ll,ll,ll, o,ll,ll,ll,ll, o,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll, o,ll, o,ll,...wl],
        [...wl, ll,ll,ll,ll,ll,ll, o,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll, o, o, o,ll,ll,ll, o,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll, o, o, o,ll,...wl],
        [...wl, ll,ll,ll,ll,ll,ll, o,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll, o, o, o,ll,ll,ll, o, o, o, o, o, o, o, o, o, o, o, o,ll,ll,ll,...wl],
        [...wl, ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll, o, o, o,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,...wl],
        [...wl, ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,...wl],
        [...wl, ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,...wl],
        [...wl, ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,...wl],
        [...wl, ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,...wl],
        [...wl, ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,...wl],
        [...wl, ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,...wl],
        [...wl, ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,...wl],
        [...wl, ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,...wl]

]}


    export const mapObjects3 = [
        [ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll],
        [ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll],
        [ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll],
        [ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll],
        [ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll],
        [ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll],
        [ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll],
        [ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll],
        [ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll],
        [...wl, o, o, o, o, o, o, o, o, o, o, o, o, o, o, zz, ...wl],
        [...wl, o, o, ll, ll, o, o, ll, ll, ll, ll, ll, ll, ll, o, o, ...wl],
        [...wl, o, ll, ll, ll, x, x, x, x, o, o, o, o, o, o, o, ...wl],
        [...wl, o, o, ll, ll, x, x, x, x, o, o, o, o, o, o, o, ...wl],
        [...wl, o, Q, Q, o, o, m, o, o, ll, ll, ll, o, ll, ll, ll, ...wl],
        [...wl, o, Q, Q, o, o, ll, o, ll, o, o, o, ll, o, o, o, ...wl],
        [...wl, o, Q, Q, ll, ll, o, ll, o, o, o, o, o, o, o, o, ...wl],
        [...wl, o, Q, Q, o, o, o, o, o, o, o, o, o, o, o, o, ...wl],
        [...wl, o, o, ll, o, ll, ll, ll, ll, ll, ll, ll, o, o, o, o, ...wl],
        [...wl, o, o, ll, o, ll, o, o, o, o, o, o, ll, o, o, o, ...wl],
        [...wl, o, o, x, o, ll, o, ll, ll, ll, x, o, ll, o, o, o, ...wl],
        [...wl, x, o, x, o, ll, o, o, o, o, ll, o, ll, o, m, o, ...wl],
        [...wl, ll, o, o, o, ll, m, o, o, o, ll, o, ll, o, o, ll, ...wl],
        [...wl, ll, ll, o, o, ll, ll, o, o, o, ll, o, o, o, ll, ll, ...wl],
        [ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll, o,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll],
        [ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll, o,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll],
        [ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll, o,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll],
        [ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll, o,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll],
        [ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll, o,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll],
        [ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll],
        [ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll],
        [ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll],
        [ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll],
        [ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll],
        [ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll]
    
    
    
                                ]
    
