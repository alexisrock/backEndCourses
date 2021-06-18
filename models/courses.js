var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let CourseSchema =  new Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    description:{
        type: String,
        required: true,
        trim: true
    },

});

module.exports = mongoose.model('Course', CourseSchema);