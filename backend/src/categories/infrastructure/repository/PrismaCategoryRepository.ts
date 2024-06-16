import PrismaSingleton from '../../../db/prisma'
import { CustomApiError } from '../../../errors/CustomApiError'
import { CategoryEntity } from '../../domain/CategoryEntity'
import { ICategoryRepository } from '../../domain/CategoryRepository'

export class PrismaCategoryRepository implements ICategoryRepository {
  private prisma = PrismaSingleton.getInstance()

  async getAll(): Promise<CategoryEntity[]> {
    try {
      return await this.prisma.category.findMany()
    } catch (error) {
      throw CustomApiError.internalServerError()
    }
  }

  async create(category: CategoryEntity): Promise<void> {
    try {
      const { name } = category

      const categoryRegistered = await this.prisma.category.findFirst({
        where: { name }
      })

      if (categoryRegistered) {
        throw CustomApiError.conflictError('Category already registered')
      }

      const newCategory = new CategoryEntity(name)

      await this.prisma.category.create({
        data: newCategory
      })
    } catch (error) {
      if (error instanceof CustomApiError) {
        throw error
      }

      throw CustomApiError.internalServerError()
    }
  }

  async delete(categoryId: string): Promise<void> {
    try {
      const categoryRegistered = await this.prisma.category.findFirst({
        where: { id: categoryId }
      })

      if (!categoryRegistered) {
        throw CustomApiError.notFoundError('Category not found')
      }

      await this.prisma.category.delete({
        where: { id: categoryId }
      })
    } catch (error) {
      if (error instanceof CustomApiError) {
        throw error
      }

      throw CustomApiError.internalServerError()
    }
  }
}
