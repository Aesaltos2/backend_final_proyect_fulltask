import { pool } from "../config/db.js";

export class UserModel {

    // Obtener todos los usuarios
    static async userAll() {
        const userAll = await pool.execute('SELECT * FROM usuarios');
        return userAll[0];
    }

    // Obtener un usuario por ID
    static async userId(id) {
        const userAll = await pool.execute('SELECT * FROM usuarios WHERE id=?', [id]);
        return userAll[0];
    }

    // Crear un nuevo usuario
    static async userCreat({ nombre, apellido, email, passEncrip, departamento, rol, numero_contacto }) {
        const userAll = await pool.execute(
            'INSERT INTO usuarios (nombre, apellido, email, password, departamento, rol, numero_contacto) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [nombre, apellido, email, passEncrip, departamento, rol, numero_contacto]
        );
        return userAll[0];
    }

    // Actualizar un usuario existente
    static async userUpdt({ nombre, apellido, email, departamento, rol, numero_contacto, passEncrip, id }) {

        let sql = [];
        let values = [];

        if (nombre) {
            sql.push('nombre=?');
            values.push(nombre);
        }

        if (apellido) {
            sql.push('apellido=?');
            values.push(apellido);
        }

        if (email) {
            sql.push('email=?');
            values.push(email);
        }

        if (departamento) {
            sql.push('departamento=?');
            values.push(departamento);
        }

        if (numero_contacto) {
            sql.push('numero_contacto=?');
            values.push(numero_contacto);
        }

        if (rol) {
            sql.push('rol=?');
            values.push(rol);
        }

        if (passEncrip) {
            sql.push('password=?');
            values.push(passEncrip);
        }

        if (id) {
            values.push(id);
        }

        const stsql = sql.join(', ');

        const userUp = await pool.execute(`UPDATE usuarios SET ${stsql} WHERE id = ?`, values);
        return userUp[0];
    }

    // Eliminar un usuario por ID
    static async userDel(id) {
        const userDl = await pool.execute('DELETE FROM usuarios WHERE id= ?', [id]);
        return userDl[0];
    }

    // Obtener un usuario por correo electrónico (para login)
    static async userLogin(email) {
        const userDl = await pool.execute('SELECT * FROM usuarios WHERE email= ?', [email]);
        return userDl[0];
    }
}
