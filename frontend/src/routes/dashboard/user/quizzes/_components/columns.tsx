import { ColumnDef } from '@tanstack/react-table'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Ellipsis } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { DeleteDialog } from './delete-dialog'
import { EditButtonLink } from './buttons'

type TColumnData = {
  id: string
  name: string
  isPublished: boolean
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
    accessorKey: 'isPublished',
    header: 'Published',
    cell: ({ row }) => {
      const item = row.original

      return (
        <Badge
          className={cn(
            'text-white',
            item.isPublished
              ? 'bg-emerald-500 hover:bg-emerald-500'
              : 'bg-red-400 hover:bg-red-400',
          )}
        >
          {item.isPublished ? 'Yes' : 'No'}
        </Badge>
      )
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const item = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='ghost' className='w-8 h-8 p-0'>
              <Ellipsis className='w-4 h-4' />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className='md:cursor-pointer'>
              <EditButtonLink itemId={item.id} />
            </DropdownMenuItem>
            <DropdownMenuItem asChild className='md:cursor-pointer'>
              <DeleteDialog quizId={item.id} />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
