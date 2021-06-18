const Courses = require('../models/courses')


exports.create = function(req, res, next) {

    var newcourses = new Courses({
        name: req.body.name,
        description: req.body.description
    });
    newcourses.save(function(err){
        if(err) res.status(400).json({error: err.message });    
        res.status(200).json(newcourses);
    });
}


exports.GetAll= function(req, res, next){
    Courses.find({}, function (err, courses) {
        res.status(200).json(courses);
    });
}

exports.GetbyId= function(req, res, next){
    Courses.find({_id: req.params.id}, function (err, courses) {
    res.status(200).json(courses);
});
}


exports.Delete = function(req, res, next){
    Courses.findByIdAndDelete(req.params.id, function(err){
        if (err) {
            res.status(400).json({error: err.message });
        }
        else{
          
        res.status(200).json({mensaje: "Course  Eliminado"});
        }
    })
}