var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var stadiumSchema = new Schema({

    stadiumId: {
        type: String,
        required: true
    },
    stadiumName: {
        type: String,
        required: true
    },
    stadiumSeat: {
        type: Number,
        required: true
    },
    stadiumSport: {
        type: String,
        required: true
    },
    stadiumDesc: {
        type: String,
        required: true
    },
    stadiumImage: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('stadiumdetails', stadiumSchema);

