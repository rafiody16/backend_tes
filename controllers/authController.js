const passport = require("passport");

exports.login = (req,res,next) => {
    passport.authenticate('local', (err, user, indo) => {
        if(err) {
            return res.json({
                msg:err
            })
        }
        if(!user) {
            return res.json({
                msg: "Gagal Login!"
            })
        }
        return res.json({
            msg: "sukses",
            user: {
                "id" : user.id,
                "name": user.name,
                "username": user.username
            }
        })
    })(req, res, next)
}

exports.logout = (req, res, next) => {
    req.logout();
    return res.json({
        msg: "Berhasil Logout"
    })
}