var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const history = require('connect-history-api-fallback');

//router연결
const apiMemoRouter = require('./routes/apiMemo') ;


var app = express();

//history모드 사용
app.use(history());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/memo',apiMemoRouter);

module.exports = app;
