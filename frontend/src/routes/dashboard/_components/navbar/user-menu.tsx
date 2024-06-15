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
import { useAuthContext } from '@/hooks/useAuthContext'
import { Skeleton } from '@/components/ui/skeleton'
import { useNavigate } from 'react-router-dom'

export const UserMenu = () => {
  const navigate = useNavigate()
  const { logoutUser, currentUser } = useAuthContext()

  const handleLogout = () => {
    logoutUser()

    navigate('/auth/signin')
  }

  if (!currentUser) return <Skeleton className='w-10 h-10 rounded-full' />

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar value={currentUser.email} size={42} />
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuLabel>
          My Account
          <p className='font-normal text-xs text-muted-foreground'>
            {currentUser.email}
          </p>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className='md:cursor-pointer' onClick={handleLogout}>
          Logout
          <DropdownMenuShortcut>
            <LogOut className='w-4 h-4' />
          </DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
