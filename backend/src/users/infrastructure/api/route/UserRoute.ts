import { Router } from 'express'
import { UserController } from '../controller/UserController'
import authJwt from '../../../../middleware/authJwt'

const userRouter = Router()

const userController = new UserController()

userRouter.get('/', userController.getAll.bind(userController))

userRouter.get(
  '/profile',
  authJwt,
  userController.getProfile.bind(userController)
)

userRouter.get('/:userId', userController.getById.bind(userController))

userRouter.post('/', userController.create.bind(userController))

export default userRouter
