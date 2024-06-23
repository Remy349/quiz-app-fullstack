import { v4 as uuid } from 'uuid'

export class QuizEntity {
  id: string
  name: string
  description: string
  isPublished: boolean
  isCompleted: boolean
  createdAt: Date

  categoryId: string

  constructor(name: string, description: string, categoryId: string) {
    this.id = uuid()
    this.name = name
    this.description = description
    this.isPublished = false
    this.isCompleted = false
    this.createdAt = new Date()

    this.categoryId = categoryId
  }
}
