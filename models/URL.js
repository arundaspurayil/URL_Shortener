let mongoose = require('mongoose')
const { nanoid } = require('nanoid')

let urlSchema =  new mongoose.Schema({
    originalUrl: String,
    shortenedUrl: String
})

urlSchema.methods.setShortenedUrl = function(originalUrl){
    this.shortenedUrl = nanoid(5)
}
urlSchema.methods.getShortenedUrl = function(){
    return this.shortenedUrl
}
mongoose.model('URL', urlSchema)