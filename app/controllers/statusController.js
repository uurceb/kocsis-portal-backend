'use strict';

var Status = require('../models/status');
var mongoose = require('mongoose');

exports.listAllStatus = function (req, res) {
    Status.find({},function (err, status) {
        if (err)
            res.send(err);
        res.json(status);
    });
};

exports.createAStatus = function (req, res) {
    var newStatus = new Status(req.body);
    newStatus.save(function (err, status) {
        if (err)
            res.send(err);
        res.json(status);
    });
};

exports.deleteAStatus = function (req, res) {
    Status.remove({
        _id: req.body._id
    }, function (err, task) {
        if (err)
            res.send(err);
        res.json({ message: 'Status successfully deleted' });
    });
};