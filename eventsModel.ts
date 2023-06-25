var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventsSchema = new Schema({


    eventId: {
        type: String,
        required: true
    },
    eventName: {
        type: String,
        required: true
    },
    eventSports: {
        type: String,
        required: true
    },
    eventLoc: {
        type: String,
        required: true
    },
    eventDate: {
        type: String,
        required: true
    },
    eventFees:{
        type: Number,
        required:true
    }
});

module.exports = mongoose.model('eventsdetails', eventsSchema);
