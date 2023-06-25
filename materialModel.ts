var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var materialSchema = new Schema({

    materialId: {
        type: String,
        required: true
    },
    materialName: {
        type: String,
        required: true
    },
    materialCount: {
        type: Number,
        required: true
    },
    materialSport: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('materialdetails', materialSchema);