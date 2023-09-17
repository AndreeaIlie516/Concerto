const EventType = require("../models/eventType.js");

module.exports = {
  getAllEventTypes,
  getEventTypeByID,
  addEventType,
  deleteEventType,
  updateEventType,
  eventTypeExists,
};

async function getAllEventTypes() {
  try {
    let eventType = await EventType.find({});
    return eventType;
  } catch (error) {
    throw error;
  }
}

async function getEventTypeByID(ID) {
  try {
    let eventType = await EventType.findById({ _id: ID });
    return eventType;
  } catch (error) {
    throw error;
  }
}

async function addEventType(params) {
  try {
    let eventTypeToAdd = await EventType.create(params);
    return eventTypeToAdd;
  } catch (error) {
    throw error;
  }
}

async function deleteEventType(ID) {
  try {
    let eventTypeToDelete = await EventType.findByIdAndDelete({ _id: ID });
    return eventTypeToDelete;
  } catch (error) {
    throw error;
  }
}

async function updateEventType(ID, params) {
  try {
    let eventTypeToUpdate = await EventType.findByIdAndUpdate(
      { _id: ID },
      params
    );
    return eventTypeToUpdate;
  } catch (error) {
    throw error;
  }
}

async function eventTypeExists(ID) {
  let eventType = await EventType.exists({ _id: ID });
  if (!eventType) {
    return false;
  }
  return true;
}
