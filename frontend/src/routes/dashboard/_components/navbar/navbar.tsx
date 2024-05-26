import { Avatar } from '@/components/custom/avatar'
import { Button } from '@/components/ui/button'
import { LogOut, Menu } from 'lucide-react'
import { Link } from 'react-router-dom'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

export const Navbar = () => {
  return (
    <header className='w-full fixed top-0 left-0 bg-white border-b'>
      <nav className='px-6 flex items-center justify-between h-16'>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant='outline' size='icon'>
              <Menu className='w-5 h-5' />
            </Button>
          </SheetTrigger>
          <SheetContent side='left'>
            <ul className='text-lg font-medium'>
              <li>
                <Link to='/dashboard'>Dashboard</Link>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
        <Link to='/dashboard' className='font-bold text-lg'>
          QuizApp
        </Link>
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
      </nav>
    </header>
  )
}
