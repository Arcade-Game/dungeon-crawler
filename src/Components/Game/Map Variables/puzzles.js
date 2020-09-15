import {tileVariables, treasureChests, monsters, visionTiles, doors, keys, teleporters} from './tileVariables';
import axios from 'axios';


// Tile variables. Each variable represents a different tile type with different properties.

const {o, ll, zz, p, pk, w, Q, F, MI, h, Cl, Pl, PP, G, WL, hp} = tileVariables; 
const {xt, x, x2, x5, X6, X8} = treasureChests; 
const {m, m2, m3, m4, m5, M6} = monsters; 
const {hd, lt} = visionTiles;
const {k3} = keys;
const {d1} = doors;
const {t1, t2, t3} = teleporters

    export const seedPuzzle = { // Blank seed map.
        mapX: 27,
        mapY: "mapArray.length-10",
        mapArray:[
        [...WL, ...WL, ...WL, ...WL],
        [...WL, ...WL, ...WL, ...WL],
        [...WL, ...WL, ...WL, ...WL],
        [...WL, ...WL, ...WL, ...WL],
        [...WL, ...WL, ...WL, ...WL],
        [...WL, ...WL, ...WL, ...WL],
        [...WL, ...WL, ...WL, ...WL],
        [...WL, ...WL, ...WL, ...WL],
        [...WL, ...WL, ...WL, ...WL],
        [...WL, ...WL, ...WL, ...WL],






        [...WL,               o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o,                ...WL],
        [...WL,               o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o,                ...WL],
        [...WL,               o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o,                ...WL],
        [...WL,               o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o,                ...WL],
        [...WL,               o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o,                ...WL],
        [...WL,               o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o,                ...WL],
        [...WL,               o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o,                ...WL],
        [...WL,               o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o,                ...WL],
        [...WL,               o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o,                ...WL],
        [...WL,               o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o,                ...WL],
        [...WL,               o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o,                ...WL],
        [...WL,               o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o,                ...WL],
        [...WL,               o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o,                ...WL],
        [...WL,               o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o,                ...WL],
        [...WL,               o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o,                ...WL],
        [...WL,               o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o,                ...WL],
        [...WL,               o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o,                ...WL],
        [...WL,               o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o,                ...WL],
        [...WL,               o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o,                ...WL],
        [...WL,               o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o,                ...WL],






        [...WL, ...WL, ...WL, ...WL],
        [...WL, ...WL, ...WL, ...WL],
        [...WL, ...WL, ...WL, ...WL],
        [...WL, ...WL, ...WL, ...WL],
        [...WL, ...WL, ...WL, ...WL],
        [...WL, ...WL, ...WL, ...WL],
        [...WL, ...WL, ...WL, ...WL],
        [...WL, ...WL, ...WL, ...WL],
        [...WL, ...WL, ...WL, ...WL],
        [...WL, ...WL, ...WL, ...WL]]
    }

    export const puzzles = [ // Array with tutorial map, demo map, and level one.
        { // Tutorial Map
            mapX: 13,
            mapY: 29,
            mapArray:[
            [...WL, ...WL, ...WL, ...WL],
            [...WL, ...WL, ...WL, ...WL],
            [...WL, ...WL, ...WL, ...WL],
            [...WL, ...WL, ...WL, ...WL],
            [...WL, ...WL, ...WL, ...WL],
            [...WL, ...WL, ...WL, ...WL],
            [...WL, ...WL, ...WL, ...WL],
            [...WL, ...WL, ...WL, ...WL],
            [...WL, ...WL, ...WL, ...WL],
            [...WL, ...WL, ...WL, ...WL],
        
        
        
        
        
        
            [...WL,              ll,ll,ll,ll,zz,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,                ...WL],
            [...WL,              ll,Cl,Cl,Cl,Cl,Cl,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,                ...WL],
            [...WL,              ll,Cl,Cl,Cl,Cl,Cl,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,                ...WL],
            [...WL,               o, o, o, o, o, o, o, o, o, m, x,ll, h, h, h, h, h, h, h, h,                ...WL],
            [...WL,               o, o, o, o, o,ll,ll,ll, o,Cl, G,ll, h, h, h, h, h, h, h, h,                ...WL],
            [...WL,               o,Pl, o, o,ll, o, o, o,Cl,Cl,Cl,ll, h, h, h, h, h, h, h, h,                ...WL],
            [...WL,               o, o, o, o, w, o, p, o,Cl,Cl,Cl,ll, h, h, h, h, h, h, h, h,                ...WL],
            [...WL,               o, o, o, o, w, o, p, o,Cl,Cl,Cl,ll, h, h, h, h, h, h, h, h,                ...WL],
            [...WL,               o, o,pk,Cl,Cl, o, o, o,Cl,Cl,Cl,ll, h, h, h, h, h, h, h, h,                ...WL],
            [...WL,              ll,Cl,Cl,Cl,Cl,Cl,Cl,Cl,Cl,Cl,Cl,ll, h, h, h, h, h, h, h, h,                ...WL],
            [...WL,              ll, o, o, o, o, o, p, o,ll,ll,ll,ll, h, h, h, h, h, h, h, h,                ...WL],
            [...WL,              ll,ll,Cl,Cl, o, o, o, o,ll,ll,ll,ll, h, h, h, h, h, h, h, h,                ...WL],
            [...WL,              ll,Cl,pk,Cl, m,Pl, o, o, p, F, o,ll, h, h, h, h, h, h, h, h,                ...WL],
            [...WL,              ll,Cl,ll,ll, o, o, o, o, F, F,xt,ll, h, h, h, h, h, h, h, h,                ...WL],
            [...WL,              ll,Cl,Cl,Cl, o, o, o, o, F, p, o,ll, h, h, h, h, h, h, h, h,                ...WL],
            [...WL,              ll,Cl,Cl,ll,ll,ll,ll,ll,ll,ll,ll,ll, h, h, h, h, h, h, h, h,                ...WL],
            [...WL,              ll,Cl,Cl,Cl,Cl,Cl,Cl,Cl,Cl,Cl,Cl,ll, h, h, h, h, h, h, h, h,                ...WL],
            [...WL,               o, o, o, p, o, o, o, m, o, o, o,ll, h, h, h, h, h, h, h, h,                ...WL],
            [...WL,               o, o, o, o, o, o, o,Pl, o, o, o,ll, h, h, h, h, h, h, h, h,                ...WL],
            [...WL,               o, o, o, o, o, o, o, o, o, o, o,hd, h, h, h, h, h, h, h, h,                ...WL],
        
        
        
        
        
        
            [...WL, ...WL, ...WL, ...WL],
            [...WL, ...WL, ...WL, ...WL],
            [...WL, ...WL, ...WL, ...WL],
            [...WL, ...WL, ...WL, ...WL],
            [...WL, ...WL, ...WL, ...WL],
            [...WL, ...WL, ...WL, ...WL],
            [...WL, ...WL, ...WL, ...WL],
            [...WL, ...WL, ...WL, ...WL],
            [...WL, ...WL, ...WL, ...WL],
            [...WL, ...WL, ...WL, ...WL]]
        },
        { // Level one
            mapX: 20,
            mapY: "mapArray.length-11",
            mapArray:[
            [...WL, ...WL, ...WL, ...WL],
            [...WL, ...WL, ...WL, ...WL],
            [...WL, ...WL, ...WL, ...WL],
            [...WL, ...WL, ...WL, ...WL],
            [...WL, ...WL, ...WL, ...WL],
            [...WL, ...WL, ...WL, ...WL],
            [...WL, ...WL, ...WL, ...WL],
            [...WL, ...WL, ...WL, ...WL],
            [...WL, ...WL, ...WL, ...WL],
            [...WL, ...WL, ...WL, ...WL],
    
    
    
    
    
            [...WL,              ll, o, o, o, o,Pl, o, o,ll,ll,ll,ll, o, o,ll, o, o, o, o, o,                ...WL],
            [...WL,              ll, o,pk,Cl,Cl, o, o, o, o, o, o, o, o, o,ll, o, o, o, o, o,                ...WL],
            [...WL,              ll, o,Cl,Cl,Cl, o, o, o, o, o, o, o, o, o,ll, o, o, o, o, o,                ...WL],
            [...WL,              ll, o,Cl,Cl,Cl, o, o,Cl,Cl,Cl,Cl,Cl, o,ll,ll, o, o, o, o, o,                ...WL],
            [...WL,              ll, o,Cl,Cl,k3,Cl,Cl, F, F, o, o, o, o,ll,ll, o, o, o, o, o,                ...WL],
            [...WL,              ll, o, o,Cl,Cl,Cl, Q, Q, Q, o, F, o, o, o,ll, o, o, o, o, o,                ...WL],
            [...WL,               o, o, o, o,Cl,Cl, Q, m, Q, F, F, p, o,ll,ll, o, o, o, o, o,                ...WL],
            [...WL,               o, o, o, o, o,ll, Q, Q, Q, Q, o, o,ll,ll,ll, o, o, o, o, o,                ...WL],
            [...WL,              ll, o, o,ll, p, o, Q, Q, Q,ll,ll, G,ll,ll,ll, o, o, o, o, o,                ...WL],
            [...WL,              ll, o, o, o, o,ll, Q,ll, m, o, G,ll,ll,ll,ll,ll,ll, o, o, o,                ...WL],
            [...WL,              ll,ll,ll,ll, w,ll, Q, o,ll, G, G, x,ll, o, o, o,ll,zz, o, o,                ...WL],
            [...WL,              ll, o, Q, Q, w, Q, Q,ll, o,ll,ll,ll, o, o, o, o,ll, o, o, o,                ...WL],
            [...WL,              ll,ll, o, o, o,ll,ll, o, o, o, o, o, o, o, o, o, o, o, o, o,                ...WL],
            [...WL,              ll, o, o, o, p, o, o, o,lt, o, o, o, o, o, o, o,ll, o, o, o,                ...WL],
            [...WL,              ll,ll,ll,ll, o, o, o, o, o, o, o, o, o, o, o, o,ll, o,ll, o,                ...WL],
            [...WL,              ll, o, o, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, o, o,                ...WL],
            [...WL,              ll,ll, o, o, o, o, o, o, o, o, h, h, h, h, h, h, h, p,ll, o,                ...WL],
            [...WL,              ll, o, o,ll,ll, o, o, o, m,ll,ll,ll,ll,ll,ll,ll, h, h,ll, o,                ...WL],
            [...WL,              ll, o, Q,Cl,Cl,ll,ll,ll, w,pk,Cl,ll, o,ll, G, x,ll,ll, o, o,                ...WL],
            [...WL,              ll,ll, Q,Cl,Cl,Pl,PP,Pl, o,Cl,Cl,ll, o, o,m2,ll,ll, m,m2,m3,                ...WL],
            [...WL,              ll, o, o, o,Pl, F, o, o, Q, o, p, o, o, o, o, o, o, G, G,m4,                ...WL],
            [...WL,              ll, o, o, o, Q, Q, o, o, w, o, p, o, o, o,Pl, p,ll, o, o,m5,                ...WL],
            [...WL,              ll,ll, o, o, o, o, o, o,Cl,Cl,Cl,Cl,Cl,Cl,Cl,Cl,Cl,ll, o, m,                ...WL],
            [...WL,              ll, G, m, o,ll,ll,ll,ll,Cl,Cl,Cl,Cl,Cl,Cl,Cl,Cl,Cl,ll,m3,m2,                ...WL],
            [...WL,              ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,Cl,ll,ll,ll,ll,ll,ll,ll,ll,ll,                ...WL],
    
    
    
    
    
    
            [...WL, ...WL, ...WL, ...WL],
            [...WL, ...WL, ...WL, ...WL],
            [...WL, ...WL, ...WL, ...WL],
            [...WL, ...WL, ...WL, ...WL],
            [...WL, ...WL, ...WL, ...WL],
            [...WL, ...WL, ...WL, ...WL],
            [...WL, ...WL, ...WL, ...WL],
            [...WL, ...WL, ...WL, ...WL],
            [...WL, ...WL, ...WL, ...WL],
            [...WL, ...WL, ...WL, ...WL]]
        },
        { // Demo map
        mapX: 23,
        mapY: "mapArray.length-11",
        // mapX: 19,
        // mapY: 26,
        mapArray:[
        [...WL, ...WL, ...WL, ...WL, ...WL],
        [...WL, ...WL, ...WL, ...WL, ...WL],
        [...WL, ...WL, ...WL, ...WL, ...WL],
        [...WL, ...WL, ...WL, ...WL, ...WL],
        [...WL, ...WL, ...WL, ...WL, ...WL],
        [...WL, ...WL, ...WL, ...WL, ...WL],
        [...WL, ...WL, ...WL, ...WL, ...WL],
        [...WL, ...WL, ...WL, ...WL, ...WL],
        [...WL, ...WL, ...WL, ...WL, ...WL],
        [...WL, ...WL, ...WL, ...WL, ...WL],






        [...WL,               h, h,Cl,Cl,Cl,Cl,Cl,Cl,Cl,Cl,Cl,Cl,Cl,Cl, Q, Q, Q, Q, Q, Q, o, o, o,Cl,Cl,Cl,Cl,ll, o,zz,                ...WL],
        [...WL,               h, h, h, h, h, h, h, h, h, h, h, h, h, h, h, o, p, o, o, o, p, p, p, o,Cl,Cl, x, p,Cl, o,                ...WL],
        [...WL,               o, o, h,Cl,Cl,X8,Cl,Cl,Cl,Cl,Cl,Cl,Cl, o, o, o, p, o, Q, o, o, o, o, o,Cl,Cl, o, o, o,Cl,                ...WL],
        [...WL,               m, F,hd, o, o, o, o,Cl,Cl,Cl,Cl,Cl,Cl,Cl,Cl,Cl,Cl,Cl,Cl,Cl,Cl,Cl,Cl, o, o, o, o,Cl,Cl,Cl,                ...WL],
        [...WL,               G, F, o,Cl,Cl,Cl, o,Cl, o, w, w, o, o, o, o, m, o, o, o, o, o, o, o, o, w, w, w,Cl,Cl,Cl,                ...WL],
        [...WL,               x, F, o,Pl,PP,Pl, o, p, o, o,ll, o, F, F, F, F, F, F, F, F, F, F, F, o, o, w, o, o, o, o,                ...WL],
        [...WL,               F, o, o,Cl, w,Cl,Cl, o,ll,ll,ll, o,ll,ll,Cl,Cl, o, o, o, o, o, p, F, o, o, o,ll,Cl, p, o,                ...WL],
        [...WL,               F, F, o, o, p, Q, Q, Q, Q, Q, Q, Q,Cl,Cl,Cl, o, p,Pl,pk,Cl,Cl,Cl,Cl, o, o,ll,Cl, o, o, o,                ...WL],
        [...WL,               Q, o,Pl, w, Q,ll,ll,ll,ll, o,Cl,Cl,Cl,Cl,Cl, o, o,ll,ll,ll,ll,ll,ll,ll,ll,Cl,ll, o, o, o,                ...WL],
        [...WL,               o, p, o,Pl, o,Cl,Cl,Cl,Cl,Cl,Cl,ll,ll,ll,ll,ll, o, o, o, o, o, o, o, o, o, o, o, o, o, o,                ...WL],
        [...WL,              ll,ll, o,Pl, o,ll,ll,ll,ll,ll,ll,ll, o,x5, o, o,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll, p,ll,                ...WL],
        [...WL,              Cl,Cl,ll,Pl, o,hd, h, h, h, o, o, o,Cl,t1,Cl,Cl,ll,ll,ll,ll,Cl,Cl,Cl,Cl,Cl,Cl,Cl,ll, o, o,                ...WL],
        [...WL,              Cl,Pl,Pl,PP, o,Pl,Cl,Cl,Cl,ll,X8, o, o,hp, o, o, o, o, o, o, o,Cl,Cl,Cl,Cl,Cl,Cl,Cl,ll,Cl,                ...WL],
        [...WL,              Cl,Pl,Pl,Pl, w,Cl,Cl,Cl,Cl,Cl,ll,Pl, o,ll, o, Q, Q,Pl, o, o, o,Pl,Pl,Pl,Pl,Pl,Pl,Pl, G, m,                ...WL],
        [...WL,              Cl,pk,Cl,Cl,Cl,ll,Cl,Cl,Cl,Cl,Cl, o, o, o, o, o, o, o, Q, Q, o, o,Cl,Cl,Cl,Cl,Cl,pk,Cl,Cl,                ...WL],
        [...WL,              Cl,M6,Cl,Pl, Q, Q, Q, Q, x, o, o,Cl,Cl, o,Cl,Cl,Cl, G, o, o, o, o, o, o, o, o, o, o,Cl,Cl,                ...WL],
        [...WL,              Cl,Cl,Cl, o, o, w, w, w, p, o, p, m, o, w,Pl, o,Cl, x, o, Q,Pl,Pl,Pl,Cl,Cl,Cl, o, o, o, G,                ...WL],
        [...WL,              ll,ll,ll,ll, F,ll, w, Q, p, o, p, o,Cl, o,Cl, o,Cl,Cl, F, F, o, o, Q, Q, Q, o, p, o, o, o,                ...WL],
        [...WL,               o, o, o, o, o,ll, w,ll, o, o, o, o,Cl, o,Cl, o, o,Cl, F, o, o, o, o, m, o, p, o, o, o, o,                ...WL],
        [...WL,              t3, o, p, o,ll, o, o,ll, o,Pl, o, o,Cl, o,Cl, o, o, o, o, o,Pl, o,Cl,Cl,Cl,Cl,Cl,Cl,Cl,Cl,                ...WL],
        [...WL,               o, o, o,ll, o, o,ll,ll,Cl,ll,ll,ll,Cl, o,Cl, o,ll,Cl,Cl, o, o, o,MI,MI,MI,MI, o,MI,MI, o,                ...WL],
        [...WL,              ll,MI,ll,MI, o, o,Cl,X6,Cl, o, o,Cl,Cl, p,Cl,Cl,ll, w, w,Cl, o,MI,MI,MI,MI,Pl, o,MI,MI,MI,                ...WL],
        [...WL,               h,ll,ll,ll,ll,ll, x,Cl,Cl, o,ll,ll, G, x, G,ll,ll, w, w, w, w, o, o,Cl,Cl,Cl, o, o, p, o,                ...WL],
        [...WL,               Q, o, o, o, o,ll, o,Cl, o,Pl, o, o,ll, o,ll, o,ll, w, w, w, o, o,Pl,Pl,Pl, p,MI,MI, o, o,                ...WL],
        [...WL,               Q, o, o, p, m, o, o,Cl, o, o,ll,ll, x, o, o, o,d1, o, o,Cl,pk,Cl,Cl,Cl, o, o,MI,MI,MI, o,                ...WL],
        [...WL,               Q,ll,ll,ll, o, o, o, o, o, m, o, o, o, o, o,lt,ll, G, o,Cl,Cl, F, F, F, o, o, o, o, o, o,                ...WL],
        [...WL,               Q,Pl, o, o, o, o, o, o, o, F, o, o, F, o, F,ll,ll,ll, m, o,Cl,Cl,Cl,Cl,Cl,Cl, o,Cl,Cl,Cl,                ...WL],
        [...WL,              Cl,Cl,Cl, o, o, Q,ll,ll, o,ll,ll, F, F, x, F, F,ll, x, o, o, o, o, o, o, o, o, o, o, o, o,                ...WL],
        [...WL,              Cl,Cl,Cl, o, o, Q, o, o, o,ll, F, F, F, o, F, F, F, G,ll, o,Cl,Cl,Cl,Cl,Cl,Cl,Cl,Cl,Cl,Cl,                ...WL],
        [...WL,              t2,Cl,Cl, o, o, Q, o,ll,ll, F, F,ll,ll, o,ll,ll, F, F,ll, Q, Q, Q, G, Q, Q, Q, o, o, o,x2,                ...WL],
                                                                //   ^Start





        [...WL, ...WL, ...WL, ...WL, ...WL],
        [...WL, ...WL, ...WL, ...WL, ...WL],
        [...WL, ...WL, ...WL, ...WL, ...WL],
        [...WL, ...WL, ...WL, ...WL, ...WL],
        [...WL, ...WL, ...WL, ...WL, ...WL],
        [...WL, ...WL, ...WL, ...WL, ...WL],
        [...WL, ...WL, ...WL, ...WL, ...WL],
        [...WL, ...WL, ...WL, ...WL, ...WL],
        [...WL, ...WL, ...WL, ...WL, ...WL],
        [...WL, ...WL, ...WL, ...WL, ...WL]]
        }
    ]
    

    //  

    //     [...wl, ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,...wl],
    //     [...wl, ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,...wl],
    //     [...wl, ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,...wl],
    //     [...wl, ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,...wl],
    //     [...wl, ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,...wl],
    //     [...wl, ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,...wl],
    //     [...wl, ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,...wl],
    //     [...wl, ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,...wl],
    //     [...wl, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o,zz, o,ll,x,x,x,x,x,...wl],
    //     [...wl, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o,ll,x,x,x,x,m,...wl],
    //     [...wl, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o,ll,ll,x,x,x,m,m,...wl],
    //     [...wl, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o,ll,ll,x,x,x,ll,m,...wl],
    //     [...wl, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o,ll,ll,ll,ll, o, o,...wl],
    //     [...wl, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o,ll,ll,ll,x, o,...wl],
    //     [...wl, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o,ll,ll,ll,m,...wl],
    //     [...wl, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o,ll, o,...wl],
    //     [...wl, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o,ll, o,...wl],
    //     [...wl, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o,ll, o,...wl],
    //     [...wl, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o,ll, o,...wl],
    //     [...wl, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o,ll, o,...wl],
    //     [...wl, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o,ll, o,...wl],
    //     [...wl, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o,ll,m,...wl],
    //     [...wl, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o,m, o,...wl],
    //     [...wl, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o,ll,m,...wl],
    //     [...wl, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o,ll, o,...wl],
    //     [...wl, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o,ll, o,...wl],
    //     [...wl, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o,ll, o,...wl],
    //     [...wl, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o,ll, o,...wl],
    //     [...wl, ll,ll,ll,ll,ll,ll,ll, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o,ll, o,...wl],
    //     [...wl, o, o, o, o, o, o, o, o, o, o, o,ll,ll,ll, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o,ll, o,...wl],
    //     [...wl, o, o, o, o, o, o,ll, o, o, o, o,ll,ll, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o,ll, o,...wl],
    //     [...wl, o, o,ll, o, o, o,ll, o, o, o, o,ll,ll, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o,ll, o,...wl],
    //     [...wl, o, o,ll,m,ll,ll,ll,ll,ll,ll,ll,ll,ll, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o,ll, o,...wl],
    //     [...wl, o, o,ll, o, o, o,ll,ll, o, o, o,ll,ll, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o,...wl],
    //     [...wl, o, o, o, o,ll, o,ll,ll, o,ll, o,ll,ll, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o,...wl],
    //     [...wl, o, o, o, o,ll, o,ll,ll, o,ll, o,ll, o,m, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o,ll,...wl],
    //     [...wl, ll, o, o, o, o, o, o, o, o,ll, o, o, o, o,ll, o, o, o, o, o, o, o, o, o, o, o, o,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,...wl],
    //     [...wl, ll,ll,ll,ll, o, o, o, o, o,ll,ll,ll, o,ll,ll, o, o, o, o, o, o, o, o, o, o,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,...wl],
    //     [...wl, ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,...wl],
    //     [...wl, ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,...wl],
    //     [...wl, ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,...wl],
    //     [...wl, ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,...wl],
    //     [...wl, ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,...wl],
    //     [...wl, ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,...wl],
    //     [...wl, ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,...wl],
    //     [...wl, ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,...wl],
    //     [...wl, ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,ll,...wl]]
    // }