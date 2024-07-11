import { useQuery } from '@tanstack/react-query'
import { getQuizById, getQuizzesByUserId } from '../api/quizzes'

export const useGetQuizzesByUserIdQuery = (userId: string) => {
  return useQuery({
    queryKey: ['quizzes', userId],
    queryFn: () => getQuizzesByUserId(userId),
  })
}

export const useGetQuizByIdQuery = (quizId: string) => {
  return useQuery({
    queryKey: ['quiz', quizId],
    queryFn: () => getQuizById(quizId),
  })
}
