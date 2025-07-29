const subcategory = require("../models/subcategory.schema")

const create = async (req, res)=>{
   let data = await subcategory.create(req.body)
   res.send(data)
}

const getsubcategory = async (req, res)=>{
    let data = await subcategory.find()
    res.send(data)
}

module.exports = {create, getsubcategory}