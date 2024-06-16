import { CategoryEntity } from '../domain/CategoryEntity'
import { ICategoryRepository } from '../domain/CategoryRepository'

interface ICreateData {
  name: string
}

export class CreateUseCase {
  private categoryRepository: ICategoryRepository

  constructor(categoryRepository: ICategoryRepository) {
    this.categoryRepository = categoryRepository
  }

  async execute(data: ICreateData): Promise<void> {
    const { name } = data

    const category = new CategoryEntity(name)

    return await this.categoryRepository.create(category)
  }
}
