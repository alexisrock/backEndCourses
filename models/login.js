var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let LoginSchema = new Schema({

    username: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    passwordResetToken: String,
    passwordResetTokenExpires: Date
});


module.exports = mongoose.model('login', LoginSchema);