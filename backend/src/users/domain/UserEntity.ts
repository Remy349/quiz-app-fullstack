import { v4 as uuid } from 'uuid'

export class UserEntity {
  id: string
  username: string
  email: string
  password: string
  role: string
  createdAt: Date

  constructor(username: string, email: string, password: string) {
    this.id = uuid()
    this.username = username
    this.email = email
    this.password = password
    this.role = 'USER'
    this.createdAt = new Date()
  }
}
