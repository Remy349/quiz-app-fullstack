import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import { usersRouter } from './routes/users'

const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.use('/api/users', usersRouter)

export default app
