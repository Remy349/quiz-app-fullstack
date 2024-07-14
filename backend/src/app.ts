import 'dotenv/config'

import express from 'express'
import morgan from 'morgan'

import cors from './libs/cors'

import quizRouter from './quizzes/infrastructure/api/QuizRouter'

const PORT = (process.env.PORT || 3000) as number

const app = express()

app.use(cors)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

app.use('/api/v1/quizzes', quizRouter)

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})
