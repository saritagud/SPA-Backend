const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
    schedule: String,
  });


const Schedule = mongoose.model('Schedule', scheduleSchema)

module.exports = {Schedule}