const db = require('../database/models');
const Sequelize = require('sequelize');
const op = db.Sequelize.Op;

module.exports = {
    home: function (req,res) {
        db.Producto.findAll({
            order: Sequelize.literal('rand()')
        })
        .then(function (productos){
            console.log(req.session.usuarioLogueado);
            res.render('home', {productos:productos, title: "Home"})
        })
    }
}