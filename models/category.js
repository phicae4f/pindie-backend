const mongoose = require("mongoose")

const categoryShema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model("category", categoryShema)