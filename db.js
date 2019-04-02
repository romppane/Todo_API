const mysql = require('mysql');


// Create connection, connect to it and export it for other modules.
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

module.exports = db;
