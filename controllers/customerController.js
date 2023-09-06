const Service = require("../services/customerService.js");

module.exports = {
  getAllCustomers,
  getCustomerByID,
  addCustomer,
  deleteCustomer,
  updateCustomer,
};

async function getAllCustomers(req, res) {
  try {
    let customers = await Service.getAllCustomers();
    res.status(200).json(customers);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function getCustomerByID(req, res) {
  try {
    let customerID = req.params.ID;
    let customer = await Service.getCustomerByID(customerID);
    res.status(200).json(customer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function addCustomer(req, res) {
  try {
    let customerToAdd = await Service.addCustomer(req.body);
    res.status(200).json(customerToAdd);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function deleteCustomer(req, res) {
  try {
    let customerID = req.params.ID;
    let customer = await Service.deleteCustomer(customerID);
    res.status(200).json(customer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function updateCustomer(req, res) {
  try {
    let customerID = req.params.ID;
    let customer = await Service.updateCustomer(customerID, req.body);
    res.status(200).json(customer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
