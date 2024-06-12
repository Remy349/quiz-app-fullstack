import PrismaSingleton from '../../../db/prisma'
import { CustomApiError } from '../../../errors/CustomApiError'
import { generatePasswordHash } from '../../../utils/bcrypt'
import { UserEntity } from '../../domain/UserEntity'
import { IUserRepository } from '../../domain/UserRepository'

export class PrismaUserRepository implements IUserRepository {
  private prisma = PrismaSingleton.getInstance()

  async getAll(): Promise<UserEntity[]> {
    try {
      return await this.prisma.user.findMany()
    } catch (error) {
      throw CustomApiError.internalServerError()
    }
  }

  async getById(userId: string): Promise<UserEntity | null> {
    try {
      const user = await this.prisma.user.findFirst({
        where: { id: userId }
      })

      if (!user) {
        throw CustomApiError.notFoundError('User not found')
      }

      return user
    } catch (error) {
      if (error instanceof CustomApiError) {
        throw error
      }

      throw CustomApiError.internalServerError()
    }
  }

  async create(user: UserEntity): Promise<void> {
    try {
      const { username, email, password } = user

      const userRegistered = await this.prisma.user.findFirst({
        where: {
          OR: [{ username }, { email }]
        }
      })

      if (userRegistered) {
        if (userRegistered.username === username) {
          throw CustomApiError.conflictError('Username already registered')
        }

        if (userRegistered.email === email) {
          throw CustomApiError.conflictError('Email is already registered')
        }
      }

      const passwordHash = await generatePasswordHash(password)

      const newUser = new UserEntity(username, email, passwordHash)

      await this.prisma.user.create({
        data: newUser
      })
    } catch (error) {
      if (error instanceof CustomApiError) {
        throw error
      }

      throw CustomApiError.internalServerError()
    }
  }
}
