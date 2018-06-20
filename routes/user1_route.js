var User = require('../models/user');
var express = require('express');
var router = express.Router();


router.post('/', function (req, res, next) {

  User.getLogById( req.body, function (err, rows) {
    if (err) {
      res.json(err);
    }
    else {
      res.json(rows);
    }
  });
  });  

  router.put('/:emailId', function (req, res, next) {
  User.changePassword( req.params.emailId,req.body, function (err, rows) {
    if (err) {
      res.json(err);
    }
    else {
      res.json(rows);
    }
  });
});
router.get('/', function (req, res, next) {
  User.getAllCategory(function (err, rows) {
  
    if (err) {
      res.json(err);
    }
    else {
      res.json(rows);
    }
  });
});


router.get('/:Fk_Cat_Id', function (req, res, next) {
  User.getProductById(req.params.Fk_Cat_Id, function (err, rows) {
  
    if (err) {
      res.json(err);
    }
    else {
      res.json(rows);
    }
  });
});

module.exports = router;