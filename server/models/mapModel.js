const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mapSchema = new Schema({
    title: String,
    start: [Number, Number],
    map: [[{

    }]]
})

module.exports = mongoose.model("Map", mapSchema);