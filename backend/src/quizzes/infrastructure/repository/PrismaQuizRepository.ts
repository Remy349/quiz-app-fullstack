import PrismaSingleton from '../../../db/prisma'
import { CustomApiError } from '../../../errors/CustomApiError'
import { QuizEntity } from '../../domain/QuizEntity'
import { IQuizRepository } from '../../domain/QuizRepository'

export class PrismaQuizRepository implements IQuizRepository {
  private prisma = PrismaSingleton.getInstance()

  async create(quiz: QuizEntity): Promise<void> {
    try {
      const { name, description, categoryId } = quiz

      const categoryRegistered = await this.prisma.category.findFirst({
        where: { id: categoryId }
      })

      if (!categoryRegistered) {
        throw CustomApiError.notFoundError('Category not found')
      }

      const newQuiz = new QuizEntity(name, description, categoryId)

      await this.prisma.quiz.create({
        data: newQuiz
      })
    } catch (error) {
      if (error instanceof CustomApiError) {
        throw error
      }

      throw CustomApiError.internalServerError()
    }
  }
}
