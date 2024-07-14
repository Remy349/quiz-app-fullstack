import { CustomApiError } from '../../../errors/CustomApiError'
import PrismaSingleton from '../../../libs/prisma'
import { QuizEntity } from '../../domain/QuizEntity'
import { IQuizRepository } from '../../domain/QuizRepository'

export class PrismaQuizRepository implements IQuizRepository {
  private prisma = PrismaSingleton.getInstance()

  async create(quiz: QuizEntity): Promise<QuizEntity> {
    try {
      const { name, description } = quiz

      const quizRegistered = await this.prisma.quiz.findFirst({
        where: { name }
      })

      if (quizRegistered) {
        throw CustomApiError.conflictError('Quiz already registered')
      }

      const newQuiz = new QuizEntity(name, description)

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
