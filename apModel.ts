var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var apSchema = new Schema({


    apemail: {
        type: String,
        required: true
    },
    apname: {
        type: String,
        required: true
    },
    apeventname: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('eventregdetails', apSchema);
