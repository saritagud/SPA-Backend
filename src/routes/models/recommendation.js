const mongoose = require('mongoose');


const recommendationSchema = new mongoose.Schema({
    name: String,
    recommendation: String,
  });


const Recommendation = mongoose.model('Recommendation', recommendationSchema)

module.exports = {Recommendation}