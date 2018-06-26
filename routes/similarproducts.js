var User = require('../models/user');
var express = require('express');
var router = express.Router();

router.get('/:Fk_Cat_Id', function (req, res, next) {
    User.getProductsByCatId(req.params.Fk_Cat_Id, function (err, rows) {
    
      if (err) {
        res.json(err);
      }
      else {
        res.json(rows);
      }
    });
  });
  
  module.exports = router;