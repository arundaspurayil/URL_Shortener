var express = require('express');
var router = express.Router();

let shorten = require('../controllers/shorten');

/* GET home page. */
router.post('/', shorten.shorten_url);

module.exports = router;
