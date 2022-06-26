const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema(
  {
    location: {
      type: { type: String, default: "Point" },
      coordinates: [Number, Number],
    },
    name: { type: String },
  },
  {
    versionKey: false,
    timestamps:true
  }
);

const Restaurant = mongoose.model('restaurant',restaurantSchema)
module.exports = Restaurant