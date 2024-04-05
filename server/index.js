const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const PORT = process.env.PORT || 4444;
const MONGO_URL = process.env.MONGO_URL;

const app = express();

app.use(
  cors({
    origin: [
      "https://victyslenko.github.io/vt-portfolio",
      "http://localhost:3000",
    ],
  })
);

app.use(express.json());

const dataRouter = require("./routers/collectionsData.api");
const contactRouter = require("./routers/contacts.api");

app.get("/test", (req, res) => {
  res.status(200).send("Server is working");
});

app.use(dataRouter);
app.use(contactRouter);

app.all("*", (req, res) => {
  res.status(404).send("resource not found");
});

const start = async () => {
  try {
    mongoose
      .connect(MONGO_URL)
      .then(() => {
        console.log("DB OK");
      })
      .catch((err) => console.log("DB error", err));

    app.listen(PORT, () => {
      console.log(`Server is running on :${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
