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

export const insertarUnaPelicula = (req, res) => {
  try {
    return res.status(200).json(movies);
  } catch (error) {
    return res.status(500).json({
      message: "Error interno del servidor",
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
