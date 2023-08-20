module.exports = (app) => {
  const Controller = require("../controllers/genreController.js");
  app.get("/genre/getAllGenres", Controller.getAllGenres);
  app.get("/genre/getGenreByID/:ID", Controller.getGenreByID);
  app.post("/genre/addGenre", Controller.addGenre);
  app.delete("/genre/deleteGenre/:ID", Controller.deleteGenre);
  app.put("/genre/updateGenre/:ID", Controller.updateGenre);
};
