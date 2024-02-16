const express = require('express');
const app = express();
const mysql= require('mysql');
const cors = require('cors');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'banco',
});

app.use(express.json());
app.use(cors());

app.post()