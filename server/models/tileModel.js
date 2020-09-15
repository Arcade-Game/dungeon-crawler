const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tileSchema = mongoose.Schema({
    tileType: {type: String, required: true},
    elevation: Number,
    mist: Boolean,
    pushable: Boolean,
    hidden: Boolean,
    level: Number
})

module.exports = mongoose.model("tile", tileSchema);
