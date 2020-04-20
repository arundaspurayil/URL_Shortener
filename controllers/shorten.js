let mongoose = require('mongoose')
let URL = mongoose.model('URL')

const { validationResult } = require('express-validator');

exports.shorten_url = async function(req, res, next){
    const errors = await validationResult(req);
    if(!errors.isEmpty()){
        
    }
    res.send(req.body.url)
}