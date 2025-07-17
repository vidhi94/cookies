const user = require("../models/user.schema");
const LocalStrategy = require("passport-local").Strategy

const valid = (req, res, next) =>{
    let {username, email, password, phone} = req.body;

    if (username, email, password, phone) {
        return next()
    }
    else{
        res.status(400).send("data not valid");
    }
}

const isAuth = (req, res, next) =>{
    let {logged} = req.cookies;

    if (logged) {
        next();
    }
    else{
        res.render("signup")
    }
}  

module.exports = {valid, isAuth};

