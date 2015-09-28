var express = require('express');
var passport = require('passport');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/login', passport.authenticate('local'), function (req,res) {
  console.log(req);
  res.status(200).json({message:'login success'});
});

module.exports = router;
