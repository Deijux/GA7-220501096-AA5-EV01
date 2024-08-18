//* se importa el modulo express
const express = require("express");
//* se importa la función para conectar la base de datos
const dbconnect = require("./config/config");
//* se importa las rutas
const router = require("./app/routes/users");

//* se crea la app desde el modulo express
const app = express();

//* Se especifica que vamos a usar json
app.use(express.json());
//* enviamos las rutas
app.use(router);

//* especificamos en que puerto se ejecutará la api
app.listen(3001, () => {
  console.log("El servidor está en el puerto 3001");
});

//* ejecutamos la base de datos
dbconnect();