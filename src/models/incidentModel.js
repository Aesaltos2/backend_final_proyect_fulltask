import { pool } from "../config/db.js";

export class IncidentModel {

    static async incdAll() {
        const incdAll = await pool.execute('SELECT * FROM incidencia')
        return incdAll[0]
    }
    
    static async incdId(id) {
        const incdAll = await pool.execute('SELECT * FROM incidencia WHERE id= ?', [id])
        return incdAll[0]
    }

    static async incdCreate({ usuario_id, asunto, descripcion, tipo, estado, fecha_creacion }) {
        let sql = ['usuario_id, asunto, descripcion, tipo, estado, fecha_creacion']
        let values = [usuario_id, asunto, descripcion, tipo, estado, fecha_creacion]
        let insert = ['?,?,?,?,?,?']

        if (imagens) {
            sql.push('imagens')
            values.push(imagens)
            insert.push('?')
        }

        const stsql = sql.join(',')
        const stins = insert.join(',')

        const incdNew = await pool.execute(`INSERT INTO incidencia (${stsql}) values (${stins})`, values)
        return incdNew[0]
    }

    static async incdUpdate({ asunto, descripcion, tipo, estado, fecha_creacion, id }) {
        let sql = []
        let values = []

        if (asunto) {
            sql.push('asunto=?')
            values.push(asunto)
        }

        if (descripcion) {
            sql.push('descripcion=?')
            values.push(descripcion)
        }

        if (tipo) {
            sql.push('tipo=?')
            values.push(tipo)
        }

        if (estado) {
            sql.push('estado=?')
            values.push(estado)
        }

        if (fecha_creacion) {
            sql.push('fecha_creacion=?')
            values.push(fecha_creacion)
        }

        if (id) {
            values.push(id)
        }

        const stsql = sql.join(',')

        const incdUp = await pool.execute(`UPDATE incidencia SET ${stsql} WHERE id = ?`, values)
        return incdUp[0]
    }

    static async incdFrUs(id) {
        const incdUs = await pool.execute('SELECT * FROM incidencia WHERE usuario_id=?', [id])
        return incdUs[0]
    }

    static async incdDel(id) {
        const incDel = await pool.execute('DELETE FROM incidencia WHERE id= ?', [id])
        return incDel[0]
    }
}
