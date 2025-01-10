const pool = require("../config/database");


const getUsers = async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM usuarios");
        res.status(200).json(result.rows);
    } catch (err) {
        console.error("Error al obtener usuarios", err);
        res.status(500).json({ error: "Error interno del servidor" });
    }
};

module.exports = {
    getUsers,
};
