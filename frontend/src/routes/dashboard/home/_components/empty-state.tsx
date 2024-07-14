import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { CreateDialog } from './create-dialog'

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
        <div className='h-[320px] flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm'>
          <div className='flex flex-col items-center text-center'>
            <h2 className='text-xl font-bold tracking-tight'>
              You have no quizzes
            </h2>
            <p className='text-sm text-muted-foreground'>
              You can start by adding a quiz
            </p>
            <div className='mt-6'>
              <CreateDialog />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
