import { Router } from 'express'
import { UserController } from '../controller/UserController'
import { QuizController } from '../../../../quizzes/infrastructure/api/controller/QuizController'
import authJwt from '../../../../middleware/authJwt'

const userRouter = Router()

const userController = new UserController()
const quizController = new QuizController()

userRouter.get('/', userController.getAll.bind(userController))

userRouter.get(
  '/profile',
  authJwt,
  userController.getProfile.bind(userController)
)

userRouter.get('/:userId', userController.getById.bind(userController))

userRouter.get(
  '/:userId/quizzes',
  quizController.getAllByUserId.bind(quizController)
)

userRouter.post('/', userController.create.bind(userController))

export default userRouter
