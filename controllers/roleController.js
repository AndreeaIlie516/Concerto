const Service = require("../services/roleService.js");

module.exports = {
  getAllRoles,
  getRoleByID,
  addRole,
  deleteRole,
  updateRole,
};

async function getAllRoles(req, res) {
  try {
    let roles = await Service.getAllRoles();
    res.status(200).json(roles);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function getRoleByID(req, res) {
  try {
    let roleID = req.params.ID;
    let role = await Service.getRoleByID(roleID);
    res.status(200).json(role);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function addRole(req, res) {
  try {
    let roleToAdd = await Service.addRole(req.body);
    res.status(200).json(roleToAdd);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function deleteRole(req, res) {
  try {
    let roleID = req.params.ID;
    let role = await Service.deleteRole(roleID);
    res.status(200).json(role);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function updateRole(req, res) {
  try {
    let roleID = req.params.ID;
    let role = await Service.updateRole(roleID, req.body);
    res.status(200).json(role);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
