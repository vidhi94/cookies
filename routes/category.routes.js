const { Router } = require("express")
const { create, update, getcategory } = require("../controllers/category.controll")

const catRouter = Router()

catRouter.post("/create",create)
catRouter.patch("/update/:id",update)
catRouter.get("/get",getcategory)


module.exports = {catRouter}