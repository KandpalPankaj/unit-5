const express = require("express");
const app = express();
const connect = require("./config/db");
const neighbourControlller = require("./controller/neighbor.controller");
const restaurantController = require("./controller/restaurant.controller");

app.use(express.json());

app.use("/neighbours", neighbourControlller);
app.use("/restaurants", restaurantController);

app.listen(8080, async () => {
  try {
    await connect();
    console.log("Pankaj listening on port 8080");
  } catch (err) {
    console.log(err);
  }
});
