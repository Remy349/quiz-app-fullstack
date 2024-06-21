import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createCategory } from '../api/categories'

export const useCreateCategoryMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: createCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['categories'] })
    },
  })
}
