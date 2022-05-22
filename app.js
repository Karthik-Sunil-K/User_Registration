const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose=require('mongoose');
const bodyParser =require('body-parser');
const RegisterUser= require('./api/routes/register')

app.use(morgan('dev'));
app.use(bodyParser.json());


app.use('/register',RegisterUser);



app.listen(4000, () => {
    console.log('server connected');

})