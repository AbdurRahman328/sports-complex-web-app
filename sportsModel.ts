var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var sportSchema = new Schema({

    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    fees: {
        type: Number,
        required: true
    },
    image:{
        type: String,
        required:true
    }
});

module.exports = mongoose.model('sportsdetails', sportSchema);