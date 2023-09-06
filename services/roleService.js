const Role = require("../models/role.js");

module.exports = {
  getAllRoles,
  getRoleByID,
  addRole,
  deleteRole,
  updateRole,
  roleExists,
};

async function getAllRoles() {
  let role = await Role.find({});
  return role;
}

async function getRoleByID(ID) {
  let role = await Role.findById({ _id: ID });
  return role;
}

async function addRole(params) {
  let roleToAdd = await Role.create(params);
  return roleToAdd;
}

async function deleteRole(ID) {
  let roleToDelete = await Role.findByIdAndDelete({ _id: ID });
  return roleToDelete;
}

async function updateRole(ID, params) {
  let roleToUpdate = await Role.findByIdAndUpdate({ _id: ID }, params);
  return roleToUpdate;
}

async function roleExists(ID) {
  let role = await Role.exists({ _id: ID });
  if (!role) {
    return false;
  }
  return true;
}
