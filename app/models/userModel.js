//* se importa el modulo para administrar la DB
const mongoose = require("mongoose");
//* se crea el esquema de la base de datos
const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
    },
    password: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

//* se especifica el modelo a utilizar y el esquema
const ModelUser = mongoose.model("credentials", userSchema);
//* se exporta el modulo de ModelUser
module.exports = ModelUser;
