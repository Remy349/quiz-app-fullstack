import { Request as ExRequest, Response as ExResponse } from 'express'
import { PrismaUserRepository } from '../../repository/PrismaUserRepository'
import { GetAllUseCase } from '../../../application/GetAllUseCase'
import { GetByIdUseCase } from '../../../application/GetByIdUseCase'
import { CreateUseCase } from '../../../application/CreateUseCase'
import { CustomApiError } from '../../../../errors/CustomApiError'
import { IExRequest } from '../../../../middleware/authJwt'

export class UserController {
  private userRepository: PrismaUserRepository

  private getAllUseCase: GetAllUseCase
  private getByIdUseCase: GetByIdUseCase
  private createUseCase: CreateUseCase

  constructor() {
    this.userRepository = new PrismaUserRepository()

    this.getAllUseCase = new GetAllUseCase(this.userRepository)
    this.getByIdUseCase = new GetByIdUseCase(this.userRepository)
    this.createUseCase = new CreateUseCase(this.userRepository)
  }

  async getAll(_req: ExRequest, res: ExResponse) {
    try {
      const users = await this.getAllUseCase.execute()

      res.status(200).json(users)
    } catch (error) {
      if (error instanceof CustomApiError) {
        res.status(error.statusCode).json({ message: error.message })
      }
    }
  }

  async getProfile(req: IExRequest, res: ExResponse) {
    try {
      const userId = req.userId as string

      const user = await this.getByIdUseCase.execute(userId)

      res.status(200).json(user)
    } catch (error) {
      if (error instanceof CustomApiError) {
        res.status(error.statusCode).json({ message: error.message })
      }
    }
  }

  async getById(req: ExRequest, res: ExResponse) {
    try {
      const { userId } = req.params

      const user = await this.getByIdUseCase.execute(userId)

      res.status(200).json(user)
    } catch (error) {
      if (error instanceof CustomApiError) {
        res.status(error.statusCode).json({ message: error.message })
      }
    }
  }

  async create(req: ExRequest, res: ExResponse) {
    try {
      const data: { username: string; email: string; password: string } =
        req.body

      await this.createUseCase.execute(data)

      res.status(201).json({ message: 'User successfully created' })
    } catch (error) {
      if (error instanceof CustomApiError) {
        res.status(error.statusCode).json({ message: error.message })
      }
    }
  }
}
