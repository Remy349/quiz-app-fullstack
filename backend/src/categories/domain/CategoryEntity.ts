import { v4 as uuid } from 'uuid'

export class CategoryEntity {
  id: string
  name: string
  createdAt: Date

  constructor(name: string) {
    this.id = uuid()
    this.name = name
    this.createdAt = new Date()
  }
}
