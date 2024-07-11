import { QuizEntity } from '../domain/QuizEntity'
import { IQuizRepository } from '../domain/QuizRepository'

export class GetByIdUseCase {
  private quizRepository: IQuizRepository

  constructor(quizRepository: IQuizRepository) {
    this.quizRepository = quizRepository
  }

  async execute(quizId: string): Promise<QuizEntity | null> {
    return await this.quizRepository.getById(quizId)
  }
}
