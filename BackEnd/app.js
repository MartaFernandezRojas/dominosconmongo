var express = require('express');
var bodyParser = require('body-parser');
const PORT=3200;
var app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

app.listen(PORT,()=>{
    console.log("Servidor Up");
});


  module.exports = app;  