'use strict';

var Comment = require('../models/comment');
var mongoose = require('mongoose');

exports.listAllComments = function (req, res) {
    Comment.find({}).populate('_user','username').exec(function (err, complexities) {
        if (err)
            res.send(err);
        res.json(complexities);
    });
};

exports.readCommentsByObjectId = function (req, res) {
    Comment.find({ _object: req.params._id }).populate('_user','username').exec( function (err, comments) {
        if (err)
            res.send(err);
        res.json(comments);
    });
};

exports.createAComment = function (req, res) {
    var newComment = new Comment(req.body);
    newComment.save(function (err, comment) {
        if (err)
            res.send(err);
        res.json(comment);
    });
};

exports.deleteAComment = function (req, res) {
    Comment.remove({
        _id: req.body._id
    }, function (err, comment) {
        if (err)
            res.send(err);
        res.json({ message: 'Comments successfully deleted' });
    });
};