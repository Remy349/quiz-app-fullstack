import { UserEntity } from '../domain/UserEntity'
import { IUserRepository } from '../domain/UserRepository'

export class GetAllUseCase {
  private userRepository: IUserRepository

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository
  }

  async execute(): Promise<UserEntity[]> {
    return await this.userRepository.getAll()
  }
}
