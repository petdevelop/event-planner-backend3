var express = require('express');
var router = express.Router();
const User = require('../models/user');

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', (req, res, next) => {
  const {id, name} = req.body;

  User.findOneAndUpdate(
    {'name': name}, 
    {'name': name, 'id': id, 'source': 'facebook'}, 
    { upsert: true, new: true }, 
    (err, suc) => {
      if (err) { return next(err); }
      return res.json(suc);
    });
});

module.exports = router;
