import express from 'express'
import morgan from 'morgan'

import { usersRouter } from './routes/users'

const app = express()

app.use(morgan('dev'))

app.use('/api/users', usersRouter)

export default app
