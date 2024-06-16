import { ICategoryRepository } from '../domain/CategoryRepository'

export class DeleteUseCase {
  private categoryRepository: ICategoryRepository

  constructor(categoryRepository: ICategoryRepository) {
    this.categoryRepository = categoryRepository
  }

  async execute(categoryId: string): Promise<void> {
    return await this.categoryRepository.delete(categoryId)
  }
}
