import { useQuery } from '@tanstack/react-query'
import { getQuizzesByUserId } from '../api/quizzes'

export const useGetQuizzesByUserIdQuery = (userId: string) => {
  return useQuery({
    queryKey: ['quizzes', userId],
    queryFn: () => getQuizzesByUserId(userId),
  })
}
