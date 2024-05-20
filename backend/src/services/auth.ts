import { prisma } from '../lib/prisma'
import { TSignInUser } from '../types/types'
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
}
