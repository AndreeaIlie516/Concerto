const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const equipmentSchema = mongoose.Schema({
    name: {
        required: true,
        type: String
    },

    equipmentType: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: "EquipmentType"
    }
},
    {
        timestamps: true
    });

const Equipment = mongoose.model('Equipment', equipmentSchema);

module.exports = Equipment;