const {mongoose} = require("mongoose");

const {Recommendation} = require('../models/recommendation');

//agregar 
const postRecommendation = (req, res) => {
    const recommendationData = req.body;
    console.log(recommendationData);

    const newRecommendation = new Recommendation(recommendationData);
    newRecommendation.save()
    .then((recommendation) => {
        res.json(recommendation);
      })
      .catch((error) => {
        res.status(500).json({ error: 'Error al crear la recomendacion' });
      });
}

//editar 

const putRecommendation = (req, res) => {
    const recommendationID = req.params.id;
    const recommendationData = req.body;
    console.log(recommendationData)

    Recommendation.findByIdAndUpdate(recommendationID, recommendationData, { new: true })
    .then((recommendation) => {
        if (!recommendation) {
            res.status(404).json({ error: 'Recomendacion no encontrado' });
          } else {
            res.json(recommendation);
          }
      })
      .catch((error) => {
        res.status(500).json({ error: 'Error al actualizar la recomendacion' });
      });
}

//eliminar
const deleteRecommendation = (req, res) => {
    const recommendationID = req.params.id;
    console.log(recommendationID)

    Recommendation.findByIdAndRemove(recommendationID)
    .then((recommendation) => {
        if (!recommendation) {
            res.status(404).json({ error: 'Recomendacion no encontrada' });
          } else {
            res.json({ message: 'Eliminado correctamente' });
          }
      })
      .catch((error) => {
        res.status(500).json({ error: 'Error al eliminar la recomendacion' });
      });
}

//obtener
const getRecommendation = (req, res) => {
    Recommendation.find()
    .then((recommendation) => {
        res.json(recommendation);
      })
      .catch((error) => {
        res.status(500).json({ error: 'Error al obtener las Recomendaciones' });
      });
}

module.exports = {
    postRecommendation,
    putRecommendation,
    deleteRecommendation,
    getRecommendation
}








