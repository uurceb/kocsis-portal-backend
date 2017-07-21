var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ComponentSchema   = new Schema({
        ObjectId: String,
        compName : String
});

module.exports = mongoose.model('Component', ComponentSchema);