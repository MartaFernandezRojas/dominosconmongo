proyectosModel = require('../models/Proyectos');

var controller = {
    // addProject: (req, res) => {
    //     proyecto = new proyectosModel();
    //     proyecto.name = req.body.name;
    //     proyecto.save((err, result) => {
    //         if (err) {
    //             return res.send(err);
    //         } else {
    //             let proyecto = {
    //                 id:result._id,
    //                 name:result.name
    //             }
    //             return res.status(200).send(proyecto)
    //         }
    //     })
    // },

    getProjects: (req, res) => {
        proyectosModel.find({}, (err, result) => {
            if (err) {
                res.send(err)
            } else {
                res.status(200).send(result);
            }
        })
    }

};

module.exports = controller;