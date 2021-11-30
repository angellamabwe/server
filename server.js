require('dotenv').config();
const mysql = require('mysql');
const express = require('express');
const app = express();


// create connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'my_db'
});

// connect
db.connect((err) => {
    if (err) throw err;
    console.log(`Connected to MySQL`);
});

app.listen(process.env.PORT, () => console.log(`Listening on port ${PORT}`));