var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var coachSchema = new Schema({

    coachId: {
        type: String,
        required: true
    },
    coachName: {
        type: String,
        required: true
    },
    coachSport: {
        type: String,
        required: true
    },
    coachPhone: {
        type: String,
        required: true
    },
    coachEmail: {
        type: String,
        required: true
    },
    coachSalary: {
        type: Number,
        required: true
    },
    coachImage:{
        type: String,
        required:true
    }
});

module.exports = mongoose.model('coachdetails', coachSchema);