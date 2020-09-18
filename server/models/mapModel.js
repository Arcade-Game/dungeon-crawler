const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MapSchema = mongoose.Schema({
    title: {type: String, required: true},
    start: [Number, Number],
    map: [[{

    }]]
})

module.exports = mongoose.model("Map", MapSchema);