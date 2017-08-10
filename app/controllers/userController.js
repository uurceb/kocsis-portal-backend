'use strict';

var User = require('../models/user');
var mongoose = require('mongoose');

exports.listAllUsers = function (req, res) {
    User.find({},function (err, complexities) {
        if (err)
            res.send(err);
        res.json(complexities);
    });
};

exports.createAUser = function (req, res) {
    var newUser = new User(req.body);
    newUser.save(function (err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};

exports.deleteAUser = function (req, res) {
    User.remove({
        _id: req.body._id
    }, function (err, user) {
        if (err)
            res.send(err);
        res.json({ message: 'Users successfully deleted' });
    });
};