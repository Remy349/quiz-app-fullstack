import { CategoryEntity } from '../domain/CategoryEntity'
import { ICategoryRepository } from '../domain/CategoryRepository'

export class GetAllUseCase {
  private categoryRepository: ICategoryRepository

  constructor(categoryRepository: ICategoryRepository) {
    this.categoryRepository = categoryRepository
  }

  async execute(): Promise<CategoryEntity[]> {
    return await this.categoryRepository.getAll()
  }
}
