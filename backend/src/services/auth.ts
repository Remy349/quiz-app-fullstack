import { prisma } from '../lib/prisma'
import { TSignInUser, TSignUpUser } from '../types/types'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export class AuthService {
  static async signIn(data: TSignInUser) {
    const { email, password } = data

    const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY as string

    const user = await prisma.user.findFirst({
      where: { email }
    })

    if (!user) return 'USER_NOT_FOUND'

    const passwordMatch = await bcrypt.compare(password, user.password)

    if (!passwordMatch) return 'PASSWORDS_DO_NOT_MATCH'

    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      JWT_SECRET_KEY,
      {
        expiresIn: '2h'
      }
    )

    return token
  }

  static async signUp(data: TSignUpUser) {
    const { username, email, password } = data

    const passwordHash = await bcrypt.hash(password, 10)

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
