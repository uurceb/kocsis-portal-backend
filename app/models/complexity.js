var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ComplexitySchema   = new Schema({
        ObjectId: String,
        compName : String
});

module.exports = mongoose.model('Complexity', ComplexitySchema);