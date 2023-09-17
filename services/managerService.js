const Manager = require("../models/manager.js");

module.exports = {
  getAllManagers,
  getManagerByID,
  addManager,
  deleteManager,
  updateManager,
  managerExists,
};

async function getAllManagers() {
  try {
    let managers = await Manager.find({});
    return managers;
  } catch (error) {
    throw error;
  }
}

async function getManagerByID(ID) {
  try {
    let manager = await Manager.findById({ _id: ID });
    return manager;
  } catch (error) {
    throw error;
  }
}

async function addManager(params) {
  try {
    let managerToAdd = await Manager.create(params);
    return managerToAdd;
  } catch (error) {
    throw error;
  }
}

async function deleteManager(ID) {
  try {
    let managerToDelete = await Manager.findByIdAndDelete({ _id: ID });
    return managerToDelete;
  } catch (error) {
    throw error;
  }
}

async function updateManager(ID, params) {
  try {
    let managerToUpdate = await Manager.findByIdAndUpdate({ _id: ID }, params);
    return managerToUpdate;
  } catch (error) {
    throw error;
  }
}

async function managerExists(ID) {
  let manager = await Manager.exists({ _id: ID });
  if (!manager) {
    return false;
  }
  return true;
}
