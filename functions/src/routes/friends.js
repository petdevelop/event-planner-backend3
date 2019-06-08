const express = require('express');
const router = express.Router();
const Friend = require('../models/friend');

/* GET friends listing. */
router.get('/', (req, res, next) => {
  Friend.find((err, list) => {
    if (err) return next(err);
    res.json(list);
  });
});

router.post('/list', (req, res, next) => {
    Friend.collection.insert(req.body, (err, docs) => {
        if (err) { if (err) { next(err); };} 
        res.json(docs);
    });
});

router.post('/', (req, res, next) => {
    const friend = new Friend({...req.body});
    friend.save((err, friend) => {
      if (err) { next(err); };
      res.json(friend);
    });
  });

module.exports = router;
