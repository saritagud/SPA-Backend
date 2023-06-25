const { mongoose } = require("mongoose");
const nodemailer = require('nodemailer');
const Mailgen = require('mailgen');

const { Reservation } = require("../models/reservation");

//agregar
const postReservation = (req, res) => {
  const reservationData = req.body;
 
  console.log(reservationData);

  let config = {
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  };

  let transporter = nodemailer.createTransport(config);

  let MailGenerator = new Mailgen({
    theme: "default",
    product: {
      name: "Sara's Spa",
      link: "https://localhost:3000/",
    },
  });

  let response = {
    body: {
      name: "Sara's Spa",
      greeting: "¡Un cordial salud!",
      signature: "Atentamente",
      title: "Somos Sara's Spa",
      intro: "¡Recibimos tu reservación!",
      table: {
        data: [
          {
            hora: reservationData.hour,
            servicio: reservationData.service,
            precio: reservationData.price,
          },
        ],
      },
      outro: "¡Estamos para servirte!",
    },
  };

  let mail = MailGenerator.generate(response);

  let message = {
    from: process.env.EMAIL,
    to: reservationData.email,
    subject: "Reservación",
    html: mail,
  };

  const newReservation = new Reservation(reservationData);
  newReservation
    .save()
    transporter
    .sendMail(message)
    .then((Reservation) => {
      res.json(Reservation);
    })
    .catch((error) => {
      res.status(500).json({ error: "Error al crear el servicio" });
    });


};

//obtener
const getReservation = (req, res) => {
  Reservation.find()
    .then((Reservation) => {
      res.json(Reservation);
    })
    .catch((error) => {
      res.status(500).json({ error: "Error al obtener los servicios" });
    });
};

module.exports = {
  postReservation,
  getReservation,
};
