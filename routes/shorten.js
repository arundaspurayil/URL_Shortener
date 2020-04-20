var express = require('express');
var router = express.Router();
let validator = require("../validator")

let shorten = require('../controllers/shorten');

/* GET home page. */
router.post('/', validator.validURL, shorten.shorten_url);

module.exports = router;
