'use strict';

var Project = require('../models/project');
var mongoose = require('mongoose');

exports.listAllProjects = function (req, res) {
    Project.find({}, function (err, projects) {
        if (err)
            res.send(err);
        res.json(projects);
    });
};

exports.createAProject = function (req, res) {
    var newProject = new Project(req.body);
    newProject.save(function (err, project) {
        if (err)
            res.send(err);
        res.json(newProject);
    });
};

exports.readAProject = function (req, res) {
    Project.findById(req.params._id, function (err, project) {
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
    }, function (err, task) {
        if (err)
            res.send(err);
        res.json({ message: 'Project successfully deleted' });
    });
};