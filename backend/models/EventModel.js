const mongoose = require("mongoose");
const schema = mongoose.Schema;
const eventSchema = new schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  location: {
    type: String,
    required: true,
  },
  note: {
    type: String,
  },
  numberClient: {
    type: Number,
    default: 0,
  },
  revenuPrevu: {
    type: Number,
    default: 0,
  },
  revenu: {
    type: Number,
    default: 0,
  },
  statut: {
    type: String,
    default: "en cour",
  },
});
module.exports = mongoose.model("Event", eventSchema);
