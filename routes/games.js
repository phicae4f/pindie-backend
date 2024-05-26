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

const {checkAuth} = require("../middlewares/auth")

gamesRouter.get("/games", findAllGames, sendAllGames);
gamesRouter.post(
  "/games",
  findAllGames,
  checkIfEmptyFields,
  checkAuth,
  createGame,
  sendGameCreated
);
gamesRouter.put(
  "/games/:id",
  findGameById,
  checkIfUsersAreSafe,
  checkIfCategoriesAvaliable,
  checkIfEmptyFields,
  checkAuth,
  updateGame,
  sendGameUpdated
);
gamesRouter.delete("/games/:id", checkAuth, deleteGame, sendGameDeleted);

module.exports = gamesRouter;
