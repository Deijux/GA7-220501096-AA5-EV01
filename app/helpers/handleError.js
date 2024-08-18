//* function que maneja errores
const httpError = (res, err) => {
    //* Imprime por consola el error
    console.log(err);
    //* envía un 500 con respuesta "Algo ocurrió"
    res.status(500);
    res.send({ error: "Algo ocurrió" });
  };
  
  module.exports = { httpError };
  