import { JWTPayload, jwtVerify } from 'jose'

const JWT_SECRET_KEY = import.meta.env.VITE_JWT_SECRET_KEY as string

interface IJWTPayload extends JWTPayload {
  id: string
  email: string
  role: 'USER' | 'ADMIN'
}

export const verifyToken = async (token: string) => {
  const key = new TextEncoder().encode(JWT_SECRET_KEY)

  const { payload } = await jwtVerify<IJWTPayload>(token, key)

  return payload
}
