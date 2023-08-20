const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const artistSchema = mongoose.Schema(
  {
    name: {
      required: true,
      type: String,
    },

    manager: {
      required: true,
      type: Schema.Types.ObjectId,
      ref: "Manager",
    },

    members: {
      required: false,
      type: String,
    },

    description: {
      required: true,
      type: String,
    },

    category: {
      required: true,
      type: Schema.Types.ObjectId,
      ref: "Category",
    },
  },
  {
    timestamps: true,
  }
);

const Artist = mongoose.model("Artist", artistSchema);

module.exports = Artist;
