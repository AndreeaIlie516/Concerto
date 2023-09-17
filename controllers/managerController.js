const Service = require("../services/managerService.js");

module.exports = {
  getAllManagers,
  getManagerByID,
  addManager,
  deleteManager,
  updateManager,
};

async function getAllManagers(req, res) {
  try {
    let managers = await Service.getAllManagers();
    res.status(200).json(managers);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function getManagerByID(req, res) {
  try {
    let managerID = req.params.ID;
    let manager = await Service.getManagerByID(managerID);
    res.status(200).json(manager);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function addManager(req, res) {
  try {
    let managerToAdd = await Service.addManager(req.body);
    res.status(200).json(managerToAdd);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function deleteManager(req, res) {
  try {
    let managerID = req.params.ID;
    let manager = await Service.deleteManager(managerID);
    res.status(200).json(manager);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function updateManager(req, res) {
  try {
    let managerID = req.params.ID;
    let manager = await Service.updateManager(managerID, req.body);
    res.status(200).json(manager);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
