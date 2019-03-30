const mysql = require('mysql');
const express = require('express');
const app = express();
const port = 55555;

// get all
app.get('/', (req, res) => res.send({
  Hello : "World"
}));

// post new
app.post('/', (req, res) => {
  res.sendStatus(200)
});

// update title
app.put('/', (req, res) => {
  res.sendStatus(200)
});
// update ready state

// delete
app.delete('/', (req, res) => {
  res.sendStatus(200)
});

app.listen(port, () => console.log('Example app listening on port ${port}'));
