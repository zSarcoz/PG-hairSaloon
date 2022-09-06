const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const user = require('./userController');
const barber = require('./barberController');

router.use('/user', user)

router.use('/barber', barber)

module.exports = router;
 