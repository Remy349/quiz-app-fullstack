import { Router } from 'express'
import { UserController } from '../controller/UserController'

const userRoute = Router()

const userController = new UserController()

userRoute.get('/', userController.getAll.bind(userController))

userRoute.get('/:userId', userController.getById.bind(userController))

userRoute.post('/', userController.create.bind(userController))

export default userRoute
