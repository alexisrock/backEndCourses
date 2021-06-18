const Enrollment = require('../models/enrollments')



exports.create = function(req, res,  next){
    var newenrollment = new Enrollment({
        course: req.body.course,
        user: req.body.user,
        status: req.body.status,
    });
    newenrollment.save(function(err){
        if(err) res.status(400).json({error: err.message });    
        res.status(200).json(newenrollment);
    });
}


exports.GetAll= function(req, res, next){
    Enrollment.find({}, function (err, enrollment) {
        res.status(200).json(enrollment);
    });
}


exports.GetbyId= function(req, res, next){
    Enrollment.find({_id: req.params.id}, function (err, enrollment) {
    res.status(200).json(enrollment);
});
}


exports.Delete = function(req, res, next){
    Enrollment.findByIdAndDelete(req.params.id, function(err){
        if (err) {
            res.status(400).json({error: err.message });
        }
        else{
          
        res.status(200).json({mensaje: "Enrollment  Eliminado"});
        }
    })
}