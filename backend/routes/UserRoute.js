const express = require("express");
const router = express.Router();
const User = require("../models/UserModel");
const {
  registerRules,
  validator,
  loginRules,
} = require("../midelwares/validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const isAuth = require("../midelwares/isAuth");

//register

router.post("/register", [registerRules, validator], async (req, res) => {
  const { firstname, lastname, email, password } = req.body;
  try {
    //check user exist
    const foundUser = await User.findOne({ email });
    if (foundUser) {
      res.status(400).send({ errors: [{ msg: "email is already exist " }] });
    }

    const user = new User({
      firstname,
      lastname,
      email,
      password,
    });

    // hash password
    const salt = 10;
    const hashPassword = await bcrypt.hash(password, salt);
    user.password = hashPassword;
    await user.save();

    // token
    const payload = {
      id: user._id,
    };
    const token = jwt.sign(payload, process.env.mySecret, { expiresIn: "20M" });
    res.send({ user, token });
  } catch (error) {
    console.log(error);
    res.status(500).send("server error ");
  }
});

// login

router.post("/login", [loginRules, validator], async (req, res) => {
  const { email, password } = req.body;
  try {
    //check user exist

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send({ errors: [{ msg: "user not found " }] });
    }
    // check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send({ errors: [{ msg: "user not found " }] });
    }

    //token
    const payload = {
      id: user._id,
    };
    const token = jwt.sign(payload, process.env.mySecret, {
      expiresIn: "7d",
    });
    res.send({ user, token });
  } catch (error) {
    console.log(error);
    res.status(500).send("server error ");
  }
});

// url api/auth/current
//method get
//req.headers
router.get("/current", isAuth, async (req, res) => {
  console.log(req.user);
  try {
    const user = await User.findById(req.user.id);
    res.send(user);
  } catch (error) {
    console.log(error);
    res.status(500).send("server error ");
  }
});
module.exports = router;
