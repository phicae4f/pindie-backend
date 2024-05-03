const categoriesRouter = require("express").Router()
const {findAllCategories, createCategory, updateCategory, checkIfEmptyName, deleteCategory} = require("../middlewares/categories")
const {sendAllCategories, sendCategoryCreated, sendCategoryUpdated, sendCategoryDeleted} = require("../controllers/categories")



categoriesRouter.get("/categories", findAllCategories, sendAllCategories)
categoriesRouter.post("/categories", findAllCategories, createCategory, sendCategoryCreated)
categoriesRouter.put("/categories/:id", checkIfEmptyName, updateCategory, sendCategoryUpdated)
categoriesRouter.delete("/categories/:id", deleteCategory, sendCategoryDeleted)

module.exports = categoriesRouter