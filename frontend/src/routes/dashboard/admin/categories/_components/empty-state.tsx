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
        <CardTitle className='text-xl'>Categories</CardTitle>
        <CardDescription>
          The categories you have created will appear here.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className='h-[360px] flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm'>
          <div className='flex flex-col items-center gap-1 text-center'>
            <h2 className='text-xl font-bold tracking-tight'>
              You have no categories
            </h2>
            <p className='text-sm text-muted-foreground'>
              You can start by adding a category
            </p>
            <div className='mt-4'>
              <CreateDialog />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
