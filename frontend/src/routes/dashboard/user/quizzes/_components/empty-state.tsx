import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { PlusCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

export const EmptyState = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className='text-xl'>Quizzes</CardTitle>
        <CardDescription>
          The quizzes you have created will appear here.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className='h-[360px] flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm'>
          <div className='flex flex-col items-center gap-1 text-center'>
            <h2 className='text-xl font-bold tracking-tight'>
              You have no quizzes
            </h2>
            <p className='text-sm text-muted-foreground'>
              You can start by adding a quiz
            </p>
            <div className='mt-4'>
              <Button className='font-medium text-sm' size='sm' asChild>
                <Link to='/dashboard/quizzes/new'>
                  <PlusCircle className='w-4 h-4 mr-2' />
                  Add quiz
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
