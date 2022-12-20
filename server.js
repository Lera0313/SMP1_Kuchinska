//server.js
//simple routing
const express = require('express');
const app = express();
require('dotenv').config();

app.get("/", (req, res) => {
    res.send({message: process.env.HELLO});
});
app.get("/dotenv", (req, res)  =>{

    res.send({welcome_text: process.env.WELCOME_TEXT, year: process.env.YEAR});
});

module.exports = app;
