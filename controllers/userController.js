const crypto = require("crypto");
const model = require("../models");

exports.createUser = (req, res, next) => {
    const { name, username, password, telepon } = req.body;
    console.log(req.body);

    let myKey = (crypto.createHash("aes-128-cbc", "mypassword"));
    let myStr = myKey.update(password, "utf8", "hex");
    myStr += myKey.final("hex");

    const hashPass = myStr

    model.User 
        .create({
            name: name,
            username: username,
            password: hashPass,
            telepon: telepon
        })
        .then(user => {
            return res.json({
                msg: "Berhasil terdaftar",
                user,
            })
        })
        .catch(err => {
            return res.json({
                msg: "Error",
                err,
            })
        })
}