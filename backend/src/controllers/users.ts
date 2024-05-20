import { Request, Response } from 'express'
import { UsersService } from '../services/users'
import { TCreateUser } from '../types/types'

export class UsersController {
  static async create(req: Request, res: Response) {
    try {
      const data: TCreateUser = req.body

      const response = await UsersService.create(data)

      if (response === 'USER_ALREADY_CREATED') {
        return res.status(409).json({ message: 'User already created' })
      }

      res.status(201).json({ message: 'User successfully created' })
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' })
    }
  }
}
