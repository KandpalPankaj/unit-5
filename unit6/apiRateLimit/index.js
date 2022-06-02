const express = require("express");
const app = express();

const ipAddress = {};
app.use("/", (req, res) => {
  if (ipAddress[req.ip] === undefined) {
    ipAddress[req.ip] = {
      count: 0,
      time: Date.now(),
    };

    return res.status(200).json({ Data: "Data" });
  } else {
    if (Date.now() - ipAddress[req.ip].time > 60 * 1000) {
      ipAddress[req.ip] = {
        count: 0,
        time: Date.now(),
      };

      return res.status(200).json({ Data: "Data" });
    } else {
      if (ipAddress[req.ip].count >= 10) {
        const time = 60 - (Date.now() - ipAddress[req.ip].time) / 1000;
        const message = `Limit reached. Please try again in ${time} seconds`;

        return res.status(429).json({ message });
      } else {
        ipAddress[req.ip].count++;
        const { count } = ipAddress[req.ip];
        const message = `You have ${10 - count} requests left`;

        return res.status(200).json({ Data: "Data", message });
      }
    }
  }
});

app.listen(5000, () => {
  console.log("Listening on Port 5000");
});
