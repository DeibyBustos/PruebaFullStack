const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const dotenv = require("dotenv");
const swaggerDoc = require("./config/swagger");

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;


app.use(cors({ origin: "*" }));

app.use(express.json());

app.use(userRoutes);

swaggerDoc(app);

app.use((req, res) => {
    res.status(404).json({ error: "Ruta no encontrada" });
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
