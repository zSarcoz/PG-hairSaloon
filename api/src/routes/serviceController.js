const { Services} = require("../db.js");
const { Router } = require("express");
const router = Router();

router.get("/", async (req, res, next) => {
    try {
      let allServices = await Services.findAll();
      if (allServices.length) {
        res.status(200).json(allServices);
      } else {
        res.status(404).send({ message: "Users not found" });
      }
    } catch (error) {
      next(error.message);
    }
  });

  router.post("/", async (req, res) => {
    const { name, prices, subtipos} =
      req.body;
    // const hashFun = await hash(password);
    try {
      let newService = await Services.create({
        name: name,
        prices: prices,
        subtipos: subtipos
      });
      return res.status(201).json(newService);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

  module.exports = router;
