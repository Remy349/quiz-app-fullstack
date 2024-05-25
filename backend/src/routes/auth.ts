import { Router } from 'express'
import { AuthController } from '../controllers/auth'

export const authRouter = Router()

authRouter.post('/signin', AuthController.signIn)

authRouter.post('/signup', AuthController.signUp)