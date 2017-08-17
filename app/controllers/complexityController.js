'use strict';

var Complexity = require('../models/complexity');
var mongoose = require('mongoose');

exports.listAllComplexities = function (req, res) {
    Complexity.find({}).sort({ order: 1 }).exec(function (err, complexities) {
        if (err)
            res.send(err);
        res.json(complexities);
    });
};

exports.createAComplexity = function (req, res) {
    var newComplexity = new Complexity(req.body);
    newComplexity.save(function (err, complexity) {
        if (err)
            res.send(err);
        res.json(complexity);
    });
};

exports.deleteAComplexity = function (req, res) {
    Complexity.remove({
        _id: req.body._id
    }, function (err, complexity) {
        if (err)
            res.send(err);
        res.json({ message: 'Complexity successfully deleted' });
    });
};