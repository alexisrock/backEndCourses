var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let Userschema = new Schema({
    firstname: {
        type: String,
        required: true,
        trim: true
    },
    lastname:{
        type: String,
        required: true,
        trim: true
    }

});

module.exports = mongoose.model('Users', Userschema);