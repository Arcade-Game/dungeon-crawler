const Map = require("../models/mapModel");
const tile = require("../models/tileModel");

module.exports = {
    getMaps: async (req, res) => {
        try {
            const allMaps = await maps.find();
            res.status(200).send(allMaps);
        } catch (err) {
            res.status(500).send(err);
        }
    },

    getMap: async (req, res) => {

    },

    createMap: async (req, res) => {
        const {map, title, startingTile} = req.body

        const newMap = new Map({
            title,
            start: startingTile,
            map
        })

        console.log("newMap", newMap)
        try {
            const savedMap = await newMap.save();
            res.status(201).send(savedMap);
        } catch (err) {
            res.status(500).send(err);
        }
    },

    editMap: async (req, res) => {

    },

    getTiles: async (req, res) => {
        try {
            const allTiles = await tile.find()
            console.log("allTiles", allTiles)
            res.status(200).send(allTiles)
        } catch (err) {
            res.status(500).send(err)
        }
    },

    createTile: async (req, res) => {
        console.log("req.body", req.body)
        const {tileType, elevation, mist, pushable, hidden, level, end, itemObject, door, key, area} = req.body
        console.log("props", tileType, elevation, mist, pushable, hidden, level, end)
        const newTile = new tile({
            tileType,
            elevation,
            mist,
            pushable,
            hidden,
            level,
            end,
            itemObject,
            door,
            key,
            area
        })
        console.log("newTile", newTile)
        try {
            const savedTile = newTile.save()
            res.status(201).send(savedTile)
        } catch (err) {
            res.status(500).send(err)
        }
    }
}