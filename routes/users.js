const userRouter = require("express").Router()
const {findAllUsers, createUser, updateUser} = require("../middlewares/users")
const {sendAllUsers, sendUserCreated, sendUserUpdated} = require("../controllers/users")

userRouter.get("/users", findAllUsers, sendAllUsers)
userRouter.post("/users", findAllUsers, createUser, sendUserCreated)
userRouter.put("/users/:id", updateUser, sendUserUpdated)

module.exports = userRouter