const express = require("express");
const { getUsers } = require("../controllers/userController");

const router = express.Router();

/**
 * @swagger
 * /api/data:
 *   get:
 *     summary: Obtiene todos los usuarios del sistema.
 *     description: Este endpoint permite obtener una lista completa de todos los usuarios registrados en el sistema, incluyendo su identificador único, nombre y dirección de correo electrónico. Es útil para obtener una visión general de los usuarios y sus detalles básicos.
 *     responses:
 *       200:
 *         description: Respuesta exitosa que devuelve la lista de usuarios.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: El identificador único del usuario en el sistema.
 *                     example: 1
 *                   nombre:
 *                     type: string
 *                     description: El nombre completo del usuario.
 *                     example: "Juan"
 *                   email:
 *                     type: string
 *                     description: La dirección de correo electrónico asociada al usuario.
 *                     example: "juan@example.com"
 *       500:
 *         description: Error interno del servidor, si ocurre un fallo al obtener los datos de los usuarios.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Descripción del error ocurrido.
 *                   example: "Error interno del servidor"
 */


router.get("/api/data", getUsers);

module.exports = router;
