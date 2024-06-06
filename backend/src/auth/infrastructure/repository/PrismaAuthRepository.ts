import PrismaSingleton from '../../../db/prisma'
import { checkPasswordHash } from '../../../utils/bcrypt'
import { generateToken } from '../../../utils/jwt'
import { IAuthRepository } from '../../domain/AuthRepository'
import { CustomApiError } from '../../domain/errors/CustomApiError'

export class PrismaAuthRepository implements IAuthRepository {
  private prisma = PrismaSingleton.getInstance()

  async signIn(email: string, password: string): Promise<string> {
    try {
      const user = await this.prisma.user.findFirst({
        where: { email }
      })

      if (!user) {
        throw CustomApiError.unauthorizedError('Incorrect email')
      }

      const passwordMatch = await checkPasswordHash(password, user.password)

      if (!passwordMatch) {
        throw CustomApiError.unauthorizedError('Incorrect password')
      }

      const token = generateToken({
        id: user.id,
        email: user.email,
        role: user.role
      })

      return token
    } catch (error) {
      if (error instanceof CustomApiError) {
        throw error
      }

      throw CustomApiError.internalServerError()
    }
  }
}
