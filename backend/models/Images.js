const mongoose = require("mongoose");
const schema = mongoose.Schema;
const imagesSchema = new schema({
  imgUrl: {
    type: String,
    required: true,
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
module.exports = mongoose.model("Images", imagesSchema);
