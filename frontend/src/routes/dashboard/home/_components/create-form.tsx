import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { TQuiz } from '@/types/types'
import { API_URL } from '@/utils/conts'
import { zodResolver } from '@hookform/resolvers/zod'
import axios, { AxiosError } from 'axios'
import { LoaderCircle } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

const CreateFormSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  description: z.string().min(1, { message: 'Description is required' }),
})

type TCreateFormSchema = z.infer<typeof CreateFormSchema>

export const CreateForm = () => {
  const navigate = useNavigate()
  const form = useForm<TCreateFormSchema>({
    resolver: zodResolver(CreateFormSchema),
    defaultValues: { name: '', description: '' },
  })

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = form

  const onSubmit = async (formData: TCreateFormSchema) => {
    try {
      const response = await axios.post(`${API_URL}/quizzes`, formData)

      const quiz: TQuiz = response.data

      navigate(`/dashboard/quizzes/${quiz.id}`)

      toast.success('Quiz successfully created')
    } catch (error) {
      if (error instanceof AxiosError) {
        const message = error.response?.data.message

        toast.error(message)
      }
    }
  }

  return (
    <Form {...form}>
      <form className='grid gap-y-4' onSubmit={handleSubmit(onSubmit)}>
        <FormField
          control={control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type='text'
                  autoComplete='off'
                  disabled={isSubmitting}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name='description'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  className='resize-none'
                  rows={4}
                  disabled={isSubmitting}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className='font-medium' type='submit' disabled={isSubmitting}>
          {isSubmitting ? (
            <LoaderCircle className='w-4 h-4 animate-spin' />
          ) : (
            <p>Save</p>
          )}
        </Button>
      </form>
    </Form>
  )
}
