import { hash, compare } from 'bcrypt'

export const generatePasswordHash = async (password: string) => {
  return await hash(password, 10)
}

export const checkPasswordHash = async (
  password: string,
  passwordHash: string
) => {
  return await compare(password, passwordHash)
}
