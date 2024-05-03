const categoriesRouter = require("express").Router()
const {findAllCategories, createCategory, updateCategory} = require("../middlewares/categories")
const {sendAllCategories, sendCategoryCreated, sendCategoryUpdated} = require("../controllers/categories")



categoriesRouter.get("/categories", findAllCategories, sendAllCategories)
categoriesRouter.post("/categories", findAllCategories, createCategory, sendCategoryCreated)
categoriesRouter.put("/categories/:id", updateCategory, sendCategoryUpdated)


module.exports = categoriesRouter