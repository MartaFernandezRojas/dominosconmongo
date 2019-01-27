pedidosModel = require('../models/Pedidos');

var controller = {
    addPedido: (req, res) => {
        pedido = new pedidosModel();
        pedido.pedido = req.body;
        pedido.save((err, result) => {
            if (err) {
                return res.send(err);
            } else {
                return res.send(result)
            }
        })
    },
    getPedido: (req, res) => {
        pedidosModel.find({}, (err, result) => {
            if (err) {
                res.send(err)
            } else {
                res.status(200).send(result);
            }
        })
    }

};

module.exports = controller;