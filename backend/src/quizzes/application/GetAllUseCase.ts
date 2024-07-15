import { QuizEntity } from '../domain/QuizEntity'
import { IQuizRepository } from '../domain/QuizRepository'

export class GetAllUseCase {
  private quizRepository: IQuizRepository

  constructor(quizRepository: IQuizRepository) {
    this.quizRepository = quizRepository
  }

  async execute(): Promise<QuizEntity[]> {
    return await this.quizRepository.getAll()
  }
}
