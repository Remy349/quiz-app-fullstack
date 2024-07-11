import { Router } from 'express'
import { QuizController } from '../controller/QuizController'

const quizRouter = Router()

const quizController = new QuizController()

quizRouter.get('/:quizId', quizController.getById.bind(quizController))

quizRouter.post('/', quizController.create.bind(quizController))

quizRouter.delete('/:quizId', quizController.delete.bind(quizController))

export default quizRouter
