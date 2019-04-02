const db = require('../db.js');
const express = require('express');
const router = express.Router();

// Table contains meanings for the priorities used in todo Table
// 1 = Very Low ... 5 = Very High

// get all priorities
router.get('/', (req, res) => {
  db.query('SELECT * FROM priorities', (err, result, fields) => {
    if(err){
      console.log(err);
      res.sendStatus(400);
    }
    else {
      res.send(result);
    }
  })
});

// get priority by id
router.get('/:id', (req, res) => {
  db.query('SELECT * FROM priorities WHERE id = ?', req.params.id, (err, result, fields) => {
    if(err){
      console.log(err);
      res.sendStatus(400);
    }
    else {
      res.send(result);
    }
  })
});
module.exports = router;
