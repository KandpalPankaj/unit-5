const express = require("express");
const app = express();
const connect = require("./configs/db");
const cors = require("cors");
const userController = require("./controllers/user.controller");
// const ProductController = require("./controllers/product.controllers");
app.use(express.json());
app.use(cors());
app.use("/user", userController);
// app.use("/product", ProductController);

app.listen(8080, async () => {
  try {
    await connect();
    console.log("Pankaj listening on port 8080");
  } catch (err) {
    console.log(err);
  }
});

module.exports = app;
