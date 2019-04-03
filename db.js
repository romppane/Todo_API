require('dotenv').config();
const mysql = require('mysql');


// Create connection, connect to it and export it for other modules.

// Credentials stored in .env file
const db = mysql.createConnection({
  host : process.env.HOST,
  user : process.env.USER,
  password : process.env.PASSWORD,
  database : process.env.DB
})

db.connect((err) => {
    if (err) throw err;
    console.log('MySql Connected...');
});

module.exports = db;
