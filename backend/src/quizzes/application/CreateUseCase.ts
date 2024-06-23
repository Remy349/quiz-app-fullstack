import { QuizEntity } from '../domain/QuizEntity'
import { IQuizRepository } from '../domain/QuizRepository'

interface ICreateData {
  name: string
  description: string
  categoryId: string
}

export class CreateUseCase {
  private quizRepository: IQuizRepository

  constructor(quizRepository: IQuizRepository) {
    this.quizRepository = quizRepository
  }

  async execute(data: ICreateData): Promise<void> {
    const { name, description, categoryId } = data

    const quiz = new QuizEntity(name, description, categoryId)

    return await this.quizRepository.create(quiz)
  }
}
