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
  try {
    let role = await Role.find({});
    return role;
  } catch (error) {
    throw error;
  }
}

async function getRoleByID(ID) {
  try {
    let role = await Role.findById({ _id: ID });
    return role;
  } catch (error) {
    throw error;
  }
}

async function addRole(params) {
  try {
    let roleToAdd = await Role.create(params);
    return roleToAdd;
  } catch (error) {
    throw error;
  }
}

async function deleteRole(ID) {
  try {
    let roleToDelete = await Role.findByIdAndDelete({ _id: ID });
    return roleToDelete;
  } catch (error) {
    throw error;
  }
}

async function updateRole(ID, params) {
  try {
    let roleToUpdate = await Role.findByIdAndUpdate({ _id: ID }, params);
    return roleToUpdate;
  } catch (error) {
    throw error;
  }
}

async function roleExists(ID) {
  let role = await Role.exists({ _id: ID });
  if (!role) {
    return false;
  }
  return true;
}
