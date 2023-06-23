const {mongoose} = require("mongoose");

const {Promotion} = require('../models/promotion');

//rutas para las promos

//agregar promo
const postPromotion = (req, res) => {
    const promotionData = req.body;
    console.log(promotionData);

    const newPromotion = new Promotion(promotionData);
    newPromotion.save()
    .then((promotion) => {
        res.json(promotion);
      })
      .catch((error) => {
        res.status(500).json({ error: 'Error al crear la promocion' });
      });
}

//editar promo

const putPromotion = (req, res) => {
    const promotionID = req.params.id;
    const promotionData = req.body;
    console.log(promotionData)

    Promotion.findByIdAndUpdate(promotionID, promotionData, { new: true })
    .then((promotion) => {
        if (!promotion) {
            res.status(404).json({ error: 'Promocion no encontrada' });
          } else {
            res.json(promotion);
          }
      })
      .catch((error) => {
        res.status(500).json({ error: 'Error al actualizar la promocion' });
      });
}

const deletePromotion = (req, res) => {
    const promotionID = req.params.id;
    console.log(promotionID)

    Promotion.findByIdAndRemove(promotionID)
    .then((promotion) => {
        if (!promotion) {
            res.status(404).json({ error: 'Promocion no encontrada' });
          } else {
            res.json({ message: 'Eliminada correctamente' });
          }
      })
      .catch((error) => {
        res.status(500).json({ error: 'Error al eliminar la promocion' });
      });
}

const getPromotion = (req, res) => {
    Promotion.find()
    .then((promotion) => {
        res.json(promotion);
      })
      .catch((error) => {
        res.status(500).json({ error: 'Error al obtener las promociones' });
      });
}

module.exports = {
    postPromotion,
    putPromotion,
    deletePromotion,
    getPromotion
}








