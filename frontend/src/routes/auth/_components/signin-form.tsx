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
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

const FormSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Email is required' })
    .email({ message: 'Email is invalid' }),
  password: z.string().min(1, { message: 'Password is required' }),
})

type TFormSchema = z.infer<typeof FormSchema>

export const SignInForm = () => {
  const form = useForm<TFormSchema>({
    resolver: zodResolver(FormSchema),
    defaultValues: { email: '', password: '' },
  })

  const onSubmit = async (formData: TFormSchema) => {
    try {
      const response = await axios.post(
        'http://localhost:3000/api/auth/signin',
        formData,
      )

      console.log(response)
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
                <Input {...field} type='text' autoComplete='off' />
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
                <Input {...field} type='password' autoComplete='off' />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className='font-medium' type='submit'>
          Sign In
        </Button>
        <Link className='text-center underline text-sm' to='/auth/signup'>
          Don't have an account yet? Create one
        </Link>
      </form>
    </Form>
  )
}
