const Service = require("../services/ticketService.js");

module.exports = {
  getAllTickets,
  getTicketByID,
  addTicket,
  deleteTicket,
  updateTicket,
};

async function getAllTickets(req, res) {
  try {
    let tickets = await Service.getAllTickets();
    res.status(200).json(tickets);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function getTicketByID(req, res) {
  try {
    let ticketID = req.params.ID;
    let ticket = await Service.getTicketByID(ticketID);
    res.status(200).json(ticket);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function addTicket(req, res) {
  try {
    let ticketToAdd = await Service.addTicket(req.body);
    res.status(200).json(ticketToAdd);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function deleteTicket(req, res) {
  try {
    let ticketID = req.params.ID;
    let ticket = await Service.deleteTicket(ticketID);
    res.status(200).json(ticket);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function updateTicket(req, res) {
  try {
    let ticketID = req.params.ID;
    let ticket = await Service.updateTicket(ticketID, req.body);
    res.status(200).json(ticket);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
