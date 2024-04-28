const express = require("express")
const bodyParser = require("body-parser")
const path = require("path")

const app = express()
const PORT = process.env.PORT || 3000

const gamesRouter = require("./routes/games")
const categoriesRouter = require("./routes/categories")
const usersRouter = require("./routes/users")


app.use(bodyParser.json(),
    express.static(path.join(__dirname, "public")),
    gamesRouter,
    categoriesRouter,
    usersRouter
)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})