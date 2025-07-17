const {Router} = require("express")
const {home, signup, update, remove, getsignup, getLogin, Login, Local, passportReset, verify} = require("../controllers/user.controller")
const {valid, isAuth} = require("../middleware/user.middleware")
const passport = require("passport")

const router = Router()

router.get("/",isAuth,home)
router.post("/signup",valid,signup)
router.patch("/update/:id", update)
router.delete("/remove/:id", remove)

router.get("/signup",getsignup)
router.post("/login", getLogin)
router.post("/local", passport.authenticate("local", {
    successRedirect:"/index",
    failureRedirect:"/login"
}), Local)
router.get("/login", Login)
router.get("/index", (req, res)=>{
    return res.render("index")
})

router.post("/forgot",passportReset)
router.post("/verify", verify)

module.exports = {router}