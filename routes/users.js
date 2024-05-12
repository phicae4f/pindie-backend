const userRouter = require("express").Router();
const {
  findAllUsers,
  createUser,
  updateUser,
  checkIfEmptyNameAndEmail,
  deleteUser,
  hashPassword,
} = require("../middlewares/users");
const {
  sendAllUsers,
  sendUserCreated,
  sendUserUpdated,
  sendUserDeleted,
} = require("../controllers/users");

userRouter.get("/users", findAllUsers, sendAllUsers);
userRouter.post("/users", findAllUsers, hashPassword, createUser, sendUserCreated);
userRouter.put(
  "/users/:id",
  checkIfEmptyNameAndEmail,
  updateUser,
  sendUserUpdated
);
userRouter.delete("/users/:id", deleteUser, sendUserDeleted);

module.exports = userRouter;
