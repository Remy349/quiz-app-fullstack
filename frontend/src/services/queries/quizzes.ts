import { useQuery } from '@tanstack/react-query'
import { getQuizzes } from '../api/quizzes'

export const useGetQuizzesQuery = () => {
  return useQuery({
    queryKey: ['quizzes'],
    queryFn: getQuizzes,
  })
}
