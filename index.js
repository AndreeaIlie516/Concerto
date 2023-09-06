const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();

const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

const app = express();
const port = 4000;

app.use(express.json());

require("./routes/agencyRoute.js")(app);
require("./routes/categoryRoute.js")(app);
require("./routes/customerRoute.js")(app);
require("./routes/eventTypeRoute.js")(app);
require("./routes/genreRoute.js")(app);
require("./routes/locationRoute.js")(app);
require("./routes/organizerRoute.js")(app);
require("./routes/roleRoute.js")(app);
require("./routes/ticketRoute.js")(app);

app.listen(port, () => {
  console.log(`Hello world app listening on port ${port}!`);
});
