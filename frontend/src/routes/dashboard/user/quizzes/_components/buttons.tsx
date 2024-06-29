import { Button } from '@/components/ui/button'
import { Pencil, PlusCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

export const CreateButtonLink = () => {
  return (
    <Button className='font-medium text-sm' size='sm' asChild>
      <Link to='/dashboard/quizzes/new'>
        <PlusCircle className='w-4 h-4 mr-2' />
        Add quiz
      </Link>
    </Button>
  )
}

interface IEditButtonLinkProps {
  itemId: string
}

export const EditButtonLink = ({ itemId }: IEditButtonLinkProps) => {
  return (
    <Button
      className='text-sm px-1 h-6 font-normal w-full'
      variant='ghost'
      size='sm'
      asChild
    >
      <Link to={`/dashboard/quizzes/${itemId}/edit`}>
        Edit
        <Pencil className='ml-auto text-muted-foreground w-4 h-4' />
      </Link>
    </Button>
  )
}
