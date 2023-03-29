const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hasRoleSchema = mongoose.Schema({
    employee: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: "Employee"
    },

    role: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: "Role"
    },

    startTime: {
        required: true,
        type: Date
    },

    endTime: {
        required: true,
        type: Date
    }
},
    {
        timestamps: true
    });

const HasRole = mongoose.model('HasRole', hasRoleSchema);

module.exports = HasRole;