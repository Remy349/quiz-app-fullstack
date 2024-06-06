import { UserEntity } from '../domain/UserEntity'
import { IUserRepository } from '../domain/UserRepository'

interface ICreateData {
  username: string
  email: string
  password: string
}

export class CreateUseCase {
  private userRepository: IUserRepository

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository
  }

  async execute(data: ICreateData): Promise<void> {
    const { username, email, password } = data

    const user = new UserEntity(username, email, password)

    return await this.userRepository.create(user)
  }
}
