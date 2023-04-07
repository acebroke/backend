const mongoose = require("mongoose");

// connect to the database
const connectionString =
  process.env.CONNECTION_STRING;
mongoose
  .connect(connectionString, {
    connectTimeoutMS: 2000,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Could not connect to MongoDB", err));
