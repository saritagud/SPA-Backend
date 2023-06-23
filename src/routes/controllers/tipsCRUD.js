const {mongoose} = require("mongoose");

const {Tips} = require('../models/tips');

//agregar
const postTips = (req, res) => {
    const tipsData = req.body;
    console.log(tipsData);

    const newTips = new Tips(tipsData);
    newTips.save()
    .then((tips) => {
        res.json(tips);
      })
      .catch((error) => {
        res.status(500).json({ error: 'Error al agregar el tip' });
      });
}

//editar

const putTips = (req, res) => {
    const tipsID = req.params.id;
    const tipsData = req.body;
    console.log(tipsData)

    Tips.findByIdAndUpdate(tipsID, tipsData, { new: true })
    .then((tips) => {
        if (!tips) {
            res.status(404).json({ error: 'tip no encontrado' });
          } else {
            res.json(Tips);
          }
      })
      .catch((error) => {
        res.status(500).json({ error: 'Error al actualizar el tip' });
      });
}

//eliminar
const deleteTips = (req, res) => {
    const tipsID = req.params.id;
    console.log(tipsID)

    Tips.findByIdAndRemove(tipsID)
    .then((tips) => {
        if (!tips) {
            res.status(404).json({ error: 'tip no encontrado' });
          } else {
            res.json({ message: 'Eliminad correctamente' });
          }
      })
      .catch((error) => {
        res.status(500).json({ error: 'Error al eliminar el tip' });
      });
}

//mostrar
const getTips = (req, res) => {
    Tips.find()
    .then((tips) => {
        res.json(tips);
      })
      .catch((error) => {
        res.status(500).json({ error: 'Error al obtener los tips' });
      });
}

module.exports = {
    postTips,
    putTips,
    deleteTips,
    getTips
}








