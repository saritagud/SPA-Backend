const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose  = require('./src/dbConnection');
const routes = require('./src/routes/index');

const app = express();

const db = mongoose.connection;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/', routes);


app.listen(3000, () => {
    console.log('Sever on port 3000');
  });