import { UserEntity } from './UserEntity'

export interface IUserRepository {
  getAll(): Promise<UserEntity[]>
  getById(userId: string): Promise<UserEntity | null>
  create(user: UserEntity): Promise<void>
}
