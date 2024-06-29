import { QuizEntity } from '../domain/QuizEntity'
import { IQuizRepository } from '../domain/QuizRepository'

export class GetAllByUserIdUseCase {
  private quizRepository: IQuizRepository

  constructor(quizRepository: IQuizRepository) {
    this.quizRepository = quizRepository
  }

  async execute(userId: string): Promise<QuizEntity[]> {
    return await this.quizRepository.getAllByUserId(userId)
  }
}
