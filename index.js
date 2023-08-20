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

app.listen(port, () => {
  console.log(`Hello world app listening on port ${port}!`);
});
