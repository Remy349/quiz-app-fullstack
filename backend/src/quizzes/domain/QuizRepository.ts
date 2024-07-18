import { QuizEntity } from './QuizEntity'

export interface IQuizRepository {
  getAll(): Promise<QuizEntity[]>
  getById(quizId: string): Promise<QuizEntity | null>
  create(quiz: QuizEntity): Promise<QuizEntity>
  delete(quizId: string): Promise<void>
}
