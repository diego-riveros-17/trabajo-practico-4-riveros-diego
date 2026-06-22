import { Router } from "express";
import {
  eliminarPelicula,
  insertarUnaPelicula,
  modificarPelicula,
  obtenerTodasLasPeliculas,
  obtenerUnaPelicula,
} from "../controllers/movie.controllers.js";

export const moviesRouter = Router();

//Obtener todas las peliculas
moviesRouter.get("/movies", obtenerTodasLasPeliculas);

//Obtener una pelicula por id
moviesRouter.get("/movies/:id", obtenerUnaPelicula);

//Insertar una nueva pelicula
moviesRouter.post("/movies", insertarUnaPelicula);

//Modificar una pelicula
moviesRouter.put("/:id", modificarPelicula);

//Eliminar una pelicula
moviesRouter.delete("/movies/:id", eliminarPelicula);
