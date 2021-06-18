var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let EnrollmentsSchema = new Schema({

    course: {type: mongoose.Schema.Types.ObjectId, ref: 'Course'},
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'Users'},
    status: {
        type: String,
        required: true
    }
})



module.exports = mongoose.model('Enrollments', EnrollmentsSchema);