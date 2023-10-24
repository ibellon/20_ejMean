var mongoose = require('mongoose');
var Tarea = require('../models/tarea');

exports.list_all_tareas = async function(req, res) {
    await Tarea.find().then(tarea => {
        res.json(tarea);
    }).catch(err => {
        res.send(err);
    });
};

exports.create_tarea = async function(req, res) {
    var new_tarea = new Tarea(req.body);
    await new_tarea.save().then(() => {
        res.json(new_tarea);
    }).catch(err => {
        res.send(err);
    });
};

exports.read_tarea = async function(req, res) {
    await Tarea.findById({_id: req.params.tareaId}).then(tarea => {
        res.json(tarea);
    }).catch(err => {
        res.send(err);
    });
};

exports.update_tarea = async function (req, res) {
    var new_tarea = new Tarea(req.body);
    await Tarea.findOneAndUpdate({_id: req.params.tareaId}, 
        {titulo: new_tarea.titulo,
            fecha: new_tarea.fecha, 
            estado: new_tarea.estado}, 
        {new:true}).then(tarea => {
        res.json(tarea);
    }).catch(err => {
        res.send(err);
    });
};

exports.delete_tarea = async function(req, res) {
    await Tarea.deleteOne({_id: req.params.tareaId}).then(tarea => {
        res.json(tarea);
    }).catch(err => {
        res.send(err);
    });
};
