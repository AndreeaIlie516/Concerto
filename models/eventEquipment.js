const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventEquipmentSchema = mongoose.Schema({
    event: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: "Event"
    },
    
    equipment: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: "Equipment"
    },

    quantity: {
        required: true,
        type: Number
    },

    cost: {
        required: true,
        type: Number
    }
},
    {
        timestamps: true
    });

const EventEquipment = mongoose.model('EventEquipment', eventEquipmentSchema);

module.exports = EventEquipment;