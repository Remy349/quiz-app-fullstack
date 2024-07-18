import { Request as ExRequest, Response as ExResponse } from 'express'
import { CustomApiError } from '../../../errors/CustomApiError'
import { CreateUseCase } from '../../application/CreateUseCase'
import { PrismaQuizRepository } from '../repository/PrismaQuizRepository'
import { GetAllUseCase } from '../../application/GetAllUseCase'
import { DeleteUseCase } from '../../application/DeleteUseCase'
import { GetByIdUseCase } from '../../application/GetByIdUseCase'

export class QuizController {
  private quizRepository: PrismaQuizRepository

  private getAllUseCase: GetAllUseCase
  private getByIdUseCase: GetByIdUseCase
  private createUseCase: CreateUseCase
  private deleteUseCase: DeleteUseCase

  constructor() {
    this.quizRepository = new PrismaQuizRepository()

    this.getAllUseCase = new GetAllUseCase(this.quizRepository)
    this.getByIdUseCase = new GetByIdUseCase(this.quizRepository)
    this.createUseCase = new CreateUseCase(this.quizRepository)
    this.deleteUseCase = new DeleteUseCase(this.quizRepository)
  }

  async getAll(_req: ExRequest, res: ExResponse) {
    try {
      const quizzes = await this.getAllUseCase.execute()

      res.status(200).json(quizzes)
    } catch (error) {
      if (error instanceof CustomApiError) {
        res.status(error.statusCode).json({ message: error.message })
      }
    }
  }

  async getById(req: ExRequest, res: ExResponse) {
    try {
      const { quizId } = req.params

      const quiz = await this.getByIdUseCase.execute(quizId)

      res.status(200).json(quiz)
    } catch (error) {
      if (error instanceof CustomApiError) {
        res.status(error.statusCode).json({ message: error.message })
      }
    }
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

  async delete(req: ExRequest, res: ExResponse) {
    try {
      const { quizId } = req.params

      await this.deleteUseCase.execute(quizId)

      res.status(204).send()
    } catch (error) {
      if (error instanceof CustomApiError) {
        res.status(error.statusCode).json({ message: error.message })
      }
    }
  }
}
