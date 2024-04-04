const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const PORT = process.env.PORT || 4444;
const MONGO_URL = process.env.MONGO_URL;

const app = express();

// app.options("*", cors());

// app.use(cors());
const corsOptions = {
  origin: "https://VicTyslenko.github.io/vt-portfolio", // Разрешить запросы только с этого домена
  methods: ["GET", "POST", "PUT", "DELETE"], // Разрешить только эти методы
  allowedHeaders: ["Content-Type", "Authorization"], // Разрешить только эти заголовки
  credentials: true, // Разрешить отправку cookies и авторизационных заголовков с запросами
  optionsSuccessStatus: 200, // Некоторые браузеры на старых платформах обрабатывают статус 204 как ошибку, поэтому лучше вернуть 200
};

app.use(cors(corsOptions));

app.use(express.json());

const dataRouter = require("./routers/collectionsData.api");
const contactRouter = require("./routers/contacts.api");
// const corsOptions = {
//   origin: "https://victyslenko.github.io",
//   optionsSuccessStatus: 200,
// };
// app.use(cors(corsOptions));

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
