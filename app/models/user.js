var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var UserSchema   = new Schema({
        ObjectId: String,
        name:String,
        username : String,
        password : String,
        title : String
});

module.exports = mongoose.model('User', UserSchema);