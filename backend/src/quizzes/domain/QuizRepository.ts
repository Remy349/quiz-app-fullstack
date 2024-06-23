import { QuizEntity } from './QuizEntity'

export interface IQuizRepository {
  create(quiz: QuizEntity): Promise<void>
}
