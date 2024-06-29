import { Request as ExRequest, Response as ExResponse } from 'express'
import { CustomApiError } from '../../../../errors/CustomApiError'
import { PrismaQuizRepository } from '../../repository/PrismaQuizRepository'
import { CreateUseCase } from '../../../application/CreateUseCase'
import { GetAllByUserIdUseCase } from '../../../application/GetAllByUserIdUseCase'

export class QuizController {
  private quizRepository: PrismaQuizRepository

  private getAllByUserIdUseCase: GetAllByUserIdUseCase
  private createUseCase: CreateUseCase

  constructor() {
    this.quizRepository = new PrismaQuizRepository()

    this.getAllByUserIdUseCase = new GetAllByUserIdUseCase(this.quizRepository)
    this.createUseCase = new CreateUseCase(this.quizRepository)
  }

  async getAllByUserId(req: ExRequest, res: ExResponse) {
    try {
      const { userId } = req.params

      const quizzes = await this.getAllByUserIdUseCase.execute(userId)

      res.status(200).json(quizzes)
    } catch (error) {
      if (error instanceof CustomApiError) {
        res.status(error.statusCode).json({ message: error.message })
      }
    }
  }

  async create(req: ExRequest, res: ExResponse) {
    try {
      const data: {
        name: string
        description: string
        categoryId: string
        userId: string
      } = req.body

      const quiz = await this.createUseCase.execute(data)

      res.status(201).json(quiz)
    } catch (error) {
      if (error instanceof CustomApiError) {
        res.status(error.statusCode).json({ message: error.message })
      }
    }
  }
}
