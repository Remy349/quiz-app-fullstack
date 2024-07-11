import { QuizEntity } from './QuizEntity'

export interface IQuizRepository {
  getAllByUserId(userId: string): Promise<QuizEntity[]>
  getById(quizId: string): Promise<QuizEntity | null>
  create(quiz: QuizEntity): Promise<QuizEntity>
  delete(quizId: string): Promise<void>
}
