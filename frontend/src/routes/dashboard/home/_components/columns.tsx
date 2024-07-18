import { Button } from '@/components/ui/button'
import { ColumnDef } from '@tanstack/react-table'
import { Pencil, Play } from 'lucide-react'
import { Link } from 'react-router-dom'

type TColumnData = {
  id: string
  name: string
}

export const columns: ColumnDef<TColumnData>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
    cell: ({ row }) => {
      const item = row.original

      return <p className='text-sm'>{item.name}</p>
    },
  },
  {
    id: 'actions',
    header: 'Actions',
    cell: ({ row }) => {
      const item = row.original

      return (
        <div className='flex items-center gap-x-2'>
          <Button className='w-8 h-8' variant='outline' size='icon' asChild>
            <Link to={`/dashboard/quizzes/${item.id}`}>
              <Play className='w-4 h-4' />
            </Link>
          </Button>
          <Button className='w-8 h-8' variant='outline' size='icon' asChild>
            <Link to={`/dashboard/quizzes/${item.id}/edit`}>
              <Pencil className='w-4 h-4' />
            </Link>
          </Button>
        </div>
      )
    },
  },
]
