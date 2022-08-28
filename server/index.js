require("dotenv").config({ path: "./config.env" });

const express = require("express");
const mongoose = require("mongoose");
const api = require("./routes/api.js");
const app = express();

//connect to mongodb
mongoose
  .connect(process.env.ATLAS_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((error) => console.log("Connection failed", error));

app.use(express.json);
app.use(api); //routes

//handle errors
app.use(function (err, req, res, next) {
  res.status(422).send({ error: err.message });
});

app.listen(process.env.port || 5000, function () {
  console.log("now listening for requests");
});
