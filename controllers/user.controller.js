const { mailer } = require("../helper/mail");
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

let OTP;
const passportReset = (req, res) => {
    OTP = Math.floor(Math.random()* 100000)
    let mail = mailer()

    let mailOptions = {
        from : "ghadiyavidhi607@gmail.com",
        to : req.body.email,
        subject : "Password Reset",
        text: OTP.toString()
    }

    mail.sendMail(mailOptions, (err, info)=>{
        if (err) {
            console.log(err);
        }
        else{
            console.log(info);
        }
    })
    res.send("OTP Sent Succesfully...")
}

const verify = (req, res) =>{
    let token = req.body.OTP
    if (token == OTP) {
        res.send("Verifyed OTP");
    }
    else{
        res.send("WRONG OTP")
    }
}

module.exports = {home, signup, update, remove, getsignup, getLogin, Local, Login, passportReset, verify}