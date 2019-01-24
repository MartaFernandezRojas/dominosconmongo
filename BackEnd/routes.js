var app = require('./app');
var pizzaController = require('./Controllers/projectController');
var pedidoController = require('./Controllers/pedidosController');

app.get('/pizzas', pizzaController.getProjects);
app.post('/pedido', pedidoController.addPedido);

module.exports=app;