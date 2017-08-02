var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ComponentSchema   = new Schema({
        ObjectId: String,
        compName : String,
        _category:{type:String,ref:'Category'}
});

module.exports = mongoose.model('Component', ComponentSchema);