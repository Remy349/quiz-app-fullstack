import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteQuiz } from '../api/quizzes'

export const useDeleteQuizMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: deleteQuiz,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['quizzes'] })
    },
  })
}
