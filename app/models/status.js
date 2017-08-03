var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var StatusSchema   = new Schema({
        ObjectId: String,
        statusName : String,
        color:String
});

module.exports = mongoose.model('Status', StatusSchema);