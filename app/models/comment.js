var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var CommentSchema   = new Schema({
        ObjectId: String,
        _user:{type:String,ref:'User'},
        _object:String,
        text : String
});

module.exports = mongoose.model('Comment', CommentSchema);