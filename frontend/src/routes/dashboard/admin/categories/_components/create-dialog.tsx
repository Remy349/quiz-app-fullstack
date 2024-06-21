import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { CreateForm } from './create-form'
import { PlusCircle } from 'lucide-react'

export const CreateDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='font-medium text-sm' size='sm'>
          <PlusCircle className='w-4 h-4 mr-2' />
          Add category
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create category</DialogTitle>
          <DialogDescription>
            Add a new category here. Click save when you are done.
          </DialogDescription>
        </DialogHeader>
        <CreateForm />
      </DialogContent>
    </Dialog>
  )
}
