const mongoose = require("mongoose");

const eventOrganizerSchema = mongoose.Schema(
  {
    event: {
      required: true,
      type: Schema.Types.ObjectId,
      ref: "Event",
    },

    organizer: {
      required: true,
      type: Schema.Types.ObjectId,
      ref: "Organizer",
    },

    role: {
      required: true,
      type: Schema.Type.ObjectId,
      ref: "Role",
    },

    startTime: {
      required: true,
      type: Date,
    },

    endTime: {
      required: true,
      type: Date,
    },

    benefits: {
      required: true,
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const EventOrganizer = mongoose.model("EventOrganizer", eventOrganizerSchema);

module.exports = EventOrganizer;
