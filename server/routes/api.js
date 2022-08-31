const express = require("express");
const cors = require("cors");
const listModel = require("../models/list");
const app = express();

app.use(cors());

//business logic for generating urls
function generateUrl() {
  //initialize values
  let charSet =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let url = "";
  const createdTime = String(Date.now());

  //generate 1st 3 random characters
  for (i = 0; i < 3; i++) {
    url = url.concat(charSet[Math.floor(Math.random() * 61)]);
  }

  //get next 4 characters based on following double digit numbers in createdTime
  for (i = 0; i < 4; i++) {
    let source = createdTime.slice(i * 2 + 1, i * 2 + 3);
    source = source * Math.floor(Math.random() * 9);
    url = url.concat(charSet[source % 61]);
  }

  //get last character based on last digits in createdTime
  let lastSource = createdTime.slice(11);
  url = url.concat(charSet[lastSource % 61]);
  return url;
}

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

//create list
app.post("/create", async (req, res) => {
  const list = new listModel(req.body);
  list.url = generateUrl();

  try {
    await list.save();
    res.send(list);
  } catch (error) {
    if (error.code == 11000) {
      list.url = generateUrl();
      try {
        await list.save();
        res.send(list.url);
      } catch (error) {
        res.status(500).send(error);
      }
    } else {
      res.status(500).send(error);
    }
  }
});

//update 1 list
app.patch("/update/:url", async (req, res) => {
  try {
    const list = await listModel
      .findOneAndUpdate({ url: req.params.url }, req.body)
      .exec();
    await list.save();
    res.send(list);
  } catch {
    res.status(500).send(error);
  }
});

//TODO: add delete route

module.exports = app;
