const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;

const app = express();

app.use(cors());
app.use(express.json());

const dataRouter = require("./routers/collectionsData.api");
const contactRouter = require("./routers/contacts.api");

app.use(dataRouter);
app.use(contactRouter);

app.get("/test-db", async (req, res) => {
  try {
    const result = await mongoose.connection.db.admin().listDatabases(); // Простой запрос для проверки подключения к DB
    res.json(result);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Ошибка подключения к базе данных", error });
  }
});

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
