const { User } = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//agregar
const postUser = (req, res) => {
  const userData = req.body;
  console.log(userData);

  const userExits = User.findOne({ user: req.body.user });
  if (userExits) {
    res.status(404).json({ error: "Usuario ya existe" });
  } else {
    const newUser = new User(userData);
    newUser
      .save()
      .then((user) => {
        res.json(user);
      })
      .catch((error) => {
        res.status(500).json({ error: "Error al guardar el usuario" });
      });
  }
};
//editar
const putUser = (req, res) => {
  const userID = req.params.id;
  const userData = req.body;
  console.log(userData);

  Promotion.findByIdAndUpdate(userID, userData, { new: true })
    .then((user) => {
      if (!user) {
        res.status(404).json({ error: "Usuario no encontrado" });
      } else {
        res.json(user);
      }
    })
    .catch((error) => {
      res.status(500).json({ error: "Error al actualizar el usuario" });
    });
};

//eliminar
const deleteUser = (req, res) => {
  const userID = req.params.id;
  console.log(userID);

  Promotion.findByIdAndRemove(userID)
    .then((promotion) => {
      if (!promotion) {
        res.status(404).json({ error: "Usuario no encontrado" });
      } else {
        res.json({ message: "Eliminad0 correctamente" });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: "Error al eliminar el usuario" });
    });
};

//obtener
const getUser = () => {
  User.find()
    .then((user) => {
      res.json(user);
    })
    .catch((error) => {
      res.status(500).json({ error: "Error al obtener los usuarios" });
    });
};

module.exports = {
  postUser,
  putUser,
  deleteUser,
  getUser,
};
