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
import { useAuthContext } from '@/hooks/useAuthContext'
import { API_URL } from '@/utils/consts'
import { SignInFormSchema, TSignInFormSchema } from '@/utils/formSchemas'
import { verifyToken } from '@/utils/jwt'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { LoaderCircle } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

export const SignInForm = () => {
  const navigate = useNavigate()
  const { signInUser, setCurrentUserData } = useAuthContext()

  const form = useForm<TSignInFormSchema>({
    resolver: zodResolver(SignInFormSchema),
    defaultValues: { email: '', password: '' },
  })

  const onSubmit = async (formData: TSignInFormSchema) => {
    try {
      const response = await axios.post(`${API_URL}/auth/signin`, formData)

      const token = response.data.token

      const { id, email, role } = await verifyToken(token)

      signInUser(token)
      setCurrentUserData({ id, email, role })

      if (role === 'USER') navigate('/dashboard')
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
          Sign In
        </Button>
        <Link className='text-center underline text-sm' to='/auth/signup'>
          Don't have an account yet? Create one
        </Link>
      </form>
    </Form>
  )
}
