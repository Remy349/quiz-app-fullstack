import { QuizEntity } from './QuizEntity'

export interface IQuizRepository {
  getAll(): Promise<QuizEntity[]>
  create(quiz: QuizEntity): Promise<QuizEntity>
  delete(quizId: string): Promise<void>
}
