import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("movies", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export const startDB = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log("Conexion a la DB correcta");
  } catch (error) {
    console.error("Error al conectar con la BD", error);
  }
};
