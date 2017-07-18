var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var PhaseSchema   = new Schema({
    	ObjectId: String,
        _project : {type:String,ref:'Project'},
        pManagement : Number,
        analysis : Number,
        design : Number,
        dev : Number,
        unitTest : Number,
        intTest : Number,
        uat : Number,
        solArch : Number,
        codeMergeReg : Number
});

module.exports = mongoose.model('Phase', PhaseSchema);