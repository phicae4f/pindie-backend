const categories = require("../models/category")

const findAllCategories = async(req, res, next) => {
    console.log("GET/categories")
    req.categoriesArray = await categories.find({})
    next()
}

const findCategoryById = async(req, res, next) => {
    console.log("GET /categories/:id")
    try{
        req.category = await categories.findById(req.params.id)
        next()
    }
    catch(err) {
        res.status(404).send({message: "Category not found"})
    }
}

const createCategory = async(req, res, next) => {
    console.log("POST /categories")
    try{
        req.game= await categories.create(req.body)
        next()
    }
    catch(err) {
        res.status(400).send({message: "Error creating category"})
    }
}

const findUserById = async(req, res, next) => {
    console.log("GET /users/:id")
    try{
        req.category = await users.findById(req.params.id)
        next()
    }
    catch(err) {
        res.status(404).send({message: "Users not found"})
    }
}



const updateCategory = async (req, res, next) => {
    console.log("PUT /categories/:id")
    try {
        req.category = await categories.findByIdAndUpdate(req.params.id, req.body)
        next()
    }
    catch(err) {
        res.status(404).send({message: "Error updating category"})
    }
}


module.exports = {findAllCategories, findCategoryById, createCategory, updateCategory}