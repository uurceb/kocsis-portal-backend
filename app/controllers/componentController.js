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