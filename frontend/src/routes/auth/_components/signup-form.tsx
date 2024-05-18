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
import { Link } from 'react-router-dom'
import { z } from 'zod'

const FormSchema = z.object({
  username: z.string().min(1, { message: 'Username is required' }),
  email: z
    .string()
    .min(1, { message: 'Email is required' })
    .email({ message: 'Email is invalid' }),
  password: z.string().min(1, { message: 'Password is required' }),
})

type TFormSchema = z.infer<typeof FormSchema>

export const SignUpForm = () => {
  const form = useForm<TFormSchema>({
    resolver: zodResolver(FormSchema),
    defaultValues: { username: '', email: '', password: '' },
  })

  const onSubmit = async (formData: TFormSchema) => {
    console.log(formData)
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
                <Input {...field} type='text' autoComplete='off' />
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
          Sign Up
        </Button>
        <Link className='text-center underline text-sm' to='/auth/signin'>
          Already have an account? Sign in
        </Link>
      </form>
    </Form>
  )
}
