import { sign } from 'jsonwebtoken'
import { TUserToken } from '../types/types'

export const generateToken = (user: TUserToken) => {
  const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY as string

  return sign(
    { id: user.id, email: user.email, role: user.role },
    JWT_SECRET_KEY,
    { expiresIn: '2h' }
  )
}
