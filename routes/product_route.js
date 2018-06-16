var Product = require('../models/product');
var express = require('express');
var router = express.Router();

router.get('/:id?', function (req, res, next) {

  if (req.params.id) {

    Product.getProductById(req.params.id, function (err, rows) {

      if (err) {
        res.json(err);
      }
      else {
        res.json(rows);
      }
    });
  }
  else {

    Product.getAllProducts(function (err, rows) {

      if (err) {
        res.json(err);
      }
      else {
        res.json(rows);
      }

    });
  }
});


router.post('/', function (req, res, next) {

  Product.addProduct(req.body, function (err, rows) {
    if (err) {
      res.json(err);
    }
    else {
      res.json(rows);
    }
  });
});


router.delete('/:id', function (req, res, next) {
  Product.deleteProduct(req.params.id, function (err, rows) {
    if (err) {
      res.json(err);
    }
    else {
      res.json(rows);
    }
  });
});

router.put('/:id', function (req, res, next) {
  Product.updateProduct(req.params.id, req.body, function (err, rows) {
    if (err) {
      res.json(err);
    }
    else {
      res.json(rows);
    }
  });
});
module.exports = router;