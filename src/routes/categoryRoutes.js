import express from 'express'
import { createCategory, updateCategory, deleteCategory } from '../controllers/categorycontroller.js'

const router = express.Router()

/**
 * @swagger
 * /categorias:
 *   post:
 *     summary: Crear una nueva categoría
 *     tags:
 *       - Categorías
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *             example:
 *               name: Tecnología
 *     responses:
 *       '201':
 *         description: Categoría creada
 *       '400':
 *         description: Falta el nombre de la categoría en el formulario
 *       '409':
 *         description: La categoría ya existe
 *       '500':
 *         description: Error interno del servidor
 */
router.post('/', createCategory)

/**
 * @swagger
 * /categorias/{id}:
 *   put:
 *     summary: Actualizar una categoría por su ID
 *     tags:
 *       - Categorías
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
 *               name:
 *                 type: string
 *             example:
 *               name: Nueva categoría
 *     responses:
 *       '200':
 *         description: Categoría actualizada
 *       '400':
 *         description: Falta el nombre de la categoría en el formulario
 *       '404':
 *         description: Categoría no encontrada
 *       '500':
 *         description: Error interno del servidor
 */
router.patch('/:id', updateCategory)

/**
 * @swagger
 * /categorias/{id}:
 *   delete:
 *     summary: Eliminar una categoría por su ID
 *     tags:
 *       - Categorías
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Categoría eliminada
 *       '404':
 *         description: Categoría no encontrada
 *       '500':
 *         description: Error interno del servidor
 */
router.delete('/:id', deleteCategory)

export default router
