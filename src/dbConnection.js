const { mongoose } = require("mongoose");

mongoose.connect(
    "mongodb+srv://SaraSPA:SaraSPA@saraspa.mfjfc9l.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Conectado a Mongo"))
  .catch((err) => console.error(err));

  module.exports = mongoose
