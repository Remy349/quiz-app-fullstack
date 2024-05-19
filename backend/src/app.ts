import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import { usersRouter } from './routes/users'

const app = express()

app.use(
  cors({
    origin: (origin, callback) => {
      const WHITE_LIST = ['http://localhost:5173']

      if (!origin) return callback(null, true)

      if (WHITE_LIST.includes(origin)) {
        return callback(null, true)
      }

      return callback(new Error('Not allowed by CORS'))
    }
  })
)

app.use(express.json())
app.use(morgan('dev'))

app.use('/api/users', usersRouter)

export default app
