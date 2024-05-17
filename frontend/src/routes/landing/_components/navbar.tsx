import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <header className='fixed top-0 left-0 bg-white w-full border-b'>
      <nav className='flex items-center justify-between px-6 h-16'>
        <Link className='font-bold text-lg' to='/'>
          QuizAPP
        </Link>
        <div>
          <Button className='font-medium' variant='outline' asChild>
            <Link to='/auth/signin'>Sign In</Link>
          </Button>
        </div>
      </nav>
    </header>
  )
}
