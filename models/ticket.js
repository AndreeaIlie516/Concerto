const mongoose = require("mongoose");

const ticketSchema = mongoose.Schema({
  serialNumber: {
    required: true,
    type: String,
  },

  seat: {
    required: true,
    type: String,
  },
});

const Ticket = mongoose.model("Ticket", ticketSchema);

module.exports = Ticket;
