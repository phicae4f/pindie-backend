const userRouter = require("express").Router()
const {findAllUsers, createUser} = require("../middlewares/users")
const {sendAllUsers, sendUserCreated} = require("../controllers/users")

userRouter.get("/users", findAllUsers, sendAllUsers)
userRouter.post("/users", findAllUsers, createUser, sendUserCreated)

module.exports = userRouter