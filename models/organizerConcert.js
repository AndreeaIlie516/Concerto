const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const organizerConcertSchema = mongoose.Schema({
    organizer: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: "Organizer"
    },

    concert: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: "Concert"
    },

    role: {
        required: true,
        type: Schema.Type.ObjectId,
        ref: "Role"
    }
},
{
    timestamps: true
});

const OrganizerConcert = mongoose.model('OrganizerConcert', organizerConcertSchema);

module.exports = OrganizerConcert;