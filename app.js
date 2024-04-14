const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/bookwebsitedatabase',{}).then(()=>{
    console.log("Database connected");
})

app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use(express.static("public"));

app.set('view engine',"ejs");
app.use('/',require('./server/routes/routes'));



app.listen(10000)