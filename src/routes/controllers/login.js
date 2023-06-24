const { User } = require('../models/user');
const bcrypt = require('bcrypt');
const { createToken } = require('./tokenCreation');

const registerUser = (req, res) => {
    const userData = req.body;
    if(userData.password.length < 6) {
      return res.status(400).json({ error: 'La contraseña debe tener al menos 6 caracteres' });
    }
    bcrypt
      .hash(userData.password, 10)
      .then((hashedPassword) => {
        userData.password = hashedPassword;
        const newUser = new User(userData);
        return newUser.save();
      })
      .then((user) => {
        const token = createToken(user._id, user.user, user.email);
        res.json({msg: 'Usuario creado correctamente', user, token});
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({ error: 'Error al crear al usuario' });
      });
  }

const loginUser = (req, res) => {
    const userData = req.body;
    User.findOne({ user: userData.user })
      .then(user => {
        if (!user) {
          res.status(404).json({ error: 'El usuario ingresado no existe' });
        } else {
          return bcrypt.compare(userData.password, user.password)
            .then(passwordMatch => {
              if (!passwordMatch) {
                res.status(404).json({ error: 'La contraseña es incorrecta' });
              } else {
                const token = createToken(user._id, user.user, user.email);
                res.status(200).json({ msg: 'Inicio de sesion correcto!', token });
              }
            });
        }
      })
      .catch(error => {
        res.status(500).json({ error: 'Error al iniciar sesion' });
      });
  }

module.exports = { registerUser, loginUser }