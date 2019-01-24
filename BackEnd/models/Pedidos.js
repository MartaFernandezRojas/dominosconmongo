var mongoose = require('../config');
var Schema = mongoose.Schema;

var coleccionPedidos = Schema({
    id_user: String,
    pedido: []
})
module.exports = mongoose.model('pedidos', coleccionPedidos);  