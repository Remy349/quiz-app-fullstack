import { Request as ExRequest, Response as ExResponse } from 'express'
import { CustomApiError } from '../../../../errors/CustomApiError'
import { PrismaCategoryRepository } from '../../repository/PrismaCategoryRepository'
import { GetAllUseCase } from '../../../application/GetAllUseCase'
import { DeleteUseCase } from '../../../application/DeleteUseCase'
import { CreateUseCase } from '../../../application/CreateUseCase'

export class CategoryController {
  private categoryRepository: PrismaCategoryRepository

  private getAllUseCase: GetAllUseCase
  private createUseCase: CreateUseCase
  private deleteUseCase: DeleteUseCase

  constructor() {
    this.categoryRepository = new PrismaCategoryRepository()

    this.getAllUseCase = new GetAllUseCase(this.categoryRepository)
    this.createUseCase = new CreateUseCase(this.categoryRepository)
    this.deleteUseCase = new DeleteUseCase(this.categoryRepository)
  }

  async getAll(_req: ExRequest, res: ExResponse) {
    try {
      const categories = await this.getAllUseCase.execute()

      res.status(200).json(categories)
    } catch (error) {
      if (error instanceof CustomApiError) {
        res.status(error.statusCode).json({ message: error.message })
      }
    }
  }

  async create(req: ExRequest, res: ExResponse) {
    try {
      const data: { name: string } = req.body

      await this.createUseCase.execute(data)

      res.status(201).json({ message: 'Category successfully created' })
    } catch (error) {
      if (error instanceof CustomApiError) {
        res.status(error.statusCode).json({ message: error.message })
      }
    }
  }

  async delete(req: ExRequest, res: ExResponse) {
    try {
      const { categoryId } = req.params

      await this.deleteUseCase.execute(categoryId)

      res.status(204).send()
    } catch (error) {
      if (error instanceof CustomApiError) {
        res.status(error.statusCode).json({ message: error.message })
      }
    }
  }
}
