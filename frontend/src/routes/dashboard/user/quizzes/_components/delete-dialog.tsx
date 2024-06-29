import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Button, buttonVariants } from '@/components/ui/button'
import { useDeleteQuizMutation } from '@/services/mutations/quizzes'
import { Trash } from 'lucide-react'
import { forwardRef } from 'react'
import { toast } from 'sonner'

interface IDeleteDialogProps {
  quizId: string
}

const DeleteDialog = forwardRef<HTMLButtonElement, IDeleteDialogProps>(
  (props, ref) => {
    const { quizId } = props

    const { mutateAsync: deleteQuiz } = useDeleteQuizMutation()

    const handleDeleteQuiz = async () => {
      await deleteQuiz(quizId)

      toast.success('Quiz successfully deleted')
    }

    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button
            variant='ghost'
            ref={ref}
            className='w-full text-sm font-normal'
            size='sm'
          >
            Delete
            <Trash className='ml-auto text-muted-foreground w-4 h-4' />
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the
              data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              className={buttonVariants({ variant: 'destructive' })}
              onClick={handleDeleteQuiz}
            >
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  },
)

DeleteDialog.displayName = 'DeleteDialog'

export { DeleteDialog }
