const mongoose = require('mongoose');


const promotionSchema = new mongoose.Schema({
    discount: Number,
    service: String,
  });


const Promotion = mongoose.model('Promotion', promotionSchema)

module.exports = {Promotion}