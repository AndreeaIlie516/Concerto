module.exports = (app) => {
  const Controller = require("../controllers/ticketController.js");
  app.get("/ticket/getAllTickets", Controller.getAllTickets);
  app.get("/ticket/getTicketByID/:ID", Controller.getTicketByID);
  app.post("/ticket/addTicket", Controller.addTicket);
  app.delete("/ticket/deleteTicket/:ID", Controller.deleteTicket);
  app.put("/ticket/updateTicket/:ID", Controller.updateTicket);
};
