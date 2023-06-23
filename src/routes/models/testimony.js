const mongoose = require('mongoose');

const testimonySchema = new mongoose.Schema({
    testimony: String
  });


const Testimony = mongoose.model('Testimony', testimonySchema)

module.exports = {Testimony}