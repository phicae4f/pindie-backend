const users = require("../models/user");
const bcrypt = require("bcryptjs");

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
const checkEmptyNameAndEmailAndPassword = async (req, res, next) => {
  if (!req.body.username || !req.body.email || !req.body.password) {
    res.setHeader("Content-Type", "application/json");
    res
      .status(400)
      .send(JSON.stringify({ message: "Введите имя, email и пароль" }));
  } else {
    next();
  }
};
const checkIsUserExists = async (req, res, next) => {
  const isInArray = req.usersArray.find((user) => {
    return req.body.email === user.email;
  });
  if (isInArray) {
    res.setHeader("Content-Type", "application/json");
    res
      .status(400)
      .send(
        JSON.stringify({ message: "Пользователь с таким email уже существует" })
      );
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

const hashPassword = async (req, res, next) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt);
    req.body.password = hash;
    next();
  } catch (err) {
    res.status(400).send({ message: "Error with hash password" });
  }
};


const checkIsVoteRequest = async (req, res, next) => {
  // Если в запросе присылают только поле users
if (Object.keys(req.body).length === 1 && req.body.users) {
  req.isVoteRequest = true;
}
next();
};

module.exports = {
  findAllUsers,
  findUserById,
  createUser,
  updateUser,
  checkIfEmptyNameAndEmail,
  deleteUser,
  hashPassword,
  checkIsVoteRequest,
  checkEmptyNameAndEmailAndPassword,
  checkIsUserExists
};
