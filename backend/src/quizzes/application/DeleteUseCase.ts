import { IQuizRepository } from '../domain/QuizRepository'

export class DeleteUseCase {
  private quizRepository: IQuizRepository

  constructor(quizRepository: IQuizRepository) {
    this.quizRepository = quizRepository
  }

  async execute(quizId: string): Promise<void> {
    return await this.quizRepository.delete(quizId)
  }
}
