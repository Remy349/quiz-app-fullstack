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

export default function DashboardUserQuizzesPage() {
  const quizzes = []

  useSEO('Dashboard')

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
          <h1>CONTENT</h1>
        </div>
      )}
    </div>
  )
}
