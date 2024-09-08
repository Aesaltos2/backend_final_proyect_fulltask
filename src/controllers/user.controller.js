import { hash } from "bcrypt";
import { UserModel } from "../models/userModel.js";

export const usersAll = async (req, res) => {
    try {
        const users = await UserModel.userAll()
        if (users.length === 0) return res.status(400).json({ message: 'No hay usuarios' })
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

}

export const userId = async (req, res) => {
    try {
        const { id } = req.params

        const user = await UserModel.userId(id)
        if (user.length === 0) return res.status(400).json({ message: 'No existe el usuario' })
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

}

export const userCreate = async (req, res) => {
    try {
        const { nombre, apellido, email, password, departamento, rol, numero_contacto } = req.body

        if (nombre && email && password && departamento && rol && numero_contacto) {
            const passEncrip = await hash(password, 10)

            const incinew = await UserModel.userCreat({ nombre, apellido:apellido || 'null' , email, password, departamento, rol, numero_contacto, passEncrip })
            if (incinew.affectedRows === 1) return res.status(200).json({ message: 'Usuario creado con exito' })
            if (incinew.affectedRows === 0) return res.status(400).json({ message: 'Error al crear el usuario' })
        }

    } catch (error) {
        res.status(500).json({ message: error.message })
    }

}

export const userUpdate = async (req, res) => {
    try {
        const { nombre, apellido, email, password, departamento, rol, numero_contacto } = req.body
        const { id } = req.params
        let passEncrip = ''

        if (nombre || apellido || email || password || departamento || rol || numero_contacto) {
           if(password){  passEncrip = await hash(password, 10) }

            const incinew = await UserModel.userUpdt({ nombre, apellido, email, password, departamento, rol, numero_contacto, passEncrip, id })
            if (incinew.affectedRows === 1) return res.status(200).json({ message: 'Usuario actualizado con exito' })
            if (incinew.affectedRows === 0) return res.status(400).json({ message: 'Error al actualizar el usuario' })
        }

    } catch (error) {
        res.status(500).json({ message: error.message })
    }

}

export const userDelete = async (req, res) => {
    try {
        const { id } = req.params

        const user = await UserModel.userDel(id)
        if (user.affectedRows === 1) return res.status(200).json({ message: 'Usuario eliminado con exito' })
        if (user.affectedRows === 0) return res.status(400).json({ message: 'Error al eliminar el usuario' })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}