//* se importa el modulo express
const express = require("express");
//* se crea el router desde el modulo de express
const router = express.Router();
//* se importan las funciones para obtener, registrar e iniciar sesion
const {
  getItems,
  registerUser,
  loginUser,
} = require("../controllers/users");
//* se importa la función para validar las creaciones de usuarios
const { validateCreate } = require("../validators/users");

//* Obtener todos los items
router.get("/", getItems);

//* registrar un nuevo usuario
router.post("/register", validateCreate, registerUser);

//* Iniciar sesión a usuario
router.post("/login", validateCreate, loginUser)

//* se exporta el modulo router
module.exports = router;
