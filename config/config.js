//* se importa el modulo para administrar la DB
const mongoose = require('mongoose');

//* se crea función que conecta la base de datos
const dbconnect = () => {
    try {
        mongoose.set('strictQuery', true);
        mongoose.connect("mongodb://localhost:27017/api-sena")
        console.log('Conexión correcta')
    } catch (e) {
        console.log('Error de conexión => ' + e)
    }
}

//* se exporta la función
module.exports = dbconnect;