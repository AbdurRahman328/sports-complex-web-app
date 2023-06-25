var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var memSchema = new Schema({

    uname: {
        type: String,
        required: true
    },
    sportId: {
        type: String,
        required: true
    },
    applydate: {
        type: String,
        required: true
    },
    fees: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('membershipDetails', memSchema);