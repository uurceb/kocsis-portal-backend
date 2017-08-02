var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var InventoryItemSchema   = new Schema({
        ObjectId: String,
        _project : {type:String,ref:'Project'},
        _estfactor : {type:String,ref:'EstimatingFactor'},
        shortDescription: String,
        remarks:String,
        inOutScope: String
});

module.exports = mongoose.model('InventoryItem', InventoryItemSchema);