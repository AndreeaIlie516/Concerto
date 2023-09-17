module.exports = (app) => {
    const Controller = require("../controllers/cityController.js");
    app.get("/city/getAllCities", Controller.getAllCities);
    app.get("/city/getCityByID/:ID", Controller.getCityByID);
    app.post("/city/addCity", Controller.addCity);
    app.delete("/city/deleteCity/:ID", Controller.deleteCity);
    app.put("/city/updateCity/:ID", Controller.updateCity);
  };
  