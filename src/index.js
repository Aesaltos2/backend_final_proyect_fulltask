import express from 'express'
import { PORT } from './config/config.js'

import userRoutes from './routes/auserRouters.js'
import postRoutes from './routes/bpostRoutes.js'
import categoryRoutes from './routes/categoryRoutes.js'
import commentRoutes from './routes/commentRoutes.js'

const app= express()
app.use(morgan('dev'))
app.use(express.json())
app.use(validCors)

app.use('/api/auth',routerAuth)
app.use('/api/user',routerUser)
app.use('/api/incident',routerIncident)
app.use('/api/comment',routerComment)

app.use('*', (req, res) => res.status(404).send('La ruta no existe'))

app.listen(PORT, () => console.log(`Servidor ejecutandose http://localhost:${PORT}`))
