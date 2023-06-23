const {mongoose} = require("mongoose");

const {Reservation} = require('../models/reservation');

//agregar 
const postReservation = (req, res) => {
    const reservationData = req.body;
    console.log(reservationData);

    const newReservation = new Reservation(reservationData);
    newReservation.save()
    .then((Reservation) => {
        res.json(Reservation);
      })
      .catch((error) => {
        res.status(500).json({ error: 'Error al crear el servicio' });
      });
}

//obtener
const getReservation = (req, res) => {
    Reservation.find()
    .then((Reservation) => {
        res.json(Reservation);
      })
      .catch((error) => {
        res.status(500).json({ error: 'Error al obtener los servicios' });
      });
}

module.exports = {
    postReservation,
    getReservation
}








