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
    }

};

module.exports = controller;