const mongoose = require("mongoose");

const neighborSchema = new mongoose.Schema(
  {
    geometry: {
        coordinates: [[[Number,Number]]]
    },
    name: { type: String },
  },
  {
    versionKey: false,
    timestamps:true
  }
);

const Neighbor = mongoose.model('neighbor',neighborSchema)
module.exports = Neighbor