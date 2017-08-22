'use strict';

var InventoryItem = require('../models/inventoryItem');
var mongoose = require('mongoose');

exports.listAllInventoryItems = function (req, res) {
    InventoryItem.find({}).populate('_project', 'projectName').populate('_estfactor').exec(function (err, inventoryItems) {
        if (err)
            res.send(err);
        res.json(inventoryItems);
    });
};

exports.createAnInventoryItem = function (req, res) {
    var newInventoryItem = new InventoryItem(req.body);
    newInventoryItem.save(function (err, inventoryItem) {
        if (err)
            res.send(err);
        res.json(inventoryItem);
    });
};
exports.readInventoryItemsByProjectId = function (req, res) {
    InventoryItem.find({ _project: req.params._id }).populate('_estfactor').populate('_project').exec(function (err, inventoryItems) {
        if (err)
            res.send(err);
        res.json(inventoryItems);
    });
};
exports.updateAnInventoryItem = function (req, res) {
    InventoryItem.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, function (err, inventoryItem) {
        if (err)
            res.send(err);
        res.json(inventoryItem);
    });
};

exports.listInventoryItemsByPageAndLimit = function (req, res) {
    var inventoryItemResponse = { pageCount: 0, data: [] };

    InventoryItem.count(req.params._id === "*" ? {} : { _project: req.params._id }, function (err, count) {
        inventoryItemResponse.pageCount = Math.ceil(count / parseInt(req.params.itemCount));
    });
    InventoryItem.find(req.params._id === "*" ? {} : { _project: req.params._id }).populate('_estfactor').populate('_project', 'projectName').skip((parseInt(req.params.pageNo) - 1) * parseInt(req.params.itemCount)).limit(parseInt(req.params.itemCount)).exec(function (err, inventoryItems) {
        if (err)
            res.send(err);
        inventoryItemResponse.data = inventoryItems;
        res.json(inventoryItemResponse);
    });
};

exports.deleteAnInventoryItem = function (req, res) {
    InventoryItem.remove({
        _id: req.body._id
    }, function (err, inventoryItem) {
        if (err)
            res.send(err);
        res.json({ message: 'InventoryItem successfully deleted' });
    });
};