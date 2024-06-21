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

export const CreateForm = () => {
  const form = useForm<TCreateCategoryFormSchema>({
    resolver: zodResolver(CreateCategoryFormSchema),
    defaultValues: { name: '' },
  })

  const onSubmit = async (formData: TCreateCategoryFormSchema) => {
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log(formData)

    toast.success('Category successfully created')
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
