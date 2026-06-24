import express from "express";
import { moviesRouter } from "./src/routes/movie.routes.js";
import { startDB } from "./src/config/database.js";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/", moviesRouter);

app.listen(PORT, async () => {
  await startDB;
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
