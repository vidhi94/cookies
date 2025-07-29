const { Router } = require("express");
const { create, getsubcategory} = require("../controllers/subCategory.controll");

const subRouter = Router()

subRouter.post("/create", create)
subRouter.get("/get", getsubcategory)


module.exports = {subRouter}
