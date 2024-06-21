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

export const CreateDialog = () => {
  return (
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
          <CreateForm />
        </div>
      </DialogContent>
    </Dialog>
  )
}
