const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const RegisterUser = require('./api/routes/register')


mongoose.connect('mongodb+srv://karthik:0mFIO3OJ87hemSus@node-rest-shop.a4rqb.mongodb.net/?retryWrites=true&w=majority',
{ useNewUrlParser:true }, () => console.log('db connected'))

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());;

app.use('/register', RegisterUser);

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message,
        }
    });
})

app.listen(4000, () => {
    console.log('server connected');

})