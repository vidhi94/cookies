const nodemailer = require("nodemailer")

const mailer = () =>{
    let transport = nodemailer.createTransport({
        service : "gmail",
        auth : {
            user : "ghadiyavidhi607@gmail.com",
            pass : "thdl ourb owpc rdvy"
        }
    })
    return transport
}

module.exports = {mailer}