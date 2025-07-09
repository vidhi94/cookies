const user = require("../models/user.schema")

const home = async (req, res) =>{
    // let data = await user.find()
    // res.send(data)
    return res.redirect("/login")
}

const signup = async (req, res)=>{
    console.log(req.body);
    let data = await user.create(req.body)
    // res.send(data)
    res.cookie("logged",data.id).send(data)
}

const update = async (req, res) =>{
    console.log(req.body);
    let {id} = req.params;
    let data = await user.findByIdAndUpdate(id, req.body)
    res.send(data)
}

const remove = async (req, res) =>{
    console.log(req.body);
    let {id} = req.params;
    await user.findByIdAndDelete(id, req.body)
    res.send("data delete")
}

const getsignup = (req, res) =>{
    res.render("signup")
}

const getLogin = async (req, res) =>{
    let {email, password} = req.body;
    let data = await user.findOne({email:email});

    if (!data) {
        return res.send("Invalid Email ID")
    }

    if (data.password != password) {
        return res.send("Invalid Password")
    }

    res.send("logged in successfully")
}

const Local = (req, res) =>{
    res.send("logged in")
}

const Login = (req, res) =>{
    return res.render("login")
}

module.exports = {home, signup, update, remove, getsignup, getLogin, Local, Login}