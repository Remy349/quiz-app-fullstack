import { PrismaClient } from '@prisma/client'
import { hash } from 'bcrypt'

const prisma = new PrismaClient()

async function main() {
  try {
    const adminRegistered = await prisma.user.findFirst({
      where: { email: 'superadminemail@gmail.com' }
    })

    if (adminRegistered) {
      throw new Error('User admin already registered')
    }

    const passwordHash = await hash('superadminpassword', 10)

    await prisma.user.create({
      data: {
        username: 'SuperAdminUser',
        email: 'superadminemail@gmail.com',
        password: passwordHash,
        role: 'ADMIN'
      }
    })

    console.log('User admin successfully created')
  } catch (error) {
    console.error(
      'An error occurred while attempting to seed the database: ',
      error
    )
  } finally {
    await prisma.$disconnect()
  }
}

main()
