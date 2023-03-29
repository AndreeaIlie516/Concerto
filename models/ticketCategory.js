const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ticketCategorySchema = mongoose.Schema({
    event: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: "Event"
    },

    ticket: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: "Ticket"
    },
    
    name: {
        required: true,
        type: String
    },

    price: {
        required: true,
        type: Number
    },

    description: {
        required: true,
        type: String
    },

    area: {
        required: true,
        type: String
    }
},
    {
        timestamps: true
    });

const TicketCategory = mongoose.model('TicketCategory', ticketCategorySchema);

module.exports = TicketCategory;