var User = require('../models/user');
var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {

    
  
      User.getAllProducts(function (err, rows) {
  
        if (err) {
          res.json(err);
        }
        else {
          res.json(rows);
        }
  
      });
    
  });

  router.get('/:Id', function (req, res, next) {
    User.getProductDescription(req.params.Id, function (err, rows) {
    
      if (err) {
        res.json(err);
      }
      else {
        res.json(rows);
      }
    });
  });


  module.exports = router;