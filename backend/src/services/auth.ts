import { prisma } from '../lib/prisma'
import { TSignInUser, TSignUpUser } from '../types/types'
import { checkPasswordHash, generatePasswordHash } from '../utils/bcrypt'
import { generateToken } from '../utils/jwt'

export class AuthService {
  static async signIn(data: TSignInUser) {
    const { email, password } = data

    const user = await prisma.user.findFirst({
      where: { email }
    })

    if (!user) return 'USER_NOT_FOUND'

    const passwordMatch = await checkPasswordHash(password, user.password)

    if (!passwordMatch) return 'PASSWORDS_DO_NOT_MATCH'

    const token = generateToken({
      id: user.id,
      email: user.email,
      role: user.role
    })

    return token
  }

  static async signUp(data: TSignUpUser) {
    const { username, email, password } = data

    const passwordHash = await generatePasswordHash(password)

    const user = await prisma.user.findFirst({
      where: { OR: [{ email }, { username }] }
    })

    if (user) return 'USER_ALREADY_CREATED'

    const newUser = await prisma.user.create({
      data: { username, email, password: passwordHash }
    })

    return newUser
  }
}
