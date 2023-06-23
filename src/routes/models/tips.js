const mongoose = require('mongoose');

const tipSchema = new mongoose.Schema({
    tip: String
  });


const Tips = mongoose.model('Tips', tipSchema)

module.exports = {Tips}