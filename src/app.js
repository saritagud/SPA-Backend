const express = require('express');
const cors = require('cors');
const mongoose  = require('./dbConnection')
const routes = require('./routes/index')
const app = express();

const db = mongoose.connection;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', routes);

app.listen(3000, () => {
    console.log('Sever on port 3000');
  });