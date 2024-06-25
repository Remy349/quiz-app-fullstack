import { z } from 'zod'

export const SignInFormSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Email is required' })
    .email({ message: 'Email is invalid' }),
  password: z.string().min(1, { message: 'Password is required' }),
})

export type TSignInFormSchema = z.infer<typeof SignInFormSchema>

// -----------------------------------------------------

export const SignUpFormSchema = z.object({
  username: z.string().min(1, { message: 'Username is required' }),
  email: z
    .string()
    .min(1, { message: 'Email is required' })
    .email({ message: 'Email is invalid' }),
  password: z.string().min(8, { message: 'Password is required' }),
})

export type TSignUpFormSchema = z.infer<typeof SignUpFormSchema>

// -----------------------------------------------------

export const CreateCategoryFormSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
})

export type TCreateCategoryFormSchema = z.infer<typeof CreateCategoryFormSchema>

// -----------------------------------------------------

export const CreateQuizFormSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  description: z.string().min(1, { message: 'Description is required' }),
  categoryId: z.string().min(1, { message: 'Category is required' }),
})

export type TCreateQuizFormSchema = z.infer<typeof CreateQuizFormSchema>
