import { Router } from 'express'
import { QuizController } from '../controller/QuizController'

const quizRouter = Router()

const quizController = new QuizController()

quizRouter.post('/', quizController.create.bind(quizController))

export default quizRouter
