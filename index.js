require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const PORT =  process.env.PORT;
const app = express();

app.use(express.json());

mongoose
  .connect(process.env.URL)
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });

app.use(cors());

// Configure session middleware
app.use(
  session({
    secret: "your_secret_key",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.URL }),
    cookie: { secure: false }, // Set to true if using HTTPS
  })
);

const userController = require("./Controllers/UserController");
app.use("/api/users", userController);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});