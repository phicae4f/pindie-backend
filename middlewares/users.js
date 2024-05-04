const users = require("../models/user");

const findAllUsers = async (req, res, next) => {
  console.log("GET/users");
  req.usersArray = await users.find({});
  next();
};

const findUserById = async (req, res, next) => {
  console.log("GET /users/:id");
  try {
    req.category = await users.findById(req.params.id);
    next();
  } catch (err) {
    res.status(404).send({ message: "Users not found" });
  }
};

const createUser = async (req, res, next) => {
  console.log("POST /users");
  try {
    req.user = await users.create(req.body);
    next();
  } catch (err) {
    res.status(400).send({ message: "Error creating user" });
  }
};

const updateUser = async (req, res, next) => {
  console.log("PUT /users/:id");
  try {
    req.user = await users.findByIdAndUpdate(req.params.id, req.body);
    next();
  } catch (err) {
    res.status(404).send({ message: "Error updating user" });
  }
};

//пусто value
const checkIfEmptyNameAndEmail = async (req, res, next) => {
  if (!req.body.username || !req.body.email) {
    res.status(404).send("Введите имя и email");
  } else {
    next();
  }
};

const deleteUser = async (req, res, next) => {
  console.log("PUT /games/:id");
  try {
    req.user = await users.findByIdAndDelete(req.params.id);
    next();
  } catch (err) {
    res.status(404).send({ message: "Error deleting user" });
  }
};

module.exports = {
  findAllUsers,
  findUserById,
  createUser,
  updateUser,
  checkIfEmptyNameAndEmail,
  deleteUser,
};
