const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose=require('mongoose');
const bodyParser =require('body-parser');
const GeneralEvents= require('./api/routes/general')

app.use(morgan('dev'));
app.use(bodyParser.json());


app.use('/events',GeneralEvents);





app.listen(4000, () => {
    console.log('server connected');

})