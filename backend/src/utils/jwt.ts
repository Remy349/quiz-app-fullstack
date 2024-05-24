import { sign, verify } from 'jsonwebtoken'
import { TUserToken } from '../types/types'
import { JWT_SECRET_KEY } from './consts'

export const generateToken = (user: TUserToken) => {
  return sign(
    { id: user.id, email: user.email, role: user.role },
    JWT_SECRET_KEY,
    { expiresIn: '2h' }
  )
}

export const verifyToken = (token: string) => {
  return verify(token, JWT_SECRET_KEY)
}
