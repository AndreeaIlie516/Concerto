module.exports = (app) => {
  const Controller = require("../controllers/customerController.js");
  app.get("/customer/getAllCustomers", Controller.getAllCustomers);
  app.get("/customer/getCustomerByID/:ID", Controller.getCustomerByID);
  app.post("/customer/addCustomer", Controller.addCustomer);
  app.delete("/customer/deleteCustomer/:ID", Controller.deleteCustomer);
  app.put("/customer/updateCustomer/:ID", Controller.updateCustomer);
};
