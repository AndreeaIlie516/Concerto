const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const engagedSchema = mongoose.Schema({
    event: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: "Event"
    },

    hasRole: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: "HasRole"
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
    }
},
{
    timestamps: true
});

const Engaged = mongoose.model('Engaged', engagedSchema);

module.exports = Engaged;