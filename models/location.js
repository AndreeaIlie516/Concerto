const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const locationSchema = mongoose.Schema({
  name: {
    required: true,
    type: String,
  },

  city: {
    required: true,
    type: Schema.Types.ObjectId,
    ref: "City",
  },

  address: {
    required: true,
    type: String,
  },

  capacity: {
    required: true,
    type: Number,
  },

  description: {
    required: true,
    type: String,
  },

  email: {
    required: true,
    type: String,
  },

  phoneNumber: {
    required: true,
    type: String,
  },
},
{
  timestamps: true,
});

const Location = mongoose.model("Location", locationSchema);

module.exports = Location;
