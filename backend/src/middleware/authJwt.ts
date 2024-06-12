import {
  Request as ExRequest,
  Response as ExResponse,
  NextFunction
} from 'express'
import { CustomApiError } from '../errors/CustomApiError'
import { verifyToken } from '../utils/jwt'

export interface IExRequest extends ExRequest {
  userId?: string
}

interface IDecodeToken {
  id: string
}

const authJwt = async (
  req: IExRequest,
  res: ExResponse,
  next: NextFunction
) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '')

    if (!token) {
      throw CustomApiError.unauthorizedError(
        'Authentication failed. Token missing'
      )
    }

    const { id } = verifyToken(token) as IDecodeToken

    req.userId = id

    next()
  } catch (error) {
    if (error instanceof CustomApiError) {
      res.status(error.statusCode).json({ message: error.message })
    }
  }
}

export default authJwt
