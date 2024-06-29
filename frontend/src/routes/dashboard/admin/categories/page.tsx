import { useSEO } from '@/hooks/useSEO'
import { EmptyState } from './_components/empty-state'
import { DataTable } from './_components/data-table'
import { columns } from './_components/columns'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { CreateDialog } from './_components/create-dialog'
import { useGetCategoriesQuery } from '@/services/queries/categories'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Link } from 'react-router-dom'

export default function DashboardAdminCategoriesPage() {
  useSEO('Dashboard')

  const { data: categories = [] } = useGetCategoriesQuery()

  return (
    <div>
      <div className='mb-4'>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to='/dashboard/admin'>Dashboard</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Categories</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      {categories.length === 0 ? (
        <EmptyState />
      ) : (
        <div>
          <div className='mb-4'>
            <CreateDialog />
          </div>
          <Card>
            <CardHeader>
              <CardTitle className='text-xl'>Categories</CardTitle>
              <CardDescription>
                The categories you have created will appear here.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <DataTable columns={columns} data={categories} />
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
