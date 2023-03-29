const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const organizerSchema = mongoose.Schema({
    name: {
        required: true,
        type: String
    },

    address: {
        required: true,
        type: String
    },

    contact: {
        required: true,
        type: String
    },

    description: {
        required: true,
        type: String
    }
});

const Organizer = mongoose.model('Organizer', organizerSchema);

module.exports = Organizer;