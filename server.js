require('dotenv').config();
const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const db = require('./db.js');
const todo = require('./routes/todo.js');
const priorities = require('./routes/priorities.js');
const port = process.env.PORT;

app.use(bodyparser.json());

// set routes after localhost:55555
app.use('/todo', todo);
app.use('/priorities', priorities);


app.listen(port, () => console.log('App listening on port %s', port));
