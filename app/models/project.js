var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ProjectSchema   = new Schema({
        ObjectId: String,
        projectName : String,
        customer : String,
        description : String
});

module.exports = mongoose.model('Project', ProjectSchema);