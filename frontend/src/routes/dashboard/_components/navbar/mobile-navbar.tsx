import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import { Link } from 'react-router-dom'

export const MobileNavbar = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant='outline' size='icon' className='md:hidden'>
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
      <div className='md:hidden'>
        <Link to='/dashboard' className='font-bold text-lg'>
          QuizApp
        </Link>
      </div>
    </>
  )
}
