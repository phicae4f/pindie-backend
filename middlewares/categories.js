const categories = require("../models/category")

const findAllCategories = async(req, res, next) => {
    console.log("GET/categories")
    req.categoriesArray = await categories.find({})
    next()
}

module.exports = findAllCategories