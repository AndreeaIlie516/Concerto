const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = mongoose.Schema(
  {
    name: {
      required: true,
      type: String,
    },

    location: {
      required: true,
      type: Schema.Types.ObjectId,
      ref: "Location",
    },

    startTime: {
      required: true,
      type: Date,
    },

    endTime: {
      required: true,
      type: Date,
    },

    openGatesTime: {
      required: true,
      type: Date,
    },

    description: {
      required: true,
      type: String,
    },

    eventType: {
      required: true,
      type: Schema.Types.ObjectId,
      ref: "EventType",
    },
  },
  {
    timestamps: true,
  }
);

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
