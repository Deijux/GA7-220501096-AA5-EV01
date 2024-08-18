//* se importa el modulo check para la validación de los campos
const { check } = require("express-validator");
//* se importa la función que valida los resultados
const { validateResult } = require("../helpers/validateHelpers");

const validateCreate = [
  //* chequea si existe, y que sea de tipo email
  check("email").exists().isEmail(),
  //* chequea si existe
  check("password").exists(),
  (req, res, next) => {
    //* se usa la función para validar todos los campos
    validateResult(req, res, next);
  },
];

//* se exporta la función
module.exports = { validateCreate };
