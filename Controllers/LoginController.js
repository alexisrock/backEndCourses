var Login = require('../models/login')
const jwt = require('jsonwebtoken');


exports.autenticacte=function(req, res,  next){
    Login.findone({username: req.body.username}, function (err, login) {
        if(err){
            next(err);                
        }else{
            if(login===null){ return   res.status(401).json({status: 'error', message: 'Usuario no encontrado'});}
            if(login!=null && req.body.password==login.password){
                login.save(function(err, usuario){
                    const token = jwt.sign({id: login._id}, req.app.get('secretKey'), { expiresIn: '1d'});
                    res.status(200).json({ message: 'Usuario encontrado', data: {usuario: login, token:token}});
                });

            }

        }        
    })
}

exports.create = function(req, res,  next){
    try {

        var newlogin = new Login({
            username:  req.body.username,
            password: req.body.password

        });

        newlogin.save(function(err){
            if(err) res.status(400).json({error: err.message });    
            res.status(200).json(newlogin);
        });
 

    } catch (error) {
        res.status(400).json({
            error: error.message
        });
    }



}

