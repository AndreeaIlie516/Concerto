module.exports = (app) => {
  const Controller = require("../controllers/agencyController.js");
  app.get("/agency/getAllAgencies", Controller.getAllAgencies);
  app.get("/agency/getAgencyByID/:ID", Controller.getAgencyByID);
  app.post("/agency/addAgency", Controller.addAgency);
  app.delete("/agency/deleteAgency/:ID", Controller.deleteAgency);
  app.put("/agency/updateAgency/:ID", Controller.updateAgency);
};
