const { check } = require('express-validator');

exports.validURL = [
    check('url','Enter a valid URL.').isURL(),
]