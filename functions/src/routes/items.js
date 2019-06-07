const express = require('express');
const router = express.Router();
const Item = require('../models/item');
var ObjectId = require('mongoose').Types.ObjectId;

/* GET items listing. */
router.get('/:eventId', (req, res, next) => {
  const eventId = req.params.sId;

  Item.find({ eventId: new ObjectId(eventId) }, (err, list) => {
    if (err) return next(err);
    res.json(list);
  });
});

router.post('/', (req, res, next) => {
  const item = new Item({...req.body});

  item.save((err, item) => {
    if (err) { return next(err); };
    res.json(item);
  });
});

router.delete('/:itemId', (req, res, next) => {
  const itemId = req.params.itemId;
  
  Item.deleteOne({ _id: new ObjectId(itemId) }, (err, suc) => {
    if (err) { return next(err); };
    res.json(suc);
  });
});

module.exports = router;
