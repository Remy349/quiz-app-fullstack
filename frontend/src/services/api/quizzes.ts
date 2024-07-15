import { TQuiz } from '@/types/types'
import { API_URL } from '@/utils/conts'
import axios from 'axios'

export const getQuizzes = async () => {
  const res = await axios.get(`${API_URL}/quizzes`)

  const quizzes: TQuiz[] = res.data

  return quizzes
}

export const deleteQuiz = async (quizId: string) => {
  await axios.delete(`${API_URL}/quizzes/${quizId}`)
}
