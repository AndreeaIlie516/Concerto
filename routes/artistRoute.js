module.exports = (app) => {
  const Controller = require("../controllers/artistController.js");
  app.get("/artist/getAllArtists", Controller.getAllArtists);
  app.get("/artist/getArtistByID/:ID", Controller.getArtistByID);
  app.post("/artist/addArtist", Controller.addArtist);
  app.delete("/artist/deleteArtist/:ID", Controller.deleteArtist);
  app.put("/artist/updateArtist/:ID", Controller.updateArtist);
};
