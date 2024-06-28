import { QuizEntity } from '../domain/QuizEntity'
import { IQuizRepository } from '../domain/QuizRepository'

interface ICreateData {
  name: string
  description: string
  categoryId: string
  userId: string
}

export class CreateUseCase {
  private quizRepository: IQuizRepository

  constructor(quizRepository: IQuizRepository) {
    this.quizRepository = quizRepository
  }

  async execute(data: ICreateData): Promise<QuizEntity> {
    const { name, description, categoryId, userId } = data

    const quiz = new QuizEntity(name, description, categoryId, userId)

    return await this.quizRepository.create(quiz)
  }
}
