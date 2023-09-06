const Agency = require("../models/agency.js");
const Service = require("../services/agencyService.js");

module.exports = {
  getAllAgencies,
  getAgencyByID,
  addAgency,
  deleteAgency,
  updateAgency
};

async function getAllAgencies(req, res) {
  try {
    let agencies = await Service.getAllAgencies();
    res.status(200).json(agencies);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function getAgencyByID(req, res) {
  try {
    let agencyID = req.params.ID;
    let agency = await Service.getAgencyByID(agencyID);
    res.status(200).json(agency);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function addAgency(req, res) {
  try {
    let agencyToAdd = await Service.addAgency(req.body);
    res.status(200).json(agencyToAdd);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function deleteAgency(req, res) {
  try {
    let agencyID = req.params.ID;
    let agency = await Service.deleteAgency(agencyID);
    res.status(200).json(agency);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function updateAgency(req, res) {
  try {
    let agencyID = req.params.ID;
    let agency = await Service.updateAgency(agencyID, req.body);
    res.status(200).json(agency);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
