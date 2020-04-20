let mongoose = require('mongoose')
let nanoid =require('nanoid')

let urlSchema =  new mongoose.Schema({
    originalUrl: String,
    shortenedUrl: String
})

urlSchema.methods.setShortenedUrl = function(originalUrl){
    this.shortenedUrl = nanoid(5)
}

mongoose.model('URL', urlSchema)