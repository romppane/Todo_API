const express = require('express');
const app = express();
const port = 55555;
const bodyparser = require('body-parser');
const db = require('./db.js');
const todo = require('./routes/todo.js');
const priorities = require('./routes/priorities.js');

app.use(bodyparser.json());

// use route localhost:55555/todo/...
app.use('/todo', todo);
app.use('/priorities', priorities);


app.listen(port, () => console.log('Example app listening on port ${port}'));
