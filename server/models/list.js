const { builtinModules } = require("module");
const mongoose = require("mongoose");

const ListSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  name: {
    type: String,
    //required: true,
  },
  items: Array,
});

const List = mongoose.model("List", ListSchema);

module.exports = List;
