'use strict';

var Component = require('../models/component');
var mongoose = require('mongoose');

exports.listAllComponents = function (req, res) {
    Component.find({},function (err, components) {
        if (err)
            res.send(err);
        res.json(components);
    });
};

exports.createAComponent = function (req, res) {
    var newComponent = new Component(req.body);
    newComponent.save(function (err, component) {
        if (err)
            res.send(err);
        res.json(component);
    });
};

exports.readComponentsByCatId = function (req, res) {
    Component.find({ _category: req.params._id }, function (err, components) {
        if (err)
            res.send(err);
        res.json(components);
    });
};

exports.deleteAComponent = function (req, res) {
    Component.remove({
        _id: req.body._id
    }, function (err, task) {
        if (err)
            res.send(err);
        res.json({ message: 'Component successfully deleted' });
    });
};