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
    InventoryItem.find({ _project: req.params._id }).populate('_estfactor').exec( function (err, inventoryItems) {
        if (err)
            res.send(err);
        res.json(inventoryItems);
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