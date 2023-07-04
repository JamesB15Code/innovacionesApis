const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoutes = require("./src/routes/user");
const productRoutes = require("./src/routes/product");
const dateEmpresaRoutes = require("./src/routes/infEmpresa");
const redesSocialesRoutes = require("./src/routes/redesSociales");
const dateProduct = require("./src/routes/dateProduct")

const cors = require("cors");

const app = express();
const port = process.env.PORT || 9000;

// Middleware
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// Routes
app.get("/", (req, res) => {
  res.send("Aquí está tu API");
});

app.use("/api", userRoutes);
app.use("/api", productRoutes);
app.use("/api", dateEmpresaRoutes);
app.use("/api", redesSocialesRoutes);
app.use("/api", dateProduct);

// MongoDB conexión
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Estás conectado a MongoDB Atlas"))
  .catch((error) => console.error(error));

app.listen(port, () =>
  console.log("El servidor se está ejecutando en el puerto", port)
);
