const express = require("express");
const router = express.Router();
const Event = require("../models/EventModel");
const isAuth = require("../midelwares/isAuth");
const { eventRules, validator } = require("../midelwares/validator");
// add event
//method Post
//url /
// req.body

router.post("/addevent", [isAuth, eventRules, validator], async (req, res) => {
  const { name, date, location, note } = req.body;

  try {
    const event = new Event({ name, date, location, note });
    await event.save();
    res.send({ event });
  } catch (error) {
    console.log(error);
  }
});

//method get all event
// url /

router.get("/allevents", isAuth, async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).send({ events });
  } catch (error) {
    res.status(500).send("server err");
  }
});

//get one event
// findone
// req.params
router.get("/getevent/:eventId", isAuth, async (req, res) => {
  const { eventId } = req.params;
  try {
    const event = await Event.findById(eventId);
    res.send({ event });
  } catch (error) {
    res.send("server err");
  }
});

module.exports = router;
