var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var EstimatingFactorSchema   = new Schema({
    	ObjectId: String,
        _project : {type:String,ref:'Project'},
        component : String,
        complexity : String,
        newOrModified : String,
        value:Number
});

module.exports = mongoose.model('EstimatingFactor', EstimatingFactorSchema);