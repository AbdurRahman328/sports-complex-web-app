var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var query = new Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    query: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('query', query);