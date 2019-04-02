const mysql = require('mysql');
const express = require('express');
const app = express();
const port = 55555;
const bodyparser = require('body-parser')

app.use(bodyparser.json());

// Create connection
const db = mysql.createConnection({
  host : 'localhost',
  user : 'todo',
  password : '038hrnfjkonASFgfv3124ASDF',
  database : 'todoDB'
})

db.connect((err) => {
    if (err) throw err;
    console.log('MySql Connected...');
});

// get all
app.get('/', (req, res) => {
  db.query('SELECT * FROM todo', (err, result, fields) => {
    if(err) throw err;
    res.send(result)
  })
});

// post new
app.post('/', (req, res) => {
  db.query('INSERT INTO todo SET ?', req.body, (err, rows, fields) => {
    if(err) throw err;
      res.sendStatus(200)
  })
});

// update todo
app.put('/:id', (req, res) => {
  db.query('UPDATE todo SET ? where id = ?', [req.body, req.params.id], (err, rows, fields) => {
    if(err) throw err;
    res.sendStatus(200)
  })
});

// delete todo
app.delete('/:id', (req, res) => {
  db.query('DELETE FROM todo WHERE id = ?', req.params.id, (err, rows, fields) => {
    if(err) throw err;
    res.sendStatus(200)
  })
});

app.listen(port, () => console.log('Example app listening on port ${port}'));
