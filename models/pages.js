var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let PagesSchema = new Schema({
    course: {type: mongoose.Schema.Types.ObjectId, ref: 'Course'},
    content: {
        type: String,
        required: true,
        trim: true
    }

});


module.exports = mongoose.model('Pages', PagesSchema);