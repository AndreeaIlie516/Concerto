const mongoose = require("mongoose");

const eventTypeSchema = mongoose.Schema({
  typeName: {
    required: true,
    type: String,
  },

  description: {
    required: true,
    type: String,
  },
});

const EventType = mongoose.model("EventType", eventTypeSchema);

module.exports = EventType;
