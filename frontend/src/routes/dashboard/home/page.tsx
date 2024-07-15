import { useSEO } from '@/hooks/useSEO'
import { EmptyState } from './_components/empty-state'
import { useGetQuizzesQuery } from '@/services/queries/quizzes'
import { CreateDialog } from './_components/create-dialog'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { DataTable } from './_components/data-table'
import { columns } from './_components/columns'

export default function DashboardHomePage() {
  const { data: quizzes = [] } = useGetQuizzesQuery()

  useSEO('Dashboard')

  return (
    <div>
      {quizzes.length === 0 ? (
        <EmptyState />
      ) : (
        <div>
          <div className='mb-4'>
            <CreateDialog />
          </div>
          <Card>
            <CardHeader>
              <CardTitle className='text-xl'>Quizzes</CardTitle>
              <CardDescription>
                The quizzes you have created will appear here.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <DataTable columns={columns} data={quizzes} />
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
