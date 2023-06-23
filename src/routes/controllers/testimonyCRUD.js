const {mongoose} = require("mongoose");

const {Testimony} = require('../models/testimony');

//agregar
const postTestimony = (req, res) => {
    const testimonyData = req.body;
    console.log(testimonyData);

    const newTestimony = new Testimony(testimonyData);
    newTestimony.save()
    .then((testimony) => {
        res.json(testimony);
      })
      .catch((error) => {
        res.status(500).json({ error: 'Error al agregar el testimonio' });
      });
}

//editar

const putTestimony = (req, res) => {
    const testimonyID = req.params.id;
    const testimonyData = req.body;
    console.log(testimonyData)

    Testimony.findByIdAndUpdate(testimonyID, testimonyData, { new: true })
    .then((testimony) => {
        if (!testimony) {
            res.status(404).json({ error: 'testimonio no encontrado' });
          } else {
            res.json(testimony);
          }
      })
      .catch((error) => {
        res.status(500).json({ error: 'Error al actualizar el testimonio' });
      });
}

//eliminar
const deleteTestimony = (req, res) => {
    const testimonyID = req.params.id;
    console.log(testimonyID)

    Testimony.findByIdAndRemove(testimonyID)
    .then((testimony) => {
        if (!testimony) {
            res.status(404).json({ error: 'testimonio no encontrada' });
          } else {
            res.json({ message: 'Eliminad correctamente' });
          }
      })
      .catch((error) => {
        res.status(500).json({ error: 'Error al eliminar el testimonio' });
      });
}

//mostrar
const getTestimony = (req, res) => {
    Testimony.find()
    .then((testimony) => {
        res.json(testimony);
      })
      .catch((error) => {
        res.status(500).json({ error: 'Error al obtener los testimonios' });
      });
}

module.exports = {
    postTestimony,
    putTestimony,
    deleteTestimony,
    getTestimony
}








