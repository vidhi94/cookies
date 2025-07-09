const mongoose = require("mongoose")

const adminSchema = mongoose.Schema ({
    username : String,
    email : String,
    password : String,
    phone : String
})

const user = mongoose.model('user', adminSchema)
module.exports = user