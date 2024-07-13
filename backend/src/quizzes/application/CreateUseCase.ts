import { QuizEntity } from '../domain/QuizEntity'
import { IQuizRepository } from '../domain/QuizRepository'

interface ICreateData {
  name: string
  description: string
}

export class CreateUseCase {
  private quizRepository: IQuizRepository

  constructor(quizRepository: IQuizRepository) {
    this.quizRepository = quizRepository
  }

  async execute(data: ICreateData): Promise<QuizEntity> {
    const { name, description } = data

    const quiz = new QuizEntity(name, description)

    return await this.quizRepository.create(quiz)
  }
}
