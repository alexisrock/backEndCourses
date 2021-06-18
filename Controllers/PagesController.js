const Pages = require('../models/pages');



exports.create = function(req, res,  next){
    var newpages = new Pages({
        course: req.body.course,
        content: req.body.content     
    });
    newpages.save(function(err){
        if(err) res.status(400).json({error: err.message });    
        res.status(200).json(newpages);
    });
}


exports.GetAll= function(req, res, next){
    Pages.find({}, function (err, pages) {
        res.status(200).json(pages);
    });
}


exports.GetbyId= function(req, res, next){
    Pages.find({_id: req.params.id}, function (err, pages) {
    res.status(200).json(pages);
});
}


exports.Delete = function(req, res, next){
    Pages.findByIdAndDelete(req.params.id, function(err){
        if (err) {
            res.status(400).json({error: err.message });
        }
        else{
          
        res.status(200).json({mensaje: "Pages  Eliminado"});
        }
    })
}