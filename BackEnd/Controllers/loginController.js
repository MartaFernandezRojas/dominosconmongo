loginModel = require('../models/Login');

var controller = {
    postLogin: (req, res) => {
        login = new loginModel();
        login.info = req.body;
        login.save((err, result) => {
            if (err) {
                return res.send(err);
            } else {
                return res.send(result)
            }
        })
    }
    
};

module.exports = controller;