import { Request as ExRequest, Response as ExResponse } from 'express'
import { CustomApiError } from '../../../domain/errors/CustomApiError'
import { PrismaAuthRepository } from '../../repository/PrismaAuthRepository'
import { SignInUseCase } from '../../../application/SignInUseCase'

export class AuthController {
  private authRepository: PrismaAuthRepository

  private signInUseCase: SignInUseCase

  constructor() {
    this.authRepository = new PrismaAuthRepository()

    this.signInUseCase = new SignInUseCase(this.authRepository)
  }

  async signIn(req: ExRequest, res: ExResponse) {
    try {
      const data: { email: string; password: string } = req.body

      const token = await this.signInUseCase.execute(data)

      res.status(200).json({ token })
    } catch (error) {
      if (error instanceof CustomApiError) {
        res.status(error.statusCode).json({ message: error.message })
      }
    }
  }
}
