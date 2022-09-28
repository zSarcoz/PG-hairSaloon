const { User } = require("../db.js");
const { Router } = require("express");
// const bcrypt = require("bcrypt");
const router = Router();

// const hash = async (password) => {
//   console.log(password);
//   const saltRounds = 10;
//   const origialPassword = password;

//   const hashPassword = await bcrypt.hash(origialPassword, saltRounds);
//   console.log(hashPassword);
//   const isMatch = await bcrypt.compare(password, hashPassword);
//   console.log(isMatch);
//   return hashPassword
// };
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
// router.get("/", async (req, res) => {
//   const { cedula } = req.query;
//   let allUsers = await User.findAll();
//   console.log(allUsers)
//   if (cedula) {
//     console.log(cedula)
//     let user = allUsers.filter((user1) =>
//       user1.cedula === cedula
//     );
//     console.log(user)
//     user.length
//       ? res.status(200).send(user)
//       : res.status(404).json("User not found");
//   } else {
//     res.status(200).json(allUsers);
//   }
// });

router.post("/", async (req, res) => {
  const { name, lastName, email, cedula, direction, /* password,*/ phone } =
    req.body;
  // const hashFun = await hash(password);
  try {
    if (cedula) {
      let user = await User.findAll({
        where: { cedula: cedula },
      });
      if (user.length) {
        return res.status(201).send("user already created");
      } else {
        let userCreated = await User.create({
          name: name,
          lastName: lastName,
          email: email,
          // password: password,
          // password: hashFun,
          cedula: cedula,
          direction: direction,
          phone: phone,
        });
        return res.status(201).json(userCreated);
      }
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
