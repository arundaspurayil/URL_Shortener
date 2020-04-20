let mongoose = require('mongoose')
let URL = mongoose.model('URL')

const { validationResult } = require('express-validator');

async function urlExists(url){
    let url = await URL.findOne({originalUrl: value})
        
    if(url !== null){
        return null
    }
    return url
    
}

exports.shorten_url = async function(req, res, next){
    const errors = await validationResult(req);
    if(errors.isEmpty()){
        res.render('index',{errors: errors.errors})
    }

    let urlValue = req.body.url
    if(await urlExists(urlValue) == null){
        let url = new URL()

        url.originalUrl = urlValue;
        url.setShortenUrl(urlValue)

        url.save(err => {
            if(err){
                return next(err)
            }
            res.redirect('/')
        })
    }else{

    }


    
    res.send(req.body.url)
}