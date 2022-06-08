const mongoose = require("mongoose");

const AssistantSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  CarNo: { type: Number, required: true , unique:true},
  CarType: { type: String, required: true },
  EntryTime: { type: String, required: true },
  Payment: { type: Number, required: true, default: 1000 },
  floorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "floor",
    required: true,
  },
});

module.exports = mongoose.model("Assist", AssistantSchema);
