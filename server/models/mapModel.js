const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mapSchema = mongoose.Schema({
    title: String,
    map: [[{

    }]]
})

module.exports = mongoose.model("maps", mapSchema);