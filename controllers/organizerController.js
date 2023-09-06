const Service = require("../services/organizerService.js");

module.exports = {
  getAllOrganizers,
  getOrganizerByID,
  addOrganizer,
  deleteOrganizer,
  updateOrganizer,
};

async function getAllOrganizers(req, res) {
  try {
    let organizers = await Service.getAllOrganizers();
    res.status(200).json(organizers);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function getOrganizerByID(req, res) {
  try {
    let organizerID = req.params.ID;
    let organizer = await Service.getOrganizerByID(organizerID);
    res.status(200).json(organizer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function addOrganizer(req, res) {
  try {
    let organizerToAdd = await Service.addOrganizer(req.body);
    res.status(200).json(organizerToAdd);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function deleteOrganizer(req, res) {
  try {
    let organizerID = req.params.ID;
    let organizer = await Service.deleteOrganizer(organizerID);
    res.status(200).json(organizer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function updateOrganizer(req, res) {
  try {
    let organizerID = req.params.ID;
    let organizer = await Service.updateOrganizer(organizerID, req.body);
    res.status(200).json(organizer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
