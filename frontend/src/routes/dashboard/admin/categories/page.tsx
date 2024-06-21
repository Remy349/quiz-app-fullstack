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
import { useCategoriesQuery } from '@/services/queries/categories'

export default function DashboardAdminCategoriesPage() {
  useSEO('Dashboard')

  const { data: categories = [], isLoading } = useCategoriesQuery()

  if (isLoading) return <p>Loading...</p>

  return (
    <div>
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
