import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { PlusCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CreateForm } from './create-form'

export const CreateDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='font-medium'>
          <PlusCircle className='w-4 h-4 mr-2' />
          Add quiz
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create quiz</DialogTitle>
          <DialogDescription>
            Add a new quiz here. Click save when you are done.
          </DialogDescription>
        </DialogHeader>
        <CreateForm />
      </DialogContent>
    </Dialog>
  )
}
