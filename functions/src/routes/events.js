const express = require('express');
const router = express.Router();
const Event = require('../models/event');

/* GET events listing. */
router.get('/', (req, res, next) => {
  Event.find((err, list) => {
    if (err) return next(err);
    res.json(list);
  });
});

router.post('/', (req, res, next) => {
  const event = new Event({...req.body});
  event.save((err, event) => {
    if (err) { next(err); };
    res.json(event);
  });
});

module.exports = router;
