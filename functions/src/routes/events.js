var express = require('express');
var router = express.Router();

var Event = require('../models/event');

/* GET events listing. */
router.get('/', function(req, res, next) {
  Event.find((err, list) => {
    if (err) return next(err);
    res.json(list);
  });
});

module.exports = router;
