var mongoose = require('../config');
var Schema = mongoose.Schema;

var coleccionUsers = Schema({
    id_user: String,
    info:Object,
})


module.exports = mongoose.model('usuarios', coleccionUsers);  