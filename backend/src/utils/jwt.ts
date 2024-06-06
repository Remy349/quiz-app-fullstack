import { sign, verify } from 'jsonwebtoken'

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY as string

interface IUserToken {
  id: string
  email: string
  role: string
}

export const generateToken = (user: IUserToken) => {
  return sign(
    { id: user.id, email: user.email, role: user.role },
    JWT_SECRET_KEY,
    { expiresIn: '2h' }
  )
}

export const verifyToken = (token: string) => {
  return verify(token, JWT_SECRET_KEY)
}
