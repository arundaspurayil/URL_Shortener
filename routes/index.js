var express = require('express');
var router = express.Router();

let shorten = require('../controllers/shorten');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/:id',shorten.redirectId);

module.exports = router;
