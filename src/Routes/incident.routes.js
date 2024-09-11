import { Router } from "express";
import { getImg, incidenUpdate, incidentAll, incidentCreate, incidentDelete, incidentFromUs, incidentId } from "../controllers/incident.controller.js";
import { upload } from "../config/multer.js";

const router = Router()
 
router.get('/all',incidentAll)
router.get('/:id',incidentId)
router.get('/u/:id',incidentFromUs)
router.post('/',upload.array('imagenes', 3),incidentCreate)
router.patch('/:id',incidenUpdate)
router.delete('/:id',incidentDelete)
router.get('/i/:name',getImg)

export default router