const express = require("express");
const mongoose = require("mongoose");

const app = express();

//connect to mongodb
mongoose.connect({
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.use(express.json);
app.use("/api", require("./routes/api")); //routes

//handle errors
app.use(function (err, req, res, next) {
  res.status(422).send({ error: err.message });
});

app.listen(process.env.port || 5000, function () {
  console.log("now listening for requests");
});
