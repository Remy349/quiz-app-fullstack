import { QuizEntity } from './QuizEntity'

export interface IQuizRepository {
  getAllByUserId(userId: string): Promise<QuizEntity[]>
  create(quiz: QuizEntity): Promise<QuizEntity>
  delete(quizId: string): Promise<void>
}
