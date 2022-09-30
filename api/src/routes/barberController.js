const { Barber } = require("../db.js");
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
    let allBarbers = await Barber.findAll();
    if (allBarbers.length) {
      res.status(200).json(allBarbers);
    } else {
      res.status(404).send({ message: "Users not found" });
    }
  } catch (error) {
    next(error.message);
  }
});

router.post("/", async (req, res) => {
  const { name, lastName, email, cedula, password, phone, available, permissions } =
    req.body;
  const hashFun = await hash(password);
  try {
    let barberCreated = await Barber.create({
      name: name,
      lastName: lastName,
      email: email,
      permissions: permissions,
      // password: password,
      password: hashFun,
      cedula: cedula,
      phone: phone,
      available: available
      // checkIn: checkIn
    });
    return res.status(201).json(barberCreated);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
