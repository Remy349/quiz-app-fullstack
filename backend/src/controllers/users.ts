import { Request, Response } from 'express'
import { ICreateUser } from '../interfaces/users'
import { UsersService } from '../services/users'

export class UsersController {
  static async create(req: Request, res: Response) {
    try {
      const data: ICreateUser = req.body

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
