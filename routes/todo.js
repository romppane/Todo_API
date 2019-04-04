const db = require('../db.js');
const express = require('express');
const router = express.Router();

// get all
router.get('/', (req, res) => {
  db.query('SELECT * FROM todo', (err, result, fields) => {
    if(err) {
      console.log(err);
      res.sendStatus(400);
    }
    else {
      res.send(result);
    }
  })
});

// post new
router.post('/', (req, res) => {
  db.query('INSERT INTO todo SET ?', req.body, (err, rows, fields) => {
    if(err) {
      console.log(err);
      res.sendStatus(400);
    }
    else {
      res.sendStatus(200);
    }
  })
});

// get single todo
router.get('/:id', (req, res) => {
  db.query('SELECT * FROM todo WHERE id = ?', req.params.id, (err, result, fields) => {
    if(err){
      console.log(err);
      res.sendStatus(400);
    }
    else {
      res.send(result[0]);
    }
  })
});

// update todo
router.put('/:id', (req, res) => {
  db.query('UPDATE todo SET ? where id = ?', [req.body, req.params.id], (err, rows, fields) => {
    if(err) {
      console.log(err);
      res.sendStatus(400);
    }
    else {
      res.sendStatus(200);
    }
  })
});

// delete todo
router.delete('/:id', (req, res) => {
  db.query('DELETE FROM todo WHERE id = ?', req.params.id, (err, rows, fields) => {
    if(err) {
      console.log(err);
      res.sendStatus(400);
    }
    else {
      res.sendStatus(200);
    }
  })
});

module.exports = router;
