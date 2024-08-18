
//* se importa modulo de validación
const { validationResult } = require("express-validator");

const validateResult = (req, res, next) => {
    try {
        //* se usa el modulo de validación
        validationResult(req).throw()
        //* si todo se cumple, se da continuidad
        return next()
    } catch (err) {
        //* si da error se enviía un 403 con respuesta del error
        res.status(403)
        res.send({ errors: err.array() })
    }
} 

//* se exporta la función
module.exports = { validateResult }