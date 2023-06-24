const { mongoose } = require("mongoose");
require('dotenv').config();

mongoose.connect(
    process.env.MONGOURI,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Conectado a Mongo"))
  .catch((err) => console.error(err));

  module.exports = mongoose
