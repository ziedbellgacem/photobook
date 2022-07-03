const express = require("express");
const router = express.Router();
const Client = require("../models/ClientMode");
const isAuth = require("../midelwares/isAuth");
const Event = require("../models/EventModel");

//add client
router.post("/:eventId", isAuth, async (req, res) => {
  const { firstname, lastname, email } = req.body;
  const { eventId } = req.params;
  const user = req.user.id;
  try {
    const client = new Client({
      firstname,
      lastname,
      email,
      event: eventId,
      user,
    });

    await client.save();
    res.send({ client });
  } catch (error) {
    res.status(500).send("server err");
  }
});

// update number client

// router.put("/:eventId", isAuth, async (req, res) => {
//   const { eventId } = req.params;
//   try {
//     await Event.findByIdAndUpdate(eventId, { $set: {  } });
//     res.send("product update");
//   } catch (error) {
//     res.send("server err");
//   }
// });

// method get
// url /allclients

router.get("/:eventId/allclients", isAuth, async (req, res) => {
  const { eventId } = req.params;
  try {
    const clients = await Client.find({ event: eventId }).populate("event", [
      "name",
    ]);
    res.send({ clients });
  } catch (error) {
    res.status(500).send("server err");
  }
});

//get one event
// findone
// req.params
router.get("/:eventId/:clientId", isAuth, async (req, res) => {
  const { eventId } = req.params;
  const { clientId } = req.params;

  try {
    const client = await Client.findById(clientId);
    res.send({ client });
  } catch (error) {
    res.send("server err");
  }
});

module.exports = router;
