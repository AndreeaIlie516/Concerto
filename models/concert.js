const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const concertSchema = mongoose.Schema({
    name: {
        required: true,
        type: String
    },

    event: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: "Event"
    },

    location: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: "Location"
    },

    startTime: {
        required: true,
        type: Date
    },

    endTime: {
        required: true,
        type: Date
    },

    description: {
        required: true,
        type: String
    }
},
{
    timestamps: true
});

const Concert = mongoose.model('Concert', concertSchema);

module.exports = Concert;