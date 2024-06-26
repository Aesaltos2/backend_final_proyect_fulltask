import { pool } from '../config/db.js'

export const createComment = async (req, res) => {
  try {
    const { content, userid, postid } = req.body

    if (!postid || !content || !userid) {
      return res.status(400).json({ message: 'Faltan datos en el formulario' })
    }

    const [result] = await pool.execute(
      'INSERT INTO comments (content, userid, postid) VALUES (?, ?, ?)',
      [content, userid, postid]
    )

    if (result.affectedRows !== 1 || !result.insertId) {
      return res.status(500).json({ message: 'Hubo un error al crear el comentario' })
    }

    res.status(201).json({ message: 'Comentario creado' })
  } catch (error) {
    console.error('Error creando comentario:', error)
    return res.status(500).json({ message: 'Error interno', details: error.message })
  }
}

export const updateComment = async (req, res) => {
  try {
    const { id } = req.params
    const { content } = req.body

    if (!content) {
      return res.status(400).json({ message: 'Faltan datos en el formulario' })
    }

    const [result] = await pool.execute(
      'UPDATE comments SET content = ? WHERE commentid = ?',
      [content, id]
    )

    if (result.affectedRows !== 1) {
      return res.status(404).json({ message: 'Comentario no encontrado' })
    }

    res.json({ message: 'Comentario actualizado' })
  } catch (error) {
    console.error('Error actualizando comentario:', error)
    return res.status(500).json({ message: 'Error interno', details: error.message })
  }
}

export const deleteComment = async (req, res) => {
  try {
    const { id } = req.params

    const [result] = await pool.execute('DELETE FROM comments WHERE commentid = ?', [id])

    if (result.affectedRows !== 1) {
      return res.status(404).json({ message: 'Comentario no encontrado' })
    }

    res.json({ message: 'Comentario eliminado' })
  } catch (error) {
    console.error('Error eliminando comentario:', error)
    return res.status(500).json({ message: 'Error interno', details: error.message })
  }
}
