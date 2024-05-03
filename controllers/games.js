const sendAllGames = (req, res) => {
    res.setHeader("Content-Type", "application/json")
    res.end(JSON.stringify(req.gamesArray))
}

const sendGameCreated = (req, res) => {
    res.setHeader("Content-Type", "application/json")
    res.end(JSON.stringify(req.game))
}

const sendGameUpdated = (req, res) => {
    res.setHeader("Content-Type", "application/json")
    res.end("Game updated")
}


module.exports = {sendAllGames, sendGameCreated, sendGameUpdated}