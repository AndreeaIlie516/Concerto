const mongoose = require('mongoose');

const managerSchema = mongoose.Schema({
    firstName: {
        required: true,
        type: String
    },

    lastName: {
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

    address: {
        required: true,
        type: String
    },

    agency:
        {
            required: true,
            type: String
        }
},
    {
        timestamps: true
    });

const Manager = mongoose.model('Manager', managerSchema);

module.exports = Manager;