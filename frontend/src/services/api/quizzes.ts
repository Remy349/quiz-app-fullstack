import { TQuiz } from '@/types/types'
import { API_URL } from '@/utils/consts'
import axios from 'axios'

export const getQuizzesByUserId = async (userId: string) => {
  const res = await axios.get<TQuiz[]>(`${API_URL}/users/${userId}/quizzes`)

  return res.data
}

export const getQuizById = async (quizId: string) => {
  const res = await axios.get<TQuiz>(`${API_URL}/quizzes/${quizId}`)

  return res.data
}

export const deleteQuiz = async (quizId: string) => {
  await axios.delete(`${API_URL}/quizzes/${quizId}`)
}
