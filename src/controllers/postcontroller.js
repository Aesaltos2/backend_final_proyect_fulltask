import { pool } from '../config/db.js'

export const createPost = async (req, res) => {
  try {
    const { title, content, userid, categories } = req.body

    if (!title || !content || !userid || !categories) {
      return res.status(400).json({ message: 'Faltan datos en el formulario' })
    }

    const categoriesArray = Array.isArray(categories) ? categories : []

    const [result] = await pool.execute(
      'INSERT INTO posts(title, content, userid) VALUES (?,?,?)',
      [title, content, userid]
    )

    const postId = result.insertId

    if (categoriesArray.length > 0) {
      await Promise.all(categoriesArray.map(async (categoryId) => {
        const [categoryRows] = await pool.execute(
          'SELECT * FROM categories WHERE categoryid = ?',
          [categoryId]
        )

        if (categoryRows.length === 0) {
          console.error(`No existe la categoría con ID ${categoryId}`)
        } else {
          await pool.execute(
            'INSERT INTO post_categories(postid, categoryid) VALUES (?,?)',
            [postId, categoryId]
          )
        }
      }))
    }

    res.status(201).json({ message: 'Publicación creada exitosamente' })
  } catch (error) {
    console.error('Error creando publicación:', error)
    return res.status(500).json({ message: 'Error interno', details: error.message })
  }
}

export const updatePost = async (req, res) => {
  try {
    const { id } = req.params
    const { title, content, categories } = req.body

    if (!title || !content || !categories) {
      return res.status(400).json({ message: 'Faltan datos en el formulario' })
    }

    const categoriesArray = Array.isArray(categories) ? categories : []

    const [postRows] = await pool.execute('SELECT * FROM posts WHERE postid = ?', [id])
    if (postRows.length === 0) {
      return res.status(404).json({ message: 'Publicación no encontrada' })
    }

    await pool.execute(
      'UPDATE posts SET title=?, content=? WHERE postid=?',
      [title, content, id]
    )

    await pool.execute('DELETE FROM post_categories WHERE postid = ?', [id])

    if (categoriesArray.length > 0) {
      await Promise.all(categoriesArray.map(async (categoryId) => {
        const [categoryRows] = await pool.execute(
          'SELECT * FROM categories WHERE categoryid = ?',
          [categoryId]
        )

        if (categoryRows.length === 0) {
          console.error(`No existe la categoría con ID ${categoryId}`)
        } else {
          await pool.execute(
            'INSERT INTO post_categories(postid, categoryid) VALUES (?,?)',
            [id, categoryId]
          )
        }
      }))
    }

    res.json({ message: 'Publicación actualizada' })
  } catch (error) {
    console.error('Error actualizando publicación:', error)
    return res.status(500).json({ message: 'Error interno', details: error.message })
  }
}

export const deletePost = async (req, res) => {
  try {
    const { id } = req.params

    const [postRows] = await pool.execute('SELECT * FROM posts WHERE postid = ?', [id])
    if (postRows.length === 0) {
      return res.status(404).json({ message: 'Publicación no encontrada' })
    }

    await pool.execute('DELETE FROM post_categories WHERE postid = ?', [id])

    await pool.execute('DELETE FROM posts WHERE postid = ?', [id])

    res.json({ message: 'Publicación eliminada correctamente' })
  } catch (error) {
    console.error('Error eliminando publicación:', error)
    return res.status(500).json({ message: 'Error interno', details: error.message })
  }
}

export const getAllPosts = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM posts')
    res.json(rows)
  } catch (error) {
    console.error('Error obteniendo publicaciones:', error)
    res.status(500).json({ message: 'Error interno al obtener las publicaciones', details: error.message })
  }
}

export const getPostsByIdCategory = async (req, res) => {
  try {
    const { categoryid } = req.params

    if (!categoryid) {
      return res.status(400).json({ message: 'ID de categoría no proporcionado' })
    }

    const [categoryRows] = await pool.execute('SELECT * FROM categories WHERE categoryid = ?', [categoryid])
    if (categoryRows.length === 0) {
      return res.status(404).json({ message: 'Categoría no encontrada' })
    }

    const [postRows] = await pool.execute(
      `SELECT p.postid, p.title, p.content, p.userid, pc.categoryid
       FROM posts p
       JOIN post_categories pc ON p.postid = pc.postid
       WHERE pc.categoryid = ?`,
      [categoryid]
    )

    res.json(postRows)
  } catch (error) {
    console.error('Error obteniendo publicaciones por categoría:', error)
    return res.status(500).json({ message: 'Error interno', details: error.message })
  }
}

export const getPostsByCategoryName = async (req, res) => {
  try {
    const { categoryName } = req.params

    if (!categoryName) {
      return res.status(400).json({ message: 'Nombre de categoría no proporcionado' })
    }

    const [categoryRows] = await pool.execute('SELECT categoryid FROM categories WHERE name = ?', [categoryName])
    if (categoryRows.length === 0) {
      return res.status(404).json({ message: 'Categoría no encontrada' })
    }

    const categoryid = categoryRows[0].categoryid

    const [postRows] = await pool.execute(
      `SELECT p.postid, p.title, p.content, p.userid, pc.categoryid
       FROM posts p
       JOIN post_categories pc ON p.postid = pc.postid
       WHERE pc.categoryid = ?`,
      [categoryid]
    )

    res.json(postRows)
  } catch (error) {
    console.error('Error obteniendo publicaciones por categoría:', error)
    return res.status(500).json({ message: 'Error interno', details: error.message })
  }
}
