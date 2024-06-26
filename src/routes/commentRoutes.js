import express from 'express'
import { createComment, updateComment, deleteComment } from '../controllers/comentcontroller.js'

const router = express.Router()

/**
 * @swagger
 * /comentarios:
 *   post:
 *     summary: Crear un nuevo comentario
 *     tags:
 *       - Comentarios
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               content:
 *                 type: string
 *               userid:
 *                 type: integer
 *               postid:
 *                 type: integer
 *             example:
 *               content: "Este es un comentario de ejemplo"
 *               userid: 1
 *               postid: 1
 *     responses:
 *       '201':
 *         description: Comentario creado
 *       '400':
 *         description: Faltan datos en el formulario
 *       '500':
 *         description: Error interno del servidor
 */
router.post('/', createComment)

/**
 * @swagger
 * /comentarios/{id}:
 *   put:
 *     summary: Actualizar un comentario por su ID
 *     tags:
 *       - Comentarios
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               content:
 *                 type: string
 *             example:
 *               content: "Contenido actualizado del comentario"
 *     responses:
 *       '200':
 *         description: Comentario actualizado
 *       '400':
 *         description: Faltan datos en el formulario
 *       '404':
 *         description: Comentario no encontrado
 *       '500':
 *         description: Error interno del servidor
 */
router.patch('/:id', updateComment)

/**
 * @swagger
 * /comentarios/{id}:
 *   delete:
 *     summary: Eliminar un comentario por su ID
 *     tags:
 *       - Comentarios
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Comentario eliminado
 *       '404':
 *         description: Comentario no encontrado
 *       '500':
 *         description: Error interno del servidor
 */
router.delete('/:id', deleteComment)

export default router
