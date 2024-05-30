const userRouter = require("express").Router();
const {
  findAllUsers,
  createUser,
  updateUser,
  checkIfEmptyNameAndEmail,
  deleteUser,
  checkEmptyNameAndEmailAndPassword,
  hashPassword,
  checkIsUserExists
} = require("../middlewares/users");
const {
  sendAllUsers,
  sendUserCreated,
  sendUserUpdated,
  sendUserDeleted,
  sendMe
} = require("../controllers/users");

const {checkAuth} = require("../middlewares/auth")

userRouter.get("/users", findAllUsers, sendAllUsers);
userRouter.post("/users", findAllUsers,checkIsUserExists, checkEmptyNameAndEmailAndPassword, checkAuth, hashPassword, createUser, sendUserCreated);
userRouter.put(
  "/users/:id",
  checkIfEmptyNameAndEmail,
  checkAuth,
  updateUser,
  sendUserUpdated
);
userRouter.delete("/users/:id", checkAuth, deleteUser, sendUserDeleted);
userRouter.get("/me", checkAuth, sendMe)
module.exports = userRouter;
