import { v4 as uuid } from 'uuid'

export class QuizEntity {
  id: string
  name: string
  description: string
  isCompleted: boolean
  createdAt: Date

  constructor(name: string, description: string) {
    this.id = uuid()
    this.name = name
    this.description = description
    this.isCompleted = false
    this.createdAt = new Date()
  }
}
