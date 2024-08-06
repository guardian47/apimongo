const express  = require('express')
const mongoose = require('mongoose')
const app = express()
app.use(express.json);
const start = () =>{
    console.log('Server is alive')
}

app.listen(3000, start);
const routes = require('./routes.js');
app.use('api',routes)