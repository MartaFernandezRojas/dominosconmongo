var mongoose = require('../config');
var Schema = mongoose.Schema;

var coleccionPizza = Schema({
    name: String,
    imagen: String,
    info:String,
    precio:String,
    arrayIngrediente: []
})
module.exports = mongoose.model('pizzas', coleccionPizza);  