var User = require('../models/user');
var express = require('express');
var router = express.Router();

router.get('/:id', function (req, res, next) {

    
  
      User.getProfile(req.params.id, function (err, rows) {
  
        if (err) {
          res.json(err);
        }
        else {
          res.json(rows);
        }
      });
    
    
  });
  


router.post('/', function (req, res, next) {

  User.addLog(req.body, function (err, rows) {
    if (err) {
      res.json(err);
    }
    else {
      res.json(rows);
    }
  });
});


router.delete('/:id', function (req, res, next) {
  User.deleteLog(req.params.id, function (err, rows) {
    if (err) {
      res.json(err);
    }
    else {
      res.json(rows);
    }
  });
});

router.put('/:id', function (req, res, next) {
  User.updateLog(req.params.id, req.body, function (err, rows) {
    if (err) {
      res.json(err);
    }
    else {
      res.json(rows);
    }
  });
});
module.exports = router;