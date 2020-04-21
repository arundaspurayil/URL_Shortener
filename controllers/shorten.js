let mongoose = require('mongoose')
let URL = mongoose.model('URL')

const { validationResult } = require('express-validator');

async function urlExists(value){
    let url = await URL.findOne({originalUrl: value})
        
    if(url == null){
        return null
    }
    return url
    
}
async function shortIdExists(value){
    let url = await URL.findOne({shortenedUrl: value})
        
    if(url == null){
        return null
    }
    return url
    
}
exports.redirectId = async function(req, res ,next){
    let shortId = req.params.id
    let url = await shortIdExists(shortId)

    if(url == null){
        //Invalid page
    }else{
        res.redirect(url.originalUrl)
    }
}


exports.shorten_url = async function(req, res, next){
    const errors = await validationResult(req);
    if(!errors.isEmpty()){

        return res.send({error: true, msg: "Please enter a valid URL."})

    }

    let urlValue = req.body.url
    let url = await urlExists(urlValue)

    if( url === null){
        url = new URL()

        url.originalUrl = urlValue;
        url.setShortenedUrl(urlValue)

        url.save(err => {
            if(err){
                return next(err)
            }
            //res.render('index', {errors: {}, url: url.getShortenedUrl()})
            res.send({error:false, msg: req.get('host')+'/'+url.getShortenedUrl()})

        })
    }else{
        //res.render('index', {errors:{}, url: url.shortenedUrl})
        res.send({error:false, msg: req.get('host')+'/'+url.shortenedUrl})
    }

}