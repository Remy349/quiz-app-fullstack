import { Link } from 'react-router-dom'

export const DesktopNavbar = () => {
  return (
    <div className='hidden items-center gap-x-6 md:flex'>
      <Link to='/dashboard' className='font-bold text-lg'>
        QuizApp
      </Link>
      <div>
        <ul className='flex items-center'>
          <li>
            <Link to='/dashboard'>Dashboard</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
