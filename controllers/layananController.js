const model = require("../models");

exports.createUser = (req, res, next) => {
    const { nama, unit, harga } = req.body;
    console.log(req.body);
    
    model.Layanan
        .create({
            nama: nama,
            unit: unit,
            harga: harga
        })
        .then(user => {
            return res.json({
                msg: "Berhasil Ditambahkan",
                user
            })
        })
        .catch(err => {
            return res.json({
                msg: "Error",
                err
            })
        })
}