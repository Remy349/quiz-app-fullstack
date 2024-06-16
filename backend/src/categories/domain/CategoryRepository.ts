import { CategoryEntity } from './CategoryEntity'

export interface ICategoryRepository {
  getAll(): Promise<CategoryEntity[]>
  create(category: CategoryEntity): Promise<void>
  delete(categoryId: string): Promise<void>
}
