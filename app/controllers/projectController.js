'use strict';

var Project = require('../models/project');
var Phase = require('../models/phase');
var EstimationFactor = require('../models/estimatingFactor');
var InventoryItem = require('../models/inventoryItem');
var mongoose = require('mongoose');

exports.listAllProjects = function (req, res) {
    Project.find({}).populate('_category','categoryName').populate('_status').exec(function (err, projects) {
        if (err)
            res.send(err);
        res.json(projects);
    });
};

exports.createAProject = function (req, res) {
    var newProject = new Project(req.body);
    console.log(req.body);
    newProject.save(function (err, project) {
        if (err)
            res.send(err);
        res.json(newProject);
    });
};

exports.readAProject = function (req, res) {
    Project.findById(req.params._id).populate('_category').populate('_status').exec(function (err, project) {
        if (err)
            res.send(err);
        res.json(project);
    });
};

exports.updateAProject = function (req, res) {
    Project.findOneAndUpdate({ _id: req.params._id }, req.body, { new: true }, function (err, project) {
        if (err)
            res.send(err);
        res.json(project);
    });
};

exports.deleteAProject = function (req, res) {
    Project.remove({
        _id: req.body._id
    }, function (err) {
        Phase.remove({
            _project: req.body._id
        }, function (err) {
            EstimationFactor.remove({
                _project: req.body._id
            }, function (err) {
                InventoryItem.remove({ _project: req.body._id }, function (err) {
                    res.json({ message: 'project successfully deleted' });
                });
            });
        });

    });

};