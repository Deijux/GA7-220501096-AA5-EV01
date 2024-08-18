//* manejador de errores
const { httpError } = require("../helpers/handleError");
//* modelo de usuario
const ModelUser = require("../models/userModel");
//* modulo de tokes
const jwt = require("jsonwebtoken");
//* modulo encriptador
const bcrypt = require("bcryptjs");

//* function que envía todos los usuarios
const getItems = async (req, res) => {
  try {
    //* consulta en la base de datos todos los usuarios
    const response = await ModelUser.find({});
    //* envía como respuesta los usuarios encontrados
    res.send({ data: response });
  } catch (e) {
    //* Si se presenta un error, se ejecuta la siguiente function
    httpError(res, e);
  }
};

//* function que registra un nuevo usuario
const registerUser = async (req, res) => {
  try {
    //* recibe desde el body el email y password
    const { email, password } = req.body;
    //* enctripta la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);
    //* envía a la base de datos el usuario nuevo
    const response = await ModelUser.create({
      email,
      password: hashedPassword,
    });
    //* envía como respuesta el nuevo usuario creado en la base de datos
    res.send({ data: response });
  } catch (e) {
    //* si se presenta un error, se ejecuta la siguiente function
    httpError(res, e);
  }
};

//* function que permite el ingreso al usuario
const loginUser = async (req, res) => {
  try {
    //* recibe desde el body el email y password
    const { email, password } = req.body;
    //* consulta en la base de datos algún usuario que coincida con el email pasado por el body
    const user = await ModelUser.findOne({ email });
    //* si el usuario no se encuentra se devuelve un 401 con una respuesta de "Usuario no encontrado"
    if (!user) 
      return res.status(401).send({ error: "Usuario no encontrado" });
    //* se el email coincide, continua comprobando la contraseña pasada por el body
    const isMatch = await bcrypt.compare(password, user.password);
    //* si la contraseña no coincide devuelve un 401 con una respuesta de "Contraseña incorrecta"
    if (!isMatch)
      return res.status(401).send({ error: "Contraseña incorrecta" });
    //* si la contraseña coincide, continua creando el token para el usuario con una expiración de 1 hora
    const token = jwt.sign({ id: user._id }, "secretKey", { expiresIn: "1h" });
    //* se envía un 200 con respuesta "Autenticación satisfactoria"
    res.status(200).send({ message: "Autenticación satisfactoria ", token });
  } catch (e) {
    //* si se presenta un error, se ejecuta la siguiente function
    httpError(res, e);
  }
};

//* se exportan los modulos para ser utilizados
module.exports = { getItems, registerUser, loginUser };
