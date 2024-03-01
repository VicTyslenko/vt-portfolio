const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 4444;
const MONGO_URL =
  "mongodb+srv://vtyslenko:drummerbass4000@portfolio.2tge8sv.mongodb.net/PortfolioDB";

const dataRouter = require("./routers/collectionsData.api");

app.use(dataRouter);

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
