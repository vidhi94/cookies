const {Router} = require("express")
const {data, create, update, remove, productPage} = require("../controllers/product.controller")

const pRouter = Router()

pRouter.get("/products",data)
pRouter.post("/create",create)
pRouter.patch("/update/:id",update)
pRouter.delete("/delete/:id",remove)
pRouter.get("/",productPage)


module.exports = {pRouter}