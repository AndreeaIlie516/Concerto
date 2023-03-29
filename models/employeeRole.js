const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeRoleSchema = mongoose.Schema({
    name: {
        required: true,
        type: String
    },

    attributions: {
        required: true,
        type: String
    }
});

const EmployeeRole = mongoose.model('EmployeeRole', employeeRoleSchema);

module.exports = EmployeeRole;