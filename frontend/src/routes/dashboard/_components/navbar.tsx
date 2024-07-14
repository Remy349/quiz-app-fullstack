import { Button } from '@/components/ui/button'
import { LogOut } from 'lucide-react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <header className='w-full fixed top-0 left-0 bg-white border-b'>
      <nav className='px-6 flex items-center justify-between h-16 md:mx-auto md:max-w-3xl lg:max-w-5xl'>
        <Link to='/dashboard' className='font-bold text-lg'>
          QuizApp
        </Link>
        <div>
          <Button variant='outline' size='icon' asChild>
            <Link to='/'>
              <LogOut className='w-4 h-4' />
            </Link>
          </Button>
        </div>
      </nav>
    </header>
  )
}
