var app = require('./app');
var pizzaController = require('./Controllers/projectController');
var pedidoController = require('./Controllers/pedidosController');

app.get('/pizzas', pizzaController.getProjects);
app.post('/pedidos', pedidoController.addPedido);
app.get('/consultpedido', pedidoController.getPedido);
module.exports=app;