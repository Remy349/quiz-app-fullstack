import { Router } from 'express'
import { AuthController } from '../controller/AuthController'

const authRouter = Router()

const authController = new AuthController()

authRouter.post('/signin', authController.signIn.bind(authController))

export default authRouter
