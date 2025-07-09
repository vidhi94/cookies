const user = require("../models/user.schema")
const passport = require("passport")
const LocalStrategy = require("passport-local").Strategy

let PassportAuth = (passport) =>{
    passport.use(new LocalStrategy(async (username, password, done) =>{
        let User = await user.findOne({username : username})
        if (!User) {
            return done(null, false)
        }

        if (User.password != password) {
            return done(null, false)
        }
        return done(null, User)
    }))

    passport.serializeUser((user, done)=>{
        done(null, user.id)
    })

    passport.deserializeUser(async (id, done)=>{
        let User = await user.findById(id)
        return done(null, User)
    })
}

module.exports = { PassportAuth };