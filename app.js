const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const env = require('dotenv').config().parsed;

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
};

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.get('/health', cors(corsOptions), (req, res) => {
  res.json({ now: new Date().toLocaleString() });
});

module.exports = app;
