const mongoose = require('mongoose');


const reservationSchema = new mongoose.Schema({
    name: String,
    email: String,
    service: String,
    price: Number,
    hour: String,
    phone: Number,
  });


const Reservation = mongoose.model('Reservation', reservationSchema)

module.exports = {Reservation}