import express from 'express'
import { PORT } from './config/config.js'
import { swaggerDocs } from './swagger.js'

import userRoutes from './routes/auserRouters.js'
import postRoutes from './routes/bpostRoutes.js'
import categoryRoutes from './routes/categoryRoutes.js'
import commentRoutes from './routes/commentRoutes.js'

const app = express()
app.use(express.json())

// Usar los routers
app.use('/usuarios', userRoutes)
app.use('/publicaciones', postRoutes)
app.use('/categorias', categoryRoutes)
app.use('/comentarios', commentRoutes)

swaggerDocs(app)
app.use('*', (req, res) => res.status(404).send('La ruta no existe'))

app.listen(PORT, () => console.log(`Servidor ejecutandose http://localhost:${PORT}`))
