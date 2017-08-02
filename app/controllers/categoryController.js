'use strict';

var Category = require('../models/category');
var mongoose = require('mongoose');

exports.listAllCategories = function (req, res) {
    Category.find({},function (err, categories) {
        if (err)
            res.send(err);
        res.json(categories);
    });
};

exports.createACategory = function (req, res) {
    var newCategory = new Category(req.body);
    newCategory.save(function (err, category) {
        if (err)
            res.send(err);
        res.json(category);
    });
};