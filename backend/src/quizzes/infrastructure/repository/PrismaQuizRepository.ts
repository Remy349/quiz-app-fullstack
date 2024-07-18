import { CustomApiError } from '../../../errors/CustomApiError'
import PrismaSingleton from '../../../libs/prisma'
import { QuizEntity } from '../../domain/QuizEntity'
import { IQuizRepository } from '../../domain/QuizRepository'

export class PrismaQuizRepository implements IQuizRepository {
  private prisma = PrismaSingleton.getInstance()

  async getAll(): Promise<QuizEntity[]> {
    try {
      return await this.prisma.quiz.findMany()
    } catch (error) {
      throw CustomApiError.internalServerError()
    }
  }

  async getById(quizId: string): Promise<QuizEntity | null> {
    try {
      const quiz = await this.prisma.quiz.findFirst({
        where: { id: quizId }
      })

      if (!quiz) {
        throw CustomApiError.notFoundError('Quiz not found')
      }

      return quiz
    } catch (error) {
      if (error instanceof CustomApiError) {
        throw error
      }

      throw CustomApiError.internalServerError()
    }
  }

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

  async delete(quizId: string): Promise<void> {
    try {
      const quizRegistered = await this.prisma.quiz.findFirst({
        where: { id: quizId }
      })

      if (!quizRegistered) {
        throw CustomApiError.notFoundError('Quiz not found')
      }

      await this.prisma.quiz.delete({
        where: { id: quizId }
      })
    } catch (error) {
      if (error instanceof CustomApiError) {
        throw error
      }

      throw CustomApiError.internalServerError()
    }
  }
}
