export type TCategory = {
  id: string
  name: string
  createdAt: Date
}

export type TQuiz = {
  id: string
  name: string
  description: string
  isPublished: boolean
  isCompleted: boolean
  createdAt: Date
  categoryId: string
  userId: string
}
