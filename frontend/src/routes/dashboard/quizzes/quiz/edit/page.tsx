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
import { EditForm } from './_components/edit-form'
import { DeleteDialog } from './_components/delete-dialog'

export default function DashboardQuizEditPage() {
  const { quizId } = useParams()

  const { data: quiz, isLoading } = useGetQuizByIdQuery(quizId || '')

  useSEO('Edit quiz')

  if (isLoading) return <p>Loading...</p>

  return (
    <div>
      <div className='mb-4 flex items-center justify-between'>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to='/dashboard'>Dashboard</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Edit quiz</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <DeleteDialog quizId={quiz?.id || ''} />
      </div>
      <EditForm quiz={quiz} />
    </div>
  )
}
