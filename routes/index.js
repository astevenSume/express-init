var express = require('express');
var router = express.Router();
var util= require('util');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var Hi=require('./index/Hi');
router.get('/hi',Hi.sayHi);
router.get('/hi/:username',Hi.dosay);
router.get('/hi/:username',Hi.sayHi);

module.exports = router;
