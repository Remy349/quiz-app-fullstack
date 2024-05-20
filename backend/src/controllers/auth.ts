import { Request, Response } from 'express'
import { TSignInUser } from '../types/types'
import { AuthService } from '../services/auth'

export class AuthController {
  static async signIn(req: Request, res: Response) {
    try {
      const data: TSignInUser = req.body

      const response = await AuthService.signIn(data)

      if (response === 'USER_NOT_FOUND') {
        return res.status(401).json({ message: 'Email not registered' })
      } else if (response === 'PASSWORDS_DO_NOT_MATCH') {
        return res.status(401).json({ message: 'Incorrect password' })
      }

      res.json({ token: response })
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' })
    }
  }
}
