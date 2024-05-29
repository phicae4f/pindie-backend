const gamesRouter = require("express").Router();
const {
  findAllGames,
  checkIsGameExists,
  checkIfCategoriesAvailable,
  findGameById,
  createGame,
  checkIfUsersAreSafe,
  updateGame,
  deleteGame,
  checkEmptyFields,
  checkIsVoteRequest
} = require("../middlewares/games.js");
const {
  sendAllGames,
  sendGameById,
  sendGameCreated,
  sendGameUpdated,
  sendGameDeleted
} = require("../controllers/games.js");

gamesRouter.get("/games", findAllGames, sendAllGames);
gamesRouter.post(
  "/games",
  findAllGames,
  checkIsGameExists,
  checkIfCategoriesAvailable,
  checkEmptyFields,
  createGame,
  sendGameCreated
);
gamesRouter.get("/games/:id", findGameById, sendGameById);
gamesRouter.put(
  "/games/:id",
  findGameById,
  checkIsVoteRequest,
  checkIfUsersAreSafe,
  checkIfCategoriesAvailable,
  checkEmptyFields,
  updateGame,
  sendGameUpdated
);
gamesRouter.delete("/games/:id", deleteGame, sendGameDeleted);

module.exports = gamesRouter;
