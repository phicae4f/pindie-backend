const gamesRouter = require("express").Router();
const {
  findAllGames,
  createGame,
  updateGame,
  findGameById,
  deleteGame,
  checkIfEmptyFields,
  checkIfUsersAreSafe,
  checkIfCategoriesAvaliable,
} = require("../middlewares/games");
const {
  sendAllGames,
  sendGameCreated,
  sendGameUpdated,
  sendGameDeleted,
} = require("../controllers/games");

gamesRouter.get("/games", findAllGames, sendAllGames);
gamesRouter.post(
  "/games",
  findAllGames,
  checkIfEmptyFields,
  createGame,
  sendGameCreated
);
gamesRouter.put(
  "/games/:id",
  findGameById,
  checkIfUsersAreSafe,
  checkIfCategoriesAvaliable,
  checkIfEmptyFields,
  updateGame,
  sendGameUpdated
);
gamesRouter.delete("/games/:id", deleteGame, sendGameDeleted);

module.exports = gamesRouter;
