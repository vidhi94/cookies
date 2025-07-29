const mongoose =  require("mongoose")

const categoryschema = new mongoose.Schema({
   name : String,
   subcategoryId: {
      type: mongoose.Schema.Types.ObjectId, ref:"subcategory"
   }
})

const category = mongoose.model("category", categoryschema)
module.exports = category