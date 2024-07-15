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
import { Button } from '@/components/ui/button'
import { useDeleteQuizMutation } from '@/services/mutations/quizzes'
import { Trash } from 'lucide-react'
import { toast } from 'sonner'

interface IDeleteDialogProps {
  quizId: string
}

export const DeleteDialog = ({ quizId }: IDeleteDialogProps) => {
  const { mutateAsync: deleteQuiz } = useDeleteQuizMutation()

  const handleDeleteQuiz = async () => {
    await deleteQuiz(quizId)

    toast.success('Quiz successfully deleted')
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className='w-8 h-8' variant='destructive' size='icon'>
          <Trash className='w-4 h-4' />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your data
            from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDeleteQuiz}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
