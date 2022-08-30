const express = require("express");
const listModel = require("../models/list");
const app = express();

//get all lists
/*
app.get("/", async (req, res) => {
  const lists = await listModel.find({});
  try {
    res.send(lists);
  } catch (error) {
    res.status(500).send(error);
  }
});
*/

//get 1 list by url
app.get("/list/:url", async (req, res) => {
  const list = await listModel.findOne({ url: req.params.url }).exec();
  try {
    res.send(list);
  } catch (error) {
    res.status(500).send(error);
  }
});

//add list
app.post("/add", async (req, res) => {
  const list = new listModel(req.body);

  try {
    await list.save();
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.patch("/update/:url", async (req, res) => {
  try {
    const list = await listModel
      .findOneAndUpdate({ url: req.params.url }, req.body)
      .exec();
    await list.save();
    res.send();
  } catch {
    res.status(500).send(error);
  }
});

module.exports = app;
