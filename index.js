const express = require("express")
const { router } = require("./routes/routes")
const db = require('./confing/database')
const cookies = require("cookie-parser")
const passport = require("passport")
const session = require("express-session")
const {PassportAuth} = require("./middleware/PassportAuth")
const { getsignup } = require("./controllers/user.controller")
PassportAuth(passport)

const port = 7005

const app = express()
app.use(cookies())
app.use(session({secret: "private-key"}))

app.set("view engine", "ejs")

app.set("views",__dirname+"/views")
app.use(express.urlencoded())
app.use(express.json())
app.use(express.static(__dirname+"/public"))

app.use(passport.initialize())
app.use(passport.session())

app.get("/index",(req, res)=>{
    res.render("index")
})

app.get("/signup", getsignup)


app.use(router)

app.listen(port, (err)=>{
    if (err) {
        console.log(("Server is not connected"));
        return false;
    }

    console.log("Server is connected on "+port);
    
})
