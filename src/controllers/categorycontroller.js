import { pool } from '../config/db.js'

export const createCategory = async (req, res) => {
  try {
    const { name } = req.body

    if (!name) {
      return res.status(400).json({ message: 'Falta el nombre de la categoría en el formulario' })
    }

    const [existingCategory] = await pool.execute('SELECT * FROM categories WHERE name = ?', [name])
    if (existingCategory.length > 0) {
      return res.status(409).json({ message: 'La categoría ya existe' })
    }

    const [result] = await pool.execute('INSERT INTO categories (name) VALUES (?)', [name])

    if (result.affectedRows !== 1 && !result.insertId) {
      return res.status(500).json({ message: 'Hubo un error al crear la categoría' })
    }

    res.status(201).json({ message: 'Categoría creada' })
  } catch (error) {
    console.error('Error creando categoría:', error)
    return res.status(500).json({ message: 'Error interno', details: error.message })
  }
}

export const updateCategory = async (req, res) => {
  try {
    const { id } = req.params
    const { name } = req.body

    if (!name) {
      return res.status(400).json({ message: 'Falta el nombre de la categoría en el formulario' })
    }

    const [existingCategory] = await pool.execute('SELECT * FROM categories WHERE categoryid = ?', [id])
    if (existingCategory.length === 0) {
      return res.status(404).json({ message: 'Categoría no encontrada' })
    }

    const [result] = await pool.execute('UPDATE categories SET name = ? WHERE categoryid = ?', [name, id])

    if (result.affectedRows !== 1) {
      return res.status(500).json({ message: 'Hubo un error al actualizar la categoría' })
    }

    res.json({ message: 'Categoría actualizada' })
  } catch (error) {
    console.error('Error actualizando categoría:', error)
    return res.status(500).json({ message: 'Error interno', details: error.message })
  }
}

export const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params

    const [existingCategory] = await pool.execute('SELECT * FROM categories WHERE categoryid = ?', [id])
    if (existingCategory.length === 0) {
      return res.status(404).json({ message: 'Categoría no encontrada' })
    }

    const [result] = await pool.execute('DELETE FROM categories WHERE categoryid = ?', [id])

    if (result.affectedRows !== 1) {
      return res.status(500).json({ message: 'Hubo un error al eliminar la categoría' })
    }

    res.json({ message: 'Categoría eliminada' })
  } catch (error) {
    console.error('Error eliminando categoría:', error)
    return res.status(500).json({ message: 'Error interno', details: error.message })
  }
}
