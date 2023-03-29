const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const equipmentTypeSchema = mongoose.Schema({
    name: {
        required: true,
        type: String
    },

    description: {
        required: true,
        type: String
    }
});

const EquipmentType = mongoose.model('EquipmentType', equipmentTypeSchema);

module.exports = EquipmentType;