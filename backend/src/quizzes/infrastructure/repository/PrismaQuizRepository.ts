import PrismaSingleton from '../../../db/prisma'
import { CustomApiError } from '../../../errors/CustomApiError'
import { QuizEntity } from '../../domain/QuizEntity'
import { IQuizRepository } from '../../domain/QuizRepository'

export class PrismaQuizRepository implements IQuizRepository {
  private prisma = PrismaSingleton.getInstance()

  async create(quiz: QuizEntity): Promise<QuizEntity> {
    try {
      const { name, description, categoryId, userId } = quiz

      const userRegistered = await this.prisma.user.findFirst({
        where: { id: userId }
      })

      if (!userRegistered) {
        throw CustomApiError.notFoundError('User not found')
      }

      const categoryRegistered = await this.prisma.category.findFirst({
        where: { id: categoryId }
      })

      if (!categoryRegistered) {
        throw CustomApiError.notFoundError('Category not found')
      }

      const quizRegistered = await this.prisma.quiz.findFirst({
        where: { name, userId }
      })

      if (quizRegistered) {
        throw CustomApiError.conflictError('Quiz already registered')
      }

      const newQuiz = new QuizEntity(name, description, categoryId, userId)

      return await this.prisma.quiz.create({
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
