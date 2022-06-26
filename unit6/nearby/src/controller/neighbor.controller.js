const express = require("express");
const router = express.Router();
const Neighbor = require("../models/neighbor.model");

router.post("", async (req, res) => {
  try {
    const neighbor = await Neighbor.create(req.body);
    return res.status(200).send(neighbor);
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.get("", async (req, res) => {
  try {
    const neighbor = await Neighbor.find({
      location: {
        $nearSphere: {
          $geometry: {
            type: "Point",
            coordinates: [
              req.body.location.coordinates[0],
              req.body.location.coordinates[1],
            ],
          },
        },
      },
    });
    return res.status(200).send(neighbor);
  } catch (error) {
    return res.status(500).send(error);
  }
});

module.exports = router;
