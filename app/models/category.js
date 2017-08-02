var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var CategorySchema   = new Schema({
        ObjectId: String,
        categoryName : String
});

module.exports = mongoose.model('Category', CategorySchema);