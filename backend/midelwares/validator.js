const { body, validationResult } = require("express-validator");
const registerRules = [
  body("firstname", "Firstname is required").notEmpty(),
  body("lastname", "Lastname is required").notEmpty(),
  body("email", "Enter a valid email").isEmail(),
  body("password", "Password at least 6 caracters").isLength({ min: 6 }),
];
const loginRules = [
  body("email", "Enter a valid email").isEmail(),
  body("password", "Password at least 6 caracters").isLength({ min: 6 }),
];
const eventRules = [
  body("name", "Name id required").notEmpty(),
  body("date", "Date is required").notEmpty(),
  body("location", "Location is required").notEmpty(),
];
const validator = (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).send({ errors: error.array() });
  }
  next();
};

module.exports = { validator, registerRules, loginRules, eventRules };
