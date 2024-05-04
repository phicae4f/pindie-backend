const games = require("../models/game");

const findAllGames = async (req, res, next) => {
  console.log("GET /games");
  req.gamesArray = await games.find({}).populate("categories").populate({
    path: "users",
    select: "-password",
  });
  next();
};

const createGame = async (req, res, next) => {
  console.log("POST /games");

  try {
    req.game = await games.create(req.body);
    next();
  } catch (err) {
    res.status(400).send({ message: "Error creating game" });
  }
};

const findGameById = async (req, res, next) => {
  console.log("GET /game/:id");
  try {
    req.game = await games
      .findById(req.params.id)
      .populate("categories")
      .populate("users");
    next();
  } catch (err) {
    res.status(404).send({ message: "Game not found" });
  }
};

const updateGame = async (req, res, next) => {
  console.log("PUT /games/:id");
  try {
    req.game = await games.findByIdAndUpdate(req.params.id, req.body);
    next();
  } catch (err) {
    res.status(404).send({ message: "Error updating game" });
  }
};

const checkIfEmptyFields = async (req, res, next) => {
  if (
    !req.body.title ||
    !req.body.description ||
    !req.body.image ||
    !req.body.link ||
    !req.body.developer
  ) {
    res.setHeader("Content-Type", "application/json");
    res.status(400).send(JSON.stringify({ message: "Заполните все поля" }));
  } else {
    next();
  }
};

const checkIfCategoriesAvaliable = async (req, res, next) => {
  if (!req.body.categories || req.body.categories === 0) {
    res.setHeader("Content-Type", "application/json");
    res
      .status(400)
      .send(JSON.stringify({ message: "Выбери хотя бы одну категорию" }));
  } else {
    next();
  }
};

const deleteGame = async (req, res, next) => {
  console.log("PUT /games/:id");
  try {
    req.game = await games.findByIdAndDelete(req.params.id);
    next();
  } catch (err) {
    res.status(404).send({ message: "Error deleting game" });
  }
};

const checkIfUsersAreSafe = async (req, res, next) => {
  if (!req.body.users) {
    next();
    return;
  }
  if (req.body.users.length - 1 === req.game.users.length) {
    next();
    return;
  } else {
    res.setHeader("Content-Type", "application/json");
    res
      .status(400)
      .send(
        JSON.stringify({
          message:
            "Нельзя удалять пользователей или добавлять больше одного пользователя",
        })
      );
  }
};

module.exports = {
  findAllGames,
  createGame,
  findGameById,
  updateGame,
  deleteGame,
  checkIfEmptyFields,
  checkIfCategoriesAvaliable,
  checkIfUsersAreSafe,
};
