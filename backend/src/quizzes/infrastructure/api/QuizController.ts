import { Request as ExRequest, Response as ExResponse } from 'express'
import { CustomApiError } from '../../../errors/CustomApiError'
import { CreateUseCase } from '../../application/CreateUseCase'
import { PrismaQuizRepository } from '../repository/PrismaQuizRepository'

export class QuizController {
  private quizRepository: PrismaQuizRepository

  private createUseCase: CreateUseCase

  constructor() {
    this.quizRepository = new PrismaQuizRepository()

    this.createUseCase = new CreateUseCase(this.quizRepository)
  }

  async create(req: ExRequest, res: ExResponse) {
    try {
      const data: { name: string; description: string } = req.body

      const quiz = await this.createUseCase.execute(data)

      res.status(201).json(quiz)
    } catch (error) {
      if (error instanceof CustomApiError) {
        res.status(error.statusCode).json({ message: error.message })
      }
    }
  }
}
