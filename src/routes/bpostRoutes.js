import express from 'express'
import { createPost, updatePost, deletePost, getAllPosts, getPostsByIdCategory, getPostsByCategoryName } from '../controllers/postcontroller.js'

const router = express.Router()

/**
 * @swagger
 * /publicaciones:
 *   post:
 *     summary: Crear una nueva publicación
 *     tags:
 *       - Publicaciones
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - content
 *               - userid
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Título de la publicación"
 *               content:
 *                 type: string
 *                 example: "Contenido de la publicación"
 *               userid:
 *                 type: integer
 *                 example: 1
 *               categories:
 *                 type: array
 *                 items:
 *                   type: integer
 *                 example: [3]
 *     responses:
 *       '201':
 *         description: Publicación creada exitosamente
 *       '400':
 *         description: Faltan datos en el formulario
 *       '500':
 *         description: Error interno del servidor
 */
router.post('/', createPost)

/**
 * @swagger
 * /publicaciones/{id}:
 *   patch:
 *     summary: Actualizar una publicación existente por ID
 *     tags:
 *       - Publicaciones
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la publicación a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: Nuevo título de la publicación
 *               content:
 *                 type: string
 *                 example: Nuevo contenido de la publicación
 *               categories:
 *                 type: array
 *                 items:
 *                   type: integer
 *                 example: [1]
 *     responses:
 *       '200':
 *         description: Publicación actualizada correctamente
 *       '400':
 *         description: Faltan datos en el formulario o datos incorrectos
 *       '404':
 *         description: Publicación no encontrada
 *       '500':
 *         description: Error interno del servidor
 */
router.patch('/:id', updatePost)

/**
 * @swagger
 * /publicaciones/{id}:
 *   delete:
 *     summary: Eliminar una publicación por ID
 *     tags:
 *       - Publicaciones
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la publicación a eliminar
 *     responses:
 *       '200':
 *         description: Publicación eliminada correctamente
 *       '404':
 *         description: Publicación no encontrada
 *       '500':
 *         description: Error interno del servidor
 */
router.delete('/:id', deletePost)

/**
 * @swagger
 * /publicaciones:
 *   get:
 *     summary: Obtener todas las publicaciones
 *     tags:
 *       - Publicaciones
 *     responses:
 *       '200':
 *         description: Lista de todas las publicaciones
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   postid:
 *                     type: integer
 *                   title:
 *                     type: string
 *                   content:
 *                     type: string
 *                   userid:
 *                     type: integer
 *       '500':
 *         description: Error interno al obtener las publicaciones
 */
router.get('/', getAllPosts)

/**
 * @swagger
 * /publicaciones/{categoryid}:
 *   get:
 *     summary: Obtener publicaciones por ID de categoría
 *     tags:
 *       - Publicaciones
 *     parameters:
 *       - in: path
 *         name: categoryid
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la categoría para filtrar publicaciones
 *     responses:
 *       '200':
 *         description: Publicaciones encontradas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   postid:
 *                     type: integer
 *                   title:
 *                     type: string
 *                   content:
 *                     type: string
 *                   userid:
 *                     type: integer
 *                   categoryid:
 *                     type: integer
 *       '400':
 *         description: ID de categoría no proporcionado
 *       '404':
 *         description: Categoría no encontrada
 *       '500':
 *         description: Error interno del servidor
 */
router.get('/:categoryid', getPostsByIdCategory)

/**
 * @swagger
 * /publicaciones/name/{categoryName}:
 *   get:
 *     summary: Obtener publicaciones por nombre de categoría
 *     tags:
 *       - Publicaciones
 *     parameters:
 *       - in: path
 *         name: categoryName
 *         required: true
 *         schema:
 *           type: string
 *         description: Nombre de la categoría para filtrar publicaciones
 *     responses:
 *       '200':
 *         description: Publicaciones encontradas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   postid:
 *                     type: integer
 *                   title:
 *                     type: string
 *                   content:
 *                     type: string
 *                   userid:
 *                     type: integer
 *                   categoryid:
 *                     type: integer
 *       '400':
 *         description: Nombre de categoría no proporcionado
 *       '404':
 *         description: Categoría no encontrada
 *       '500':
 *         description: Error interno del servidor
 */
router.get('/name/:categoryName', getPostsByCategoryName)

export default router
