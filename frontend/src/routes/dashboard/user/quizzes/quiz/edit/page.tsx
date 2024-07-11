import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { useSEO } from '@/hooks/useSEO'
import { useGetQuizByIdQuery } from '@/services/queries/quizzes'
import { Link, useParams } from 'react-router-dom'

export default function DashboardUserEditQuizPage() {
  useSEO('Dashboard')

  const { quizId } = useParams()
  const { data: quiz } = useGetQuizByIdQuery(quizId || '')

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
              <BreadcrumbLink asChild>
                <Link to='/dashboard/quizzes'>Quizzes</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Edit quiz</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <h1>DashboardUserEditQuizPage</h1>
    </div>
  )
}
