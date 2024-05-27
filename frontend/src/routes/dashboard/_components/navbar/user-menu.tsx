import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar } from '@/components/custom/avatar'
import { LogOut } from 'lucide-react'

export const UserMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar value='santiago@gmail.com' size={42} />
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Logout
          <DropdownMenuShortcut>
            <LogOut className='w-4 h-4' />
          </DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
