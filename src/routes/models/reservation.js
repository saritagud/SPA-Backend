const mongoose = require('mongoose');


const reservationSchema = new mongoose.Schema({
    name: String,
    email: String,
    service: String,
    schedule: String,
    phone: Number,
  });


const Reservation = mongoose.model('Reservation', reservationSchema)

module.exports = {Reservation}