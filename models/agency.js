const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const agencySchema = mongoose.Schema({
    name: {
        required: true,
        type: String
    },

    address: {
        required: true,
        type: String
    },

    email: {
        required: true,
        type: String
    },

    phoneNumber: {
        required: true,
        type: String
    },

    description: {
        required: true,
        type: String
    }
},
    {
        timestamps: true
    });

const Agency = mongoose.model('Agency', agencySchema);

module.exports = Agency;