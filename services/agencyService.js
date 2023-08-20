const Agency = require("../models/agency.js");

module.exports = {
  getAllAgencies,
  getAgencyByID,
  addAgency,
  deleteAgency,
  updateAgency,
  agencyExists,
};

async function getAllAgencies() {
  let agencies = await Agency.find({});
  return agencies;
}

async function getAgencyByID(ID) {
  let agency = await Agency.findById({ _id: ID });
  return agency;
}

async function addAgency(params) {
  let agencyToAdd = await Agency.create(params);
  return agencyToAdd;
}

async function deleteAgency(ID) {
  let agencyToDelete = await Agency.findByIdAndDelete({ _id: ID });
  return agencyToDelete;
}

async function updateAgency(ID, params) {
  let agencyToUpdate = await Agency.findByIdAndUpdate({ _id: ID }, params);
  return agencyToUpdate;
}

async function agencyExists(ID) {
  let agency = await Agency.exists({ _id: ID });
  if (!agency) {
    return false;
  }
  return true;
}
