'use strict';

var EstimationFactor = require('../models/estimatingFactor');
var mongoose = require('mongoose');

exports.listAllEstimationFactors = function (req, res) {
    EstimationFactor.find({}).populate('_category', 'categoryName').exec(function (err, estFacts) {
        if (err)
            res.send(err);
        res.json(estFacts);
    });
};
exports.listEstimationFactorsByPageAndLimit = function (req, res) {
    var estFactorsResponse = { pageCount: 0, data: [] };

    EstimationFactor.count(req.params._id === "*" ? {} : { _category: req.params._id }, function (err, count) {
        estFactorsResponse.pageCount = Math.ceil(count / parseInt(req.params.itemCount));
    });
    EstimationFactor.find(req.params._id === "*" ? {} : { _category: req.params._id }).populate('_category', 'categoryName').skip((parseInt(req.params.pageNo) - 1) * parseInt(req.params.itemCount)).limit(parseInt(req.params.itemCount)).exec(function (err, estFacts) {
        if (err)
            res.send(err);
        estFactorsResponse.data = estFacts;
        res.json(estFactorsResponse);
    });
};

exports.createAEstimationFactor = function (req, res) {
    var newEstimationFactor = new EstimationFactor(req.body);
    newEstimationFactor.save(function (err, estFact) {
        if (err)
            res.send(err);
        res.json(newEstimationFactor);
    });
};

exports.readAEstimationFactor = function (req, res) {
    EstimationFactor.findById(req.params.estFactId, function (err, estFact) {
        if (err)
            res.send(err);
        res.json(estFact);
    });
};

exports.readEstimationFactorsByCatId = function (req, res) {
    EstimationFactor.find({ _category: req.params._id }).populate('_category', 'categoryName').exec(function (err, estFacts) {
        if (err)
            res.send(err);
        res.json(estFacts);
    });
};

exports.updateAEstimationFactor = function (req, res) {
    EstimationFactor.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, function (err, estFact) {
        if (err)
            res.send(err);
        res.json(estFact);
    });
};

exports.deleteAEstimationFactor = function (req, res) {
    EstimationFactor.remove({
        _id: req.body._id
    }, function (err, estimationFactor) {
        if (err)
            res.send(err);
        res.json({ message: 'EstimationFactor successfully deleted' });
    });
};