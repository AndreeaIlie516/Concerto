const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderTicketSchema = mongoose.Schema({
    customer: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: "Customer"
    },

    ticket: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: "Ticket"
    },

    orderNumber: {
        required: true,
        type: String
    },

    discount: {
        required: true,
        type: Number
    },

    purchaseDate: {
        required: true,
        type: Date
    },

    deliveryAddress: {
        required: true,
        type: String
    },

    deliveryEmail: {
        required: true,
        type: String
    },

    sendingTime: {
        required: true,
        type: Date
    }
},
    {
        timestamps: true
    });

const OrderTicket = mongoose.model('OrderTicket', orderTicketSchema);

module.exports = OrderTicket;