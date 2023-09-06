const Customer = require("../models/customer.js");

module.exports = {
  getAllCustomers,
  getCustomerByID,
  addCustomer,
  deleteCustomer,
  updateCustomer,
  customerExists,
};

async function getAllCustomers() {
  let customer = await Customer.find({});
  return customer;
}

async function getCustomerByID(ID) {
  let customer = await Customer.findById({ _id: ID });
  return customer;
}

async function addCustomer(params) {
  let customerToAdd = await Customer.create(params);
  return customerToAdd;
}

async function deleteCustomer(ID) {
  let customerToDelete = await Customer.findByIdAndDelete({ _id: ID });
  return customerToDelete;
}

async function updateCustomer(ID, params) {
  let customerToUpdate = await Customer.findByIdAndUpdate({ _id: ID }, params);
  return customerToUpdate;
}

async function customerExists(ID) {
  let customer = await Customer.exists({ _id: ID });
  if (!customer) {
    return false;
  }
  return true;
}
