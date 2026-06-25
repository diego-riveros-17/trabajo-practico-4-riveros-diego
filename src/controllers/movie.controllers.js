import { Movie } from "../models/movie.models.js";

export const obtenerTodasLasPeliculas = (req, res) => {
  try {
    return res.status(200).json(movies);
  } catch (error) {
    return res.status(500).json({
      message: "Error interno del servidor",
    });
  }
};

export const obtenerUnaPelicula = (req, res) => {
  try {
    return res.status(200).json(movies);
  } catch (error) {
    return res.status(500).json({
      message: "Error interno del servidor",
    });
  }
};

export const insertarUnaPelicula = async (req, res) => {
  try {
    const { title, genre, duration, year, synopsis } = req.body;

    if (!title || !genre || duration === "" || !year) {
      return res.status(200).json({
        message: "Verifique que los campos obligatorios no esten vacios",
      });
    }

    if (!Number.isInteger(duration) || duration === 0 || duration < 0) {
      return res.status(200).json({
        message: "La duracion debe ser un numero entero mayor a 0",
      });
    }

    if (year <= 1888 && year < 2026) {
      return res.status(200).json({
        message: "Ingrese un fecha válida",
      });
    }

    if (typeof synopsis !== "string") {
      return res.status(200).json({
        message: "La synopsis debe ser un texto",
      });
    }

    const movie = await Movie.create({
      title,
      genre,
      duration,
      year,
      synopsis,
    });

    return res.status(201).json({
      message: "Pelicula agregada correctamente",
      movie,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

export const modificarPelicula = (req, res) => {
  try {
    return res.status(200).json(movies);
  } catch (error) {
    return res.status(500).json({
      message: "Error interno del servidor",
    });
  }
};

export const eliminarPelicula = (req, res) => {
  try {
    return res.status(200).json(movies);
  } catch (error) {
    return res.status(500).json({
      message: "Error interno del servidor",
    });
  }
};
