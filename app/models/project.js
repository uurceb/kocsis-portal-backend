var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ProjectSchema   = new Schema({
        ObjectId: String,
        _category:{type:String,ref:'Category'},
        projectName : String,
        customer : String,
        description : String,
        _status:{type:String,ref:'Status'}
});

module.exports = mongoose.model('Project', ProjectSchema);