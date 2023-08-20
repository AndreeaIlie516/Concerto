const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerSchema = mongoose.Schema({
  username: {
    required: true,
    type: String,
  },

  password: {
    required: true,
    type: String,
  },

  firstName: {
    required: true,
    type: String,
  },

  lastName: {
    required: true,
    type: String,
  },

  email: {
    required: true,
    type: String,
  },

  phoneNumber: {
    required: true,
    type: String,
  },

  address: {
    required: true,
    type: String,
  },

  newsletterSubscription: {
    required: true,
    type: Boolean,
  },
});

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
