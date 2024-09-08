import { pool } from "../config/db.js";

export class UserModel {

    static async userAll() {
        const userAll = await pool.execute('SELECT * FROM usuarios')
        return userAll[0]
    }
    static async userId(id) {
        const userAll = await pool.execute('SELECT * FROM usuarios WHERE userId=?', [id])
        return userAll[0]
    }
    static async userCreat({ nombre, apellido, email, passEncrip, departamento, rol, numero_contacto }) {
        const userAll = await pool.execute('INSERT INTO usuarios (nombre, apellido, email, password, departamento, rol, numero_contacto ) VALUES (?,?,?,?,?,?,?) ', [nombre, apellido, email, password, departamento, rol, numero_contacto , passEncrip])
        return userAll[0]
    }
    static async userUpdt({ nombre, apellido, email, departamento, rol, numero_contacto, passEncrip, id }) {

        let sql = []
        let values = []

        if (nombre) {
            sql.push('nombre=?')
            values.push(nombre)
        }

        if (apellido) {
            sql.push('apellido=?')
            values.push(apellido)
        }

        if (email) {
            sql.push('email=?')
            values.push(email)
        }

        if (departamento) {
            sql.push('departamento=?')
            values.push(departamento)
        }


        if (numero_contacto) {
            sql.push('numero_contacto=?')
            values.push(usuario)
        }

        if (rol) {
            sql.push('rol=?')
            values.push(rol)
        }

        if (passEncrip) {
            sql.push('password=?')
            values.push(passEncrip)
        }

        if (id) {
            values.push(id)
        }

        const stsql = sql.join(',')

        const userUp = await pool.execute(`UPDATE usuarios SET ${stsql} WHERE id = ?`, values)
        return userUp[0]
    }
    static async userDel(id) {
        const userDl = await pool.execute('DELETE FROM usuarios WHERE id= ?', [id])
        return userDl[0]
    }
    static async userLogin(usuario) {
        const userDl = await pool.execute('SELECT * FROM usuarios WHERE usuario= ?', [email])
        return userDl[0]
    }
}