import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import { useAuthContext } from '@/hooks/useAuthContext'
import { logoLink, navLinks } from './links'

export const MobileNavbar = () => {
  const { currentUser } = useAuthContext()

  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant='outline' size='icon' className='md:hidden'>
            <Menu className='w-5 h-5' />
          </Button>
        </SheetTrigger>
        <SheetContent side='left'>
          {currentUser && (
            <ul className='text-lg font-medium flex flex-col gap-y-4'>
              {navLinks[currentUser.role].map((item) => (
                <li key={item.name}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? 'text-foreground' : 'text-muted-foreground'
                    }
                    to={item.href}
                    end
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
        </SheetContent>
      </Sheet>
      <div className='md:hidden'>
        {currentUser && (
          <Link to={logoLink[currentUser.role]} className='font-bold text-lg'>
            QuizApp
          </Link>
        )}
      </div>
    </>
  )
}
