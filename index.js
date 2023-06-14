const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoutes = require("./src/routes/user")

const app = express();
const port = process.env.PORT || 9000;


//middleware
app.use(express.json());
app.use('/api', userRoutes);


///routes
app.get("/", (req, res) => {
  res.send("Aqui esta tu api");
});

///mongodb conexion
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Estas conectado mango atlas"))
  .catch((error) => console.error(error));


app.listen(port, () =>
  console.log("el servido se esta ejecuentando en puerto", port)
);
