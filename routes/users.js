var express = require('express');
var router = express.Router();

router.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('aa');
  // res.send('respond with a resource');
});

router.get('/asynow', function(req, res, next){
  console.log(req.params);
  console.log(req.query);
  res.send({tips: 'tip title now'});
});
router.post('/asynow', function(req, res, next){
  console.log(req.body.way);
  res.send({tips: 'aaadd'});
});

router.get('/asynow_temp', function(req, res, next){
  res.send('<h1>emp {{tips}}</h1>');
});

module.exports = router;
