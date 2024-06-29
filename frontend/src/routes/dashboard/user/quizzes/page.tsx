import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { useSEO } from '@/hooks/useSEO'
import { Link } from 'react-router-dom'
import { EmptyState } from './_components/empty-state'
import { useGetQuizzesByUserIdQuery } from '@/services/queries/quizzes'
import { useAuthContext } from '@/hooks/useAuthContext'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { DataTable } from './_components/data-table'
import { columns } from './_components/columns'
import { CreateButtonLink } from './_components/buttons'

export default function DashboardUserQuizzesPage() {
  useSEO('Dashboard')

  const { currentUser } = useAuthContext()

  const userId = currentUser?.id || ''

  const { data: quizzes = [] } = useGetQuizzesByUserIdQuery(userId)

  return (
    <div>
      <div className='mb-4'>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to='/dashboard'>Dashboard</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Quizzes</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      {quizzes.length === 0 ? (
        <EmptyState />
      ) : (
        <div>
          <div className='mb-4'>
            <CreateButtonLink />
          </div>
          <Card>
            <CardHeader>
              <CardTitle className='text-xl'>My quizzes</CardTitle>
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
