const { User } = require("../db.js");
const { Router } = require("express");
const bcrypt = require("bcrypt");
const router = Router();

const hash = async (password) => {
  console.log(password);
  const saltRounds = 10;
  const origialPassword = password;

  const hashPassword = await bcrypt.hash(origialPassword, saltRounds);
  console.log(hashPassword);
  const isMatch = await bcrypt.compare(password, hashPassword);
  console.log(isMatch);
  return hashPassword
};
router.get("/", async (req, res, next) => {
  try {
    let allUsers = await User.findAll();
    if (allUsers.length) {
      res.status(200).json(allUsers);
    } else {
      res.status(404).send({ message: "Users not found" });
    }
  } catch (error) {
    next(error.message);
  }
});

router.post("/", async (req, res) => {
  const { name, lastName, email, cedula, direction, password, mobile_number } =
    req.body;
  const hashFun = await hash(password);
  try {
    let userCreated = await User.create({
      name: name,
      lastName: lastName,
      email: email,
      // password: password,
      password: hashFun,
      cedula: cedula,
      direction: direction,
      mobile_number: mobile_number,
    });
    return res.status(201).json(userCreated);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
