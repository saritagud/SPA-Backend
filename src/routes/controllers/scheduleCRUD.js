const {Schedule} = require('../models/schedule')

const postSchedule = (req, res) => {
    const scheduleData = req.body;
    console.log(scheduleData);

    const newSchedule = new Schedule(scheduleData);
    newSchedule.save()
    .then((schedule) => {
        res.json(schedule);
      })
      .catch((error) => {
        res.status(500).json({ error: 'Error al crear el horario' });
      });
}

const getSchedule = (req, res) => {
    Schedule.find()
      .then((schedule) => {
        res.json(schedule);
      })
      .catch((error) => {
        res.status(500).json({ error: "Error al obtener los horarios" });
      });
  };

module.exports = {
    postSchedule,
    getSchedule
}