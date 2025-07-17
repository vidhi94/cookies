const product = require("../models/product.schema")

const data = async (req, res) =>{
    let pdata = await product.find()
    res.send(pdata)
}

const create = async (req, res) =>{
    let data = await product.create(req.body)
    res.send(data)
}

const update = async (req, res) =>{
    let {id} = req.params;
    let data = await product.findByIdAndUpdate(id, req.body)
    res.send(data)
}

const remove = async (req, res) =>{
    let {id} = req.params;
    let data = await product.findByIdAndDelete(id, req.body)
    res.send("data deleted")
}

const productPage =(req, res) =>{
    res.render("product")
}

module.exports = { data, create, update, remove, productPage}