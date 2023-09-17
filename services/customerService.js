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
  try {
    let customer = await Customer.find({});
    return customer;
  } catch (error) {
    throw error;
  }
}

async function getCustomerByID(ID) {
  try {
    let customer = await Customer.findById({ _id: ID });
    return customer;
  } catch (error) {
    throw error;
  }
}

async function addCustomer(params) {
  try {
    let customerToAdd = await Customer.create(params);
    return customerToAdd;
  } catch (error) {
    throw error;
  }
}

async function deleteCustomer(ID) {
  try {
    let customerToDelete = await Customer.findByIdAndDelete({ _id: ID });
    return customerToDelete;
  } catch (error) {
    throw error;
  }
}

async function updateCustomer(ID, params) {
  try {
    let customerToUpdate = await Customer.findByIdAndUpdate(
      { _id: ID },
      params
    );
    return customerToUpdate;
  } catch (error) {
    throw error;
  }
}

async function customerExists(ID) {
  let customer = await Customer.exists({ _id: ID });
  if (!customer) {
    return false;
  }
  return true;
}
