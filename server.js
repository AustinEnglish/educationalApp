var express = require('express');
var logger = require('morgan');
const bodyParser    = require('body-parser');
var usersRouter = require('./routes/users');
require('./config/db')

var app = express();


const PORT = 5000
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));

app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/user', usersRouter);

module.exports = app;