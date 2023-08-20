const mongoose = require("mongoose");

const roleSchema = mongoose.Schema({
  name: {
    required: true,
    type: String,
  },

  attribution: {
    required: true,
    type: String,
  },
});

const Role = mongoose.model("Role", roleSchema);

module.exports = Role;
