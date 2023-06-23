const {mongoose} = require("mongoose");

const {Service} = require('../models/service');

//agregar 
const postService = (req, res) => {
    const serviceData = req.body;
    console.log(serviceData);

    const newService = new Service(serviceData);
    newService.save()
    .then((service) => {
        res.json(service);
      })
      .catch((error) => {
        res.status(500).json({ error: 'Error al crear el servicio' });
      });
}

//editar 

const putService = (req, res) => {
    const serviceID = req.params.id;
    const serviceData = req.body;
    console.log(serviceData)

    Service.findByIdAndUpdate(serviceID, serviceData, { new: true })
    .then((service) => {
        if (!service) {
            res.status(404).json({ error: 'Servicio no encontrado' });
          } else {
            res.json(service);
          }
      })
      .catch((error) => {
        res.status(500).json({ error: 'Error al actualizar el servicio' });
      });
}

//eliminar
const deleteService = (req, res) => {
    const serviceID = req.params.id;
    console.log(serviceID)

    Service.findByIdAndRemove(serviceID)
    .then((service) => {
        if (!service) {
            res.status(404).json({ error: 'Servicio no encontrado' });
          } else {
            res.json({ message: 'Eliminado correctamente' });
          }
      })
      .catch((error) => {
        res.status(500).json({ error: 'Error al eliminar el servicio' });
      });
}

//obtener
const getService = (req, res) => {
    Service.find()
    .then((service) => {
        res.json(service);
      })
      .catch((error) => {
        res.status(500).json({ error: 'Error al obtener los servicios' });
      });
}

module.exports = {
    postService,
    putService,
    deleteService,
    getService
}








