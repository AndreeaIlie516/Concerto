const mongoose = require("mongoose");

const citySchema = mongoose.Schema({
  name: {
    required: true,
    type: String,
  },

  country: {
    required: true,
    type: String,
  },

});

const City = mongoose.model("City", citySchema);

module.exports = City;
