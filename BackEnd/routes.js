var app = require('./app');
var pizzaController = require('./Controllers/projectController');
var pedidoController = require('./Controllers/pedidosController');
var loginController = require('./Controllers/loginController');

app.get('/pizzas', pizzaController.getProjects);
app.post('/pedidos', pedidoController.addPedido);
app.get('/consultpedido', pedidoController.getPedido);
app.post('/login',loginController.postLogin);
module.exports=app;