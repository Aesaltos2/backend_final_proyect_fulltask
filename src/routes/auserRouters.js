import express from 'express'
import { createUser, partialUpdate, deleteById, getAll } from '../controllers/usercontroller.js'

const router = express.Router()

/**
 * @swagger
 * /usuarios:
 *   post:
 *     summary: Crear un nuevo usuario
 *     tags:
 *       - Usuarios
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 example: user10
 *               email:
 *                 type: string
 *                 example: user10@email.com
 *               password:
 *                 type: string
 *                 example: Qwerty123456*.
 *               role:
 *                 type: string
 *                 example: admin
 *     responses:
 *       '201':
 *         description: Usuario creado
 *       '400':
 *         description: Error en los datos del formulario
 *       '500':
 *         description: Error interno del servidor
 */
router.post('/', createUser)

/**
 * @swagger
 * /usuarios/{id}:
 *   patch:
 *     summary: Actualizar un usuario por su ID
 *     tags:
 *       - Usuarios
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
 *               username:
 *                 type: string
 *                 example: 'nuevoUsername'
 *               email:
 *                 type: string
 *                 example: 'nuevoEmail@ejemplo.com'
 *               password:
 *                 type: string
 *                 example: 'nuevaContraseña123'
 *               role:
 *                 type: string
 *                 example: 'admin'
 *     responses:
 *       '200':
 *         description: Usuario actualizado
 *       '400':
 *         description: Error en los datos del formulario
 *       '404':
 *         description: Usuario no encontrado
 *       '500':
 *         description: Error interno del servidor
 */
router.patch('/:id', partialUpdate)

/**
 * @swagger
 * /usuarios/{id}:
 *   delete:
 *     summary: Eliminar un usuario por su ID
 *     tags:
 *       - Usuarios
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del usuario a eliminar
 *     responses:
 *       '200':
 *         description: Usuario eliminado correctamente
 *       '404':
 *         description: Usuario no encontrado
 *       '500':
 *         description: Error interno del servidor
 */
router.delete('/:id', deleteById)

/**
 * @swagger
 * /usuarios/admin:
 *   get:
 *     summary: Obtener todos los usuarios
 *     tags:
 *       - Usuarios
 *     responses:
 *       '200':
 *         description: Lista de todos los usuarios
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   userid:
 *                     type: integer
 *                   username:
 *                     type: string
 *                   email:
 *                     type: string
 *                   role:
 *                     type: string
 *       '500':
 *         description: Error al recuperar usuarios
 */
router.get('/admin', getAll)

export default router
