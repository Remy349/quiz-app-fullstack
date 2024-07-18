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
import { zodResolver } from '@hookform/resolvers/zod'
import { LoaderCircle, PlusCircle, X } from 'lucide-react'
import { useFieldArray, useForm } from 'react-hook-form'
import { z } from 'zod'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface IEditFormProps {
  quiz?: TQuiz
}

const EditFormSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  description: z.string().min(1, { message: 'Description is required' }),
  questions: z.array(
    z.object({
      name: z.string().min(1, { message: 'Name is required' }),
    }),
  ),
})

type TEditFormSchema = z.infer<typeof EditFormSchema>

export const EditForm = ({ quiz }: IEditFormProps) => {
  const form = useForm<TEditFormSchema>({
    resolver: zodResolver(EditFormSchema),
    defaultValues: {
      name: quiz?.name,
      description: quiz?.description,
      questions: [{ name: '' }],
    },
  })

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = form

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'questions',
  })

  const handleAddQuestion = () => append({ name: '' })

  const handleRemoveQuestion = (index: number) => {
    remove(index)
  }

  const onSubmit = async (formData: TEditFormSchema) => {
    console.log(formData)
  }

  return (
    <Form {...form}>
      <form className='grid gap-y-4' onSubmit={handleSubmit(onSubmit)}>
        <Card>
          <CardHeader>
            <CardTitle>Basic information</CardTitle>
          </CardHeader>
          <CardContent className='grid gap-y-4'>
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
          </CardContent>
        </Card>
        {fields.map((field, index) => (
          <Card key={field.id}>
            <CardHeader className='flex-row items-center space-y-0 justify-between'>
              <CardTitle>Question {index + 1}</CardTitle>
              <Button
                type='button'
                variant='ghost'
                onClick={() => handleRemoveQuestion(index)}
                size='icon'
                className='w-8 h-8'
                disabled={index === 0}
              >
                <X className='w-4 h-4' />
              </Button>
            </CardHeader>
            <CardContent>
              <FormField
                control={control}
                name={`questions.${index}.name`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
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
            </CardContent>
          </Card>
        ))}
        <Button
          onClick={handleAddQuestion}
          className='font-medium'
          type='button'
          variant='outline'
        >
          <PlusCircle className='w-4 h-4 mr-2' />
          Add question
        </Button>
        <Button type='submit' className='font-medium' disabled={isSubmitting}>
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
