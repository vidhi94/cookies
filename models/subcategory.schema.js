const mongoose = require("mongoose")

const subcategoryschema = new mongoose.Schema({
     name : String
})


const subcategory = mongoose.model("subcategory", subcategoryschema)
module.exports = subcategory