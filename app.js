import express from "express";

const PORT = 3000;

const app = express();

app.use("/", (req, res) => {
  return res.json({
    message: "Prueba del servidor",
  });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
