const mongoose = require("mongoose");

const artistSchema = mongoose.Schema(
  {
    name: {
      required: true,
      type: String,
    },

    manager: {
      required: true,
      type: String
    },

    members: {
      required: false,
      type: String,
    },

    description: {
      required: true,
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Artist = mongoose.model("Artist", artistSchema);

module.exports = Artist;
