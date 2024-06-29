import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { useSEO } from '@/hooks/useSEO'
import { ChevronLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { CreateForm } from '../_components/create-form'
import { useGetCategoriesQuery } from '@/services/queries/categories'

export default function DashboardUserQuizzesNewPage() {
  useSEO('Dashboard')

  const { data: categories = [] } = useGetCategoriesQuery()

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
              <BreadcrumbPage>New quiz</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div>
        <div className='mb-4'>
          <Button variant='outline' className='w-8 h-8' size='icon' asChild>
            <Link to='/dashboard/quizzes'>
              <ChevronLeft className='w-4 h-4' />
            </Link>
          </Button>
        </div>
        <Card>
          <CardHeader>
            <CardTitle className='text-xl'>Create quiz</CardTitle>
            <CardDescription>
              Add a new quiz here. Click save when you are done.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <CreateForm categories={categories} />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
