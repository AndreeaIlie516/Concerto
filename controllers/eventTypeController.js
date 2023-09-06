const Service = require("../services/eventTypeService.js");

module.exports = {
  getAllEventTypes,
  getEventTypeByID,
  addEventType,
  deleteEventType,
  updateEventType
};

async function getAllEventTypes(req, res) {
  try {
    let eventTypes = await Service.getAllEventTypes();
    res.status(200).json(eventTypes);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function getEventTypeByID(req, res) {
  try {
    let eventTypeID = req.params.ID;
    let eventType = await Service.getEventTypeByID(eventTypeID);
    res.status(200).json(eventType);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function addEventType(req, res) {
  try {
    let eventTypeToAdd = await Service.addEventType(req.body);
    res.status(200).json(eventTypeToAdd);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function deleteEventType(req, res) {
  try {
    let eventTypeID = req.params.ID;
    let eventType = await Service.deleteEventType(eventTypeID);
    res.status(200).json(eventType);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function updateEventType(req, res) {
  try {
    let eventTypeID = req.params.ID;
    let eventType = await Service.updateEventType(eventTypeID, req.body);
    res.status(200).json(eventType);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
