var Student = require('../models/student');
var express = require('express');
var router = express.Router();

router.get('/:id?', function (req, res, next) {

  if (req.params.id) {

    Student.getStudentByRollno(req.params.id, function (err, rows) {

      if (err) {
        res.json(err);
      }
      else {
        res.json(rows);
      }
    });
  }
  else {

    Student.getAllStudents(function (err, rows) {

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

  Student.addStudent(req.body, function (err, rows) {
    if (err) {
      res.json(err);
    }
    else {
      res.json(rows);
    }
  });
});


router.delete('/:id', function (req, res, next) {
  Student.deleteStudent(req.params.id, function (err, rows) {
    if (err) {
      res.json(err);
    }
    else {
      res.json(rows);
    }
  });
});

router.put('/:id', function (req, res, next) {
  Student.updateStudent(req.params.id, req.body, function (err, rows) {
    if (err) {
      res.json(err);
    }
    else {
      res.json(rows);
    }
  });
});
module.exports = router;    