var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 
var custSchema = new Schema({
 
   username: {
        type: String ,
        required: true
    } ,
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    type:{
        type:String,
        required:true
    }
 
});
 
module.exports = mongoose.model('CustomerLoginDetails', custSchema);