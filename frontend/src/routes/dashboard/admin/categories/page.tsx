import { Button } from '@/components/ui/button'
import { useSEO } from '@/hooks/useSEO'
import { API_URL } from '@/utils/consts'
import axios from 'axios'
import { useEffect, useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
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
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'

type TCategory = {
  id: string
  name: string
  createdAt: Date
}

const getCategories = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  const res = await axios.get(`${API_URL}/categories`)

  const categories: TCategory[] = res.data

  return categories
}

const CreateCategoryFormSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
})

type TCreateCategoryFormSchema = z.infer<typeof CreateCategoryFormSchema>

export default function DashboardAdminCategoriesPage() {
  useSEO('Dashboard')

  const [categories, setCategories] = useState<TCategory[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<TCreateCategoryFormSchema>({
    resolver: zodResolver(CreateCategoryFormSchema),
    defaultValues: { name: '' },
  })

  const onSubmit = async (formData: TCreateCategoryFormSchema) => {
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log(formData)

    toast.success('Category successfully created')
  }

  useEffect(() => {
    setIsLoading(true)

    getCategories()
      .then((data) => {
        setCategories(data)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  return (
    <div>
      <div className='mb-8'>
        <h1 className='font-semibold text-xl md:text-2xl'>Categories</h1>
      </div>
      <div>
        {categories.length === 0 ? (
          <div className='h-[360px] flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm'>
            <div className='flex flex-col items-center gap-1 text-center'>
              <h2 className='text-xl font-bold tracking-tight'>
                You have no categories
              </h2>
              <p className='text-sm text-muted-foreground'>
                You can start by adding a category
              </p>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className='mt-4 font-medium'>Add category</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Create category</DialogTitle>
                    <DialogDescription>
                      Add a new category here. Click save when you are done.
                    </DialogDescription>
                  </DialogHeader>
                  <div>
                    <Form {...form}>
                      <form
                        className='grid gap-y-4'
                        onSubmit={form.handleSubmit(onSubmit)}
                      >
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
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        ) : (
          <div>
            <h2>CONTENIDO</h2>
          </div>
        )}
      </div>
    </div>
  )
}
