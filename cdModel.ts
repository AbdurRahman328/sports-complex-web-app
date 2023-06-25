var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var customerSchema = new Schema({

    customerName: {
        type: String,
        required: true
    },
    customerEmail: {
        type: String,
        required: true
    },
    customerPhone: {
        type: String,
        required: true
    },
    customerCity: {
        type: String,
        required: true
    },
    customerState: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('cddetails', customerSchema);