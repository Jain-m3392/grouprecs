require("dotenv").config({ path: "./config.env" });

const express = require("express");
const mongoose = require("mongoose");
const api = require("./routes/api.js");
const app = express();

//connect to mongodb
mongoose
  .connect(process.env.ATLAS_URI)
  .catch((error) => console.log("Connection failed", error));

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.use(express.json());
app.use(api); //routes

//handle errors
app.use(function (err, req, res, next) {
  res.status(422).send({ error: err.message });
});

app.listen(process.env.PORT || 5000, function () {
  console.log("now listening for requests");
});
