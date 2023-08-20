const mongoose = require("mongoose");

const artistCategorySchema = mongoose.Schema({
  name: {
    required: true,
    type: String,
  },

  description: {
    required: true,
    type: String,
  },

  costRange: {
    required: true,
    type: String,
  },
});

const Category = mongoose.model("Category", artistCategorySchema);

module.exports = Category;
