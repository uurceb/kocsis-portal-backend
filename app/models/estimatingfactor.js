var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var EstimatingFactorSchema   = new Schema({
    	ObjectId: String,
        _category : {type:String,ref:'Category'},
        component : String,
        complexity : String,
        newOrModified : String,
        value:Number
});

module.exports = mongoose.model('EstimatingFactor', EstimatingFactorSchema);