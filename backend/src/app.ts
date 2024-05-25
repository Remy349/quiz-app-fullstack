import express from 'express'
import morgan from 'morgan'

import cors from './lib/cors'

import { authRouter } from './routes/auth'

const app = express()

app.use(cors)
app.use(express.json())
app.use(morgan('dev'))

app.use('/api/auth', authRouter)

export default app
