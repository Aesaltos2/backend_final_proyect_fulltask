import { pool } from '../config/db.js'

export const createUser = async (req, res) => {
  try {
    const { username, email, password, role } = req.body

    if (!username || !email || !password || !role) { return res.status(400).json({ message: 'Faltan datos en el formulario' }) }

    const [result] = await pool.execute(
      'INSERT INTO users(username, email, password, role) VALUES (?,?,?,?)', [username, email, password, role]
    )

    if (result.affectedRows !== 1 && !result.insertId) {
      return res.status(500).json({ message: 'Hubo un error al crear el Usuario' })
    }

    res.status(201).json({ message: 'Usuario guardado' })
  } catch (error) {
    return res
      .status(500)
      .json({ message: 'Error interno', details: error.message })
  }
}

export const partialUpdate = async (req, res) => {
  try {
    const { id } = req.params
    const { username, email, password, role } = req.body

    let query = 'UPDATE users SET'
    const params = []

    if (username) {
      query += ' username=?, '
      params.push(username)
    }

    if (email) {
      query += ' email=?, '
      params.push(email)
    }

    if (password) {
      query += ' password=?, '
      params.push(password)
    }

    if (role) {
      query += ' role=?, '
      params.push(role)
    }

    query = query.slice(0, -2)
    query += ' WHERE userid=?'
    params.push(id)

    const [result] = await pool.execute(query, params)

    if (result.affectedRows !== 1 && !result.insertId) {
      return res.status(500).json({ message: 'Hubo un error al crear el Usuario' })
    }

    res.json({ message: 'Usuario Actualizado' })
  } catch (error) {
    return res
      .status(500)
      .json({ message: 'Error interno', details: error.message })
  }
}

export const deleteById = async (req, res) => {
  const { id } = req.params

  try {
    const [result] = await pool.execute('DELETE FROM users WHERE userid = ?', [id])

    if (result.affectedRows === 1) {
      return res.json({ message: 'Usuario eliminado' })
    } else {
      return res.status(404).json({ message: 'Usuario no encontrado' })
    }
  } catch (error) {
    return res.status(500).json({ message: 'Error interno', details: error.message })
  }
}

export const getAll = async (req, res) => {
  try {
    const [result] = await pool.query('SELECT * FROM users')
    res.json(result)
  } catch (error) {
    console.error('Error al recuperar usuarios:', error)
    res.status(500).json({ message: 'Error al recuperar usuarios', detalles: error.message })
  }
}
