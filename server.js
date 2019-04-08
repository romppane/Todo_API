require('dotenv').config();
let start = false;
if(process.env.SERVER_PORT && process.env.DB_HOST && process.env.DB_USER && process.env.DB_PASSWORD && process.env.DB_NAME) {
  start = true;
}
else {
  console.log("Environmental variable(s) not set, check README for instructions.")
}

// only start if all env variables are set
if(start) {
  const express = require('express');
  const app = express();
  const bodyparser = require('body-parser');
  const db = require('./db.js');
  const todo = require('./routes/todo.js');
  const priorities = require('./routes/priorities.js');
  const port = process.env.SERVER_PORT;

  app.use(bodyparser.json());

  // set routes after localhost:55555
  app.use('/todo', todo);
  app.use('/priorities', priorities);


  app.listen(port, () => console.log('App listening on port %s', port));
}
