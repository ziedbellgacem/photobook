const mongoose = require("mongoose");
const schema = mongoose.Schema;
const clientSchema = new schema({
  firstname: {
    type: String,
    required: true,
  },

  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  numberPhoto: {
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
  event: {
    type: schema.Types.ObjectId,
    ref: "Event",
  },
  user: {
    type: schema.Types.ObjectId,
    ref: "User",
  },
});
module.exports = mongoose.model("Client", clientSchema);
