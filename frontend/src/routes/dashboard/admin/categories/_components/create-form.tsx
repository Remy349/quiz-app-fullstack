import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { useForm } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { LoaderCircle } from 'lucide-react'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import {
  CreateCategoryFormSchema,
  TCreateCategoryFormSchema,
} from '@/utils/formSchemas'
import { Button } from '@/components/ui/button'
import { useCreateCategoryMutation } from '@/services/mutations/categories'
import { AxiosError } from 'axios'

export const CreateForm = () => {
  const { mutateAsync: createCategory } = useCreateCategoryMutation()

  const form = useForm<TCreateCategoryFormSchema>({
    resolver: zodResolver(CreateCategoryFormSchema),
    defaultValues: { name: '' },
  })

  const onSubmit = async (formData: TCreateCategoryFormSchema) => {
    try {
      await createCategory(formData)

      toast.success('Category successfully created')

      form.reset()
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message)
      }
    }
  }

  return (
    <Form {...form}>
      <form className='grid gap-y-4' onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
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
        <Button
          className='font-medium'
          type='submit'
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? (
            <LoaderCircle className='w-5 h-5 animate-spin' />
          ) : (
            <p>Save</p>
          )}
        </Button>
      </form>
    </Form>
  )
}
