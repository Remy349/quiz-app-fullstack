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
import { TCategory } from '@/types/types'
import { LoaderCircle } from 'lucide-react'
import { useForm } from 'react-hook-form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  CreateQuizFormSchema,
  TCreateQuizFormSchema,
} from '@/utils/formSchemas'
import { zodResolver } from '@hookform/resolvers/zod'

interface ICreateFormProps {
  categories: TCategory[]
}

export const CreateForm = ({ categories }: ICreateFormProps) => {
  const form = useForm<TCreateQuizFormSchema>({
    resolver: zodResolver(CreateQuizFormSchema),
    defaultValues: { name: '', description: '', categoryId: '' },
  })

  const onSubmit = async (formData: TCreateQuizFormSchema) => {
    console.log(formData)
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
        <FormField
          control={form.control}
          name='description'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  className='resize-none'
                  rows={6}
                  disabled={form.formState.isSubmitting}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='categoryId'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder='Select category' />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem
                      key={category.name}
                      className='md:cursor-pointer'
                      value={category.id}
                    >
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
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
