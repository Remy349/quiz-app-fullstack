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
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '@/hooks/useAuthContext'

export const UserMenu = () => {
  const navigate = useNavigate()
  const { logoutUser, currentUser } = useAuthContext()

  const handleLogout = () => {
    logoutUser()

    navigate('/auth/signin')
  }

  if (!currentUser) return <p>Loading...</p>

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar value={currentUser.email} size={42} />
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
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
