import path from "node:path";
import { pool } from "../config/db.js";
import { IncidentModel } from "../models/incidentModel.js";
import fs from 'node:fs/promises'

export const incidentId = async (req, res) => {
    try {
        const { id } = req.params
        const incId = await IncidentModel.incdId(id)
        if (incId.length === 0) return res.status(400).json({ message: 'No se encontro incidente' })
        res.status(200).json(incId);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

}

export const incidentAll = async (req, res) => {
    try {
        const inci = await IncidentModel.incdAll()
        if (inci.length === 0) return res.status(400).json({ message: 'No hay incidentes' })
        res.status(200).json(inci);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

}

export const incidentCreate = async (req, res) => {
    try {
        const { usuario_id, asunto, descripcion, tipo, estado } = req.body;
        const files = req.files || [];
        console.log(req.files);

        const arrayImg = files.map(im => im.originalname);
        const imagenes = arrayImg.length > 0 ? JSON.stringify(arrayImg) : null; 

        if (usuario_id && asunto && descripcion && tipo && estado) {
            const incinew = await IncidentModel.incdCreate({ usuario_id, asunto, descripcion, tipo, estado, imagenes });
            if (incinew.affectedRows === 1) return res.status(200).json({ message: 'Se ha creado el incidente' });
            if (incinew.affectedRows === 0) return res.status(400).json({ message: 'Error al crear el incidente' });
        }

        res.status(400).json({ message: 'Faltan datos para notificar el incidente' });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const incidenUpdate = async (req, res) => {
    try {
        const { asunto, descripcion, tipo, estado } = req.body
        const { id } = req.params

        if (asunto || descripcion || tipo || estado|| id) {
            const incinew = await IncidentModel.incdUpdate({ asunto, descripcion, tipo, estado, id })
            if (incinew.affectedRows === 1) return res.status(200).json({ message: 'Incidente actualizado con exito' })
            if (incinew.affectedRows === 0) return res.status(400).json({ message: 'Error al actualizar el incidente' })
        }

        res.status(400).json({ message: 'Faltan datos relevantes' })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }

}
export const incidentFromUs = async (req, res) => {
    try {
        const { id } = req.params
        const incfrUs = await IncidentModel.incdFrUs(id)
        if (incfrUs.length === 0) return res.status(400).json({ message: 'No hay incidentes para este usuario' })
        res.status(200).json(incfrUs);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

}

export const incidentDelete = async (req, res) => {
    try {
        const { id } = req.params
        const incIdDel = await IncidentModel.incdDel(id)
        if (incIdDel.affectedRows === 1) return res.status(200).json({ message: 'Incidente eliminado con exito' })
        if (incIdDel.affectedRows === 0) return res.status(400).json({ message: 'Error al eliminar el incidente' })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }

}

export const getImg = async (req, res) => {
    try {
        const { name } = req.params
        const ruta = path.resolve(`./public/images/${name}`)
        await fs.access(ruta)

        res.sendFile(ruta)

    } catch (error) {
        if (error.errno === -4058) { return res.status(404).json({ message: 'La foto no se pudo encontrar' }) }

        res.status(500).json({ message: error.message })
    }

}
