'use strict';

var Phase = require('../models/phase');
var mongoose = require('mongoose');

exports.listAllPhases = function (req, res) {
    Phase.find({}).populate('_project', 'projectName').exec(function (err, phases) {
        if (err)
            res.send(err);
        res.json(phases);
    });
};

exports.createAPhase = function (req, res) {
    var newPhase = new Phase(req.body);
    newPhase.save(function (err, phase) {
        if (err)
            res.send(err);
        res.json(newPhase);
    });
};

exports.readAPhase = function (req, res) {
    Phase.findById(req.params._id, function (err, phase) {
        if (err)
            res.send(err);
        res.json(phase);
    });
};
exports.readAPhaseByProjectId = function (req, res) {
    Phase.find({_project:req.params._id}, function (err, phase) {
        if (err)
            res.send(err);
        res.json(phase);
    });
};

exports.updateAPhase = function (req, res) {
    Phase.findOneAndUpdate({ _id: req.params._id }, req.body, { new: true }, function (err, phase) {
        if (err)
            res.send(err);
        res.json(phase);
    });
};

exports.deleteAPhase = function (req, res) {
    Phase.remove({
        _id: req.body._id
    }, function (err, task) {
        if (err)
            res.send(err);
        res.json({ message: 'Phase successfully deleted' });
    });
};