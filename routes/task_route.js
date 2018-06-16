var Task = require('../models/task');
var express = require('express');
var router = express.Router();

router.get('/:id?', function (req, res, next) {

  if (req.params.id) {

    Task.getTaskById(req.params.id, function (err, rows) {

      if (err) {
        res.json(err);
      }
      else {
        res.json(rows);
      }
    });
  }
  else {

    Task.getAllTasks(function (err, rows) {

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

  Task.addTask(req.body, function (err, rows) {
    if (err) {
      res.json(err);
    }
    else {
      res.json(rows);
    }
  });
});


router.delete('/:id', function (req, res, next) {
  Task.deleteTask(req.params.id, function (err, rows) {
    if (err) {
      res.json(err);
    }
    else {
      res.json(rows);
    }
  });
});

router.put('/:id', function (req, res, next) {
  Task.updateTask(req.params.id, req.body, function (err, rows) {
    if (err) {
      res.json(err);
    }
    else {
      res.json(rows);
    }
  });
});
module.exports = router;