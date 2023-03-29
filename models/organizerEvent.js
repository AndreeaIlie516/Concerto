const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const organizerConcertSchema = mongoose.Schema({
    event: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: "Event"
    },

    organizer: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: "Organizer"
    },

    role: {
        required: true,
        type: Schema.Type.ObjectId,
        ref: "Role"
    },

    startTime: {
        required: true,
        type: Date
    },

    endTime: {
        required: true,
        type: Date
    },

    cost: {
        required: true,
        type: Number
    },

    benefits: {
        required: true,
        type: String
    }
},
{
    timestamps: true
});

const OrganizerEvent = mongoose.model('OrganizerEvent', organizerConcertSchema);

module.exports = OrganizerEvent;