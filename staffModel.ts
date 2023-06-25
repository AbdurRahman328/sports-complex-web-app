var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var staffSchema = new Schema({

    staffId: {
        type: String,
        required: true
    },
    staffName: {
        type: String,
        required: true
    },
    staffPhone: {
        type: Number,
        required: true
    },
    staffEmail: {
        type: String,
        required: true
    },
    staffSalary: {
        type: Number,
        required: true
    },
    staffImage: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('staffdetails', staffSchema);