let mongoose = require('mongoose')
let URL = mongoose.model('URL')
const { check } = require('express-validator');

exports.validURL = [
    check('url','Enter a valid URL.').isURL(),
]