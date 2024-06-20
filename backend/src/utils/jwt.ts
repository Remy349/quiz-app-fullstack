import { TokenExpiredError, sign, verify } from 'jsonwebtoken'
import { CustomApiError } from '../errors/CustomApiError'

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY as string

interface IEncodeToken {
  id: string
  email: string
  role: string
}

export const generateToken = (user: IEncodeToken) => {
  return sign(
    { id: user.id, email: user.email, role: user.role },
    JWT_SECRET_KEY,
    { expiresIn: '4h' }
  )
}

export const verifyToken = (token: string) => {
  try {
    return verify(token, JWT_SECRET_KEY)
  } catch (error) {
    if (error instanceof TokenExpiredError) {
      throw CustomApiError.unauthorizedError(
        'Authentication failed. Token expired'
      )
    }
  }
}
