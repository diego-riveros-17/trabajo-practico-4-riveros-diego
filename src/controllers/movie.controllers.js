import { Movie } from "../models/movie.models.js";

export const obtenerTodasLasPeliculas = async (req, res) => {
  try {
    const movies = await Movie.findAll();

    return res.status(200).json(movies);
  } catch (error) {
    return res.status(500).json({
      message: "Error interno del servidor",
    });
  }
};

export const obtenerUnaPelicula = async (req, res) => {
  try {
    const idMovie = req.params.id;
    const movie = await Movie.findByPk(idMovie);
    return res.status(200).json(movie);
  } catch (error) {
    return res.status(500).json({
      message: "Error interno del servidor",
    });
  }
};

export const insertarUnaPelicula = async (req, res) => {
  try {
    const { title, genre, duration, year, synopsis } = req.body;
    const movies = await Movie.findAll();

    if (!title || !genre || duration === "" || !year) {
      return res.status(400).json({
        message:
          "Verifique que los campos titulo, género, duración o año de estreno no esten vacios",
      });
    } else {
      if (!Number.isInteger(duration) || duration === 0 || duration < 0) {
        return res.status(400).json({
          message:
            "La duracion de la película debe ser un numero entero mayor a 0",
        });
      }

      if (year <= 1888 || year >= 2026) {
        return res.status(400).json({
          message:
            "La fecha de estreno debe ser una fecha válida, entre 1888 y 2025",
        });
      }

      const movieExist = movies.find((peli) => {
        return peli.title.toUpperCase() === title.toUpperCase();
      });

      if (movieExist) {
        return res.status(400).json({
          message: "Ya existe una película, con el nombre que desea ingresar",
        });
      }

      if (typeof synopsis !== "string") {
        return res.status(400).json({
          message: "La synopsis debe ser un resumen breve de la película",
        });
      }
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

export const modificarPelicula = async (req, res) => {
  try {
    const idMovie = req.params.id;
    const movie = await Movie.findByPk(idMovie);
    const { title, genre, duration, year, synopsis } = req.body;

    if (!movie) {
      return res.status(404).json({
        message:
          "La pelicula que deseada modificar no existe en la base de datos",
      });
    }

    await movie.update({
      title,
      genre,
      duration,
      year,
      synopsis,
    });

    return res.status(200).json({
      message: "Película modificada correctamente",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error interno del servidor",
    });
  }
};

export const eliminarPelicula = async (req, res) => {
  try {
    const idMovie = req.params.id;
    const movie = await Movie.findByPk(idMovie);

    if (!movie) {
      return res.status(404).json({
        message:
          "La pelicula que deseada eliminar no existe en la base de datos",
      });
    }

    await movie.destroy();

    return res.status(200).json({
      message: "Película eliminada correctamente",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error interno del servidor",
    });
  }
};
