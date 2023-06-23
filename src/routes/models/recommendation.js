const mongoose = require('mongoose');


const recommendationSchema = new mongoose.Schema({
    recommendation: String,
  });


const Recommendation = mongoose.model('Recommendation', recommendationSchema)

module.exports = {Recommendation}