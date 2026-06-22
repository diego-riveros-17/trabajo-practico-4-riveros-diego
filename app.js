import express from "express";
import { moviesRouter } from "./src/routes/movie.routes.js";

const PORT = 3000;

const app = express();

app.use("/", moviesRouter);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
