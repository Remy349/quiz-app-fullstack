import { ICreateUser } from '../interfaces/users'
import { prisma } from '../lib/prisma'
import bcrypt from 'bcrypt'

export class UsersService {
  static async create(data: ICreateUser) {
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
