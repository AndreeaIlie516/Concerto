const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = mongoose.Schema({
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
    }
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;