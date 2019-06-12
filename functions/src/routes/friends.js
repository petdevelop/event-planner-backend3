const express = require('express');
const router = express.Router();
const Friend = require('../models/friend');
const ObjectId = require('mongoose').Types.ObjectId;

router.get('/:userId', (req, res, next) => {
  const userId = req.params.userId;

  Friend.find({ userId: userId }, (err, list) => {
    if (err) return next(err);
    res.json(list);
  });
});

router.post('/list', async (req, res, next) => {
    Friend.collection.insert(req.body, (err, docs) => {
        if (err) { return next(err); };
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
