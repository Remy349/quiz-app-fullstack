import { Button } from '@/components/ui/button'
import { ColumnDef } from '@tanstack/react-table'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Ellipsis, Pencil, Trash } from 'lucide-react'

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
            <DropdownMenuItem
              className='md:cursor-pointer'
              onClick={() => console.log(item.id)}
            >
              Edit
              <DropdownMenuShortcut>
                <Pencil className='w-4 h-4' />
              </DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem
              className='md:cursor-pointer'
              onClick={() => console.log(item.id)}
            >
              Delete
              <DropdownMenuShortcut>
                <Trash className='w-4 h-4' />
              </DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
