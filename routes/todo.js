const db = require('../db.js');
const express = require('express');
const router = express.Router();
const joi = require('joi');


// Create seperate schemas: Post has required fields where as put doesn't
const postSchema = joi.object().keys({
  what: joi.string().min(2).max(100).required(),
  who: joi.string().min(1).max(40).required(),
  in_progress: joi.boolean(),
  done: joi.boolean(),
  due: joi.string(),
  priority: joi.number().integer().min(1).max(5).required()
}).options({stripUnknown : true});

const putSchema = joi.object().keys({
  what: joi.string().min(2).max(100),
  who: joi.string().min(1).max(40),
  in_progress: joi.boolean(),
  done: joi.boolean(),
  due: joi.string(),
  priority: joi.number().integer().min(1).max(5)
}).options({stripUnknown : true});

// get all
router.get('/', (req, res) => {
  db.query('SELECT * FROM todo', (err, result, fields) => {
    if(err) {
      console.log(err);
      res.sendStatus(500);
    }
    else {
      res.send(result);
    }
  })
});

// post new
router.post('/', (req, res) => {
  joi.validate(req.body, postSchema, (err, result) => {
    if(err) {
      console.log(err);
      res.sendStatus(400);
    }
    else {
      db.query('INSERT INTO todo SET ?', result, (err, results) => {
        if(err) {
          console.log(err);
          res.sendStatus(500);
        }
        else {
          res.status(201).send(result);
        }
      })
    }
  })

});

// get single todo
const single = router.get('/:id', (req, res) => {
  db.query('SELECT * FROM todo WHERE id = ?', req.params.id, (err, result, fields) => {
    if(err){
      console.log(err);
      res.sendStatus(400);
    }
    else if (result[0] === undefined) {
      res.sendStatus(404);
    }
    else {
      res.send(result[0]);
    }
  })
});

// update todo
router.put('/:id', (req, res) => {
  joi.validate(req.body, putSchema, (err, result) => {
    if(err) {
      console.log(err);
      res.sendStatus(400);
    }
    else {
      db.query('UPDATE todo SET ? where id = ?', [result, req.params.id], (err, rows, fields) => {
        if(err) {
          console.log(err);
          res.sendStatus(500);
        }
        else {
          res.send(result);
        }
      })
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
    else if (rows.affectedRows == 0) {
      res.sendStatus(204);
    }
    else {
      res.sendStatus(200);
    }
  })
});

module.exports = router;
