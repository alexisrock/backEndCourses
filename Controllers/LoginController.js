var Login = require('../models/login')
const jwt = require('jsonwebtoken');


exports.autenticate=function(req, res,  next){
    Login.find({username: req.body.username}, function (err, logininfo) {
        if(err){
            next(err);                
        }else{
            console.log('entro');
    
            if(logininfo===null){ return   res.status(401).json({status: 'error', message: 'Usuario no encontrado'});}
            console.log('paass body: '+req.body.password);
            console.log('paass info: '+logininfo[0].password);
       
            if(req.body.password===logininfo[0].password){
                console.log('paass true');
                logininfo[0].save(function(err, login){
                    const token = jwt.sign({id: login._id}, req.app.get('secretKey'), { expiresIn: '1d'});
                    res.status(200).json({ message: 'Usuario encontrado', data: {login: login, token:token}});
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

