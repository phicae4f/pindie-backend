const mongoose = require("mongoose")

const DB_URL = 'mongodb://localhost:27017/pindie'

async function connectToDatabase() {
    try {
        await mongoose.connect(DB_URL)
        console.log("Успешно подключились к mongodb")
    }
    catch(err) {
        console.log("error: " + err)
    }

}

module.exports = connectToDatabase