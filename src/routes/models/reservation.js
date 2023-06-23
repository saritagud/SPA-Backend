const mongoose = require('mongoose');


const reservationSchema = new mongoose.Schema({
    name: String,
    email: String,
    service: String,
    hour: String,
    phone: number,
  });


const Reservation = mongoose.model('Reservation', reservationSchema)

module.exports = {Reservation}