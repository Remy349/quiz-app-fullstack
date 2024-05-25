import { JWTPayload, jwtVerify } from 'jose'
import { JWT_SECRET_KEY } from './consts'

interface IJWTPayload extends JWTPayload {
  id: number
  email: string
  role: string
}

export const verifyToken = async (token: string) => {
  const key = new TextEncoder().encode(JWT_SECRET_KEY)

  const { payload } = await jwtVerify<IJWTPayload>(token, key)

  return payload
}
