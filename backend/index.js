const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const users = require("./routes/users-routes.js");

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

const PORT = process.env.PORT || 5000;

app.use("/users", users);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log(`Connected to Database`);
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
