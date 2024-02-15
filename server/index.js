const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
const mongoose = require("mongoose");
app.get("/", (req, res) => {
  res.send("Hi there");
});

app.all("*", (req, res) => {
  res.status(404).send("resource not found");
});
const PORT = process.env.PORT || 4444;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
