let mongoose = require('mongoose')
import { nanoid } from 'nanoid'

let URLSchema = new mongoose.schema({
    originalUrl: String,
    shortenedUrl: String
})

URLSchema.methods.setShortenedUrl = function(originalUrl){
    this.shortenedUrl = nanoid(5)
}

mongoose.model('URL', URLSchema)