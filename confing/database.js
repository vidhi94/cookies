const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/mvc")

const db = mongoose.connection;

db.on('connected',(err)=>{
    if (err) {
        console.log("Database not connected");
        return false;
    }

    console.log("Database connected");
    
})

module.exports = db ;

