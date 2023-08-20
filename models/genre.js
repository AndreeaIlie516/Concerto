const mongoose = require("mongoose");

const genreSchema = mongoose.Schema({
  name: {
    required: true,
    type: String,
  },

  description: {
    required: true,
    type: String,
  },
});

const Genre = mongoose.model("Genre", genreSchema);

module.exports = Genre;
