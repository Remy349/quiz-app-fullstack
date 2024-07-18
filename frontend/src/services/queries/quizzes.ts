import { useQuery } from '@tanstack/react-query'
import { getQuizById, getQuizzes } from '../api/quizzes'

export const useGetQuizzesQuery = () => {
  return useQuery({
    queryKey: ['quizzes'],
    queryFn: getQuizzes,
  })
}

export const useGetQuizByIdQuery = (quizId: string) => {
  return useQuery({
    queryKey: ['quizzes', quizId],
    queryFn: () => getQuizById(quizId),
  })
}
