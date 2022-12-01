const mongoose = require("mongoose");

const CONNECTION_STRING = process.env.CONNECTION_STRING;

mongoose
  .connect(CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((error) => {
    console.error("Connection failed", error.message);
  });
module.exports = mongoose.connection;
