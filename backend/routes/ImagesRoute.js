const express = require("express");
const router = express.Router();
const isAuth = require("../midelwares/isAuth");
const Images = require("../models/Images");
const upload = require("../midelwares/upload");

router.post(
  "/addimages",
  [isAuth, upload.array("images")],
  async (req, res) => {
    try {
      let imgUrl = "";
      if (req.files) {
        imgUrl = req.files.filename;
      }
      const imagesEvent = new Images({
        imgUrl,
      });
      await imagesEvent.save(imagesEvent);
      res.send({ imagesEvent });
    } catch (error) {
      console.log("not posted err");
    }
  }
);
module.exports = router;
