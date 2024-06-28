import express from 'express'
import morgan from 'morgan'

import cors from './libs/cors'

import authRouter from './auth/infrastructure/api/route/AuthRoute'
import userRouter from './users/infrastructure/api/route/UserRoute'
import categoryRouter from './categories/infrastructure/api/route/CategoryRoute'
import quizRouter from './quizzes/infrastructure/api/route/QuizRoute'

const app = express()

app.use(cors)
app.use(express.json())
app.use(morgan('dev'))

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/users', userRouter)
app.use('/api/v1/categories', categoryRouter)
app.use('/api/v1/quizzes', quizRouter)

export default app
