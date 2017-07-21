'use strict';

var Complexity = require('../models/complexity');
var mongoose = require('mongoose');

exports.listAllComplexities = function (req, res) {
    Complexity.find({},function (err, complexities) {
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