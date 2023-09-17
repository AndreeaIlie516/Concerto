const Organizer = require("../models/organizer.js");

module.exports = {
  getAllOrganizers,
  getOrganizerByID,
  addOrganizer,
  deleteOrganizer,
  updateOrganizer,
  organizerExists,
};

async function getAllOrganizers() {
  try {
    let organizer = await Organizer.find({});
    return organizer;
  } catch (error) {
    throw error;
  }
}

async function getOrganizerByID(ID) {
  try {
    let organizer = await Organizer.findById({ _id: ID });
    return organizer;
  } catch (error) {
    throw error;
  }
}

async function addOrganizer(params) {
  try {
    let organizerToAdd = await Organizer.create(params);
    return organizerToAdd;
  } catch (error) {
    throw error;
  }
}

async function deleteOrganizer(ID) {
  try {
    let organizerToDelete = await Organizer.findByIdAndDelete({ _id: ID });
    return organizerToDelete;
  } catch (error) {
    throw error;
  }
}

async function updateOrganizer(ID, params) {
  try {
    let organizerToUpdate = await Organizer.findByIdAndUpdate(
      { _id: ID },
      params
    );
    return organizerToUpdate;
  } catch (error) {
    throw error;
  }
}

async function organizerExists(ID) {
  let organizer = await Organizer.exists({ _id: ID });
  if (!organizer) {
    return false;
  }
  return true;
}
