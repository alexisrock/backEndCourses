const Users = require('../models/Users')



exports.create = function(req, res, next){
    var newuser = new Users({
        firstname: req.body.firstname,
        lastname: req.body.lastname
    });
    newuser.save(function(err){
        if(err) res.status(400).json({error: err.message });    
        res.status(200).json(newuser);
    });
}


exports.GetAll= function(req, res, next){
        Users.find({}, function (err, Users) {
            res.status(200).json(Users);
        });
}

exports.GetbyId= function(req, res, next){
    Users.find({_id: req.params.id}, function (err, Users) {
        res.status(200).json(Users);
    });
}

exports.Delete= function(req, res, next){

    Users.findByIdAndDelete(req.params.id, function(err){
        if (err) {
            res.status(400).json({error: err.message });
        }
        else{
          
        res.status(200).json({mensaje: "Usuario  Eliminado"});
        }
    })


}





