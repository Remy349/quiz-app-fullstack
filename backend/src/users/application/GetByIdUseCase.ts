import { UserEntity } from '../domain/UserEntity'
import { IUserRepository } from '../domain/UserRepository'

export class GetByIdUseCase {
  private userRepository: IUserRepository

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository
  }

  async execute(userId: string): Promise<UserEntity | null> {
    return await this.userRepository.getById(userId)
  }
}
