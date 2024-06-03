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
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'sonner'
import { LoaderCircle } from 'lucide-react'
import { API_URL } from '@/utils/consts'
import { SignUpFormSchema, TSignUpFormSchema } from '@/utils/formSchemas'

export const SignUpForm = () => {
  const navigate = useNavigate()

  const form = useForm<TSignUpFormSchema>({
    resolver: zodResolver(SignUpFormSchema),
    defaultValues: { username: '', email: '', password: '' },
  })

  const onSubmit = async (formData: TSignUpFormSchema) => {
    try {
      await axios.post(`${API_URL}/users`, formData)

      navigate('/auth/signin')

      toast.success('User successfully created')
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data.message)
      }
    }
  }

  return (
    <Form {...form}>
      <form className='grid gap-y-4' onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name='username'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type='text'
                  autoComplete='off'
                  disabled={form.formState.isSubmitting}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type='text'
                  autoComplete='off'
                  disabled={form.formState.isSubmitting}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type='password'
                  autoComplete='off'
                  disabled={form.formState.isSubmitting}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className='font-medium'
          type='submit'
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting && (
            <LoaderCircle className='w-5 h-5 mr-2 animate-spin' />
          )}
          Sign Up
        </Button>
        <Link className='text-center underline text-sm' to='/auth/signin'>
          Already have an account? Sign in
        </Link>
      </form>
    </Form>
  )
}
