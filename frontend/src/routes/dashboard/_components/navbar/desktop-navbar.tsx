import { useAuthContext } from '@/hooks/useAuthContext'
import { Link, NavLink } from 'react-router-dom'
import { logoLink, navLinks } from './links'

export const DesktopNavbar = () => {
  const { currentUser } = useAuthContext()

  return (
    <div className='hidden items-center gap-x-6 md:flex'>
      {currentUser && (
        <Link to={logoLink[currentUser.role]} className='font-bold text-lg'>
          QuizApp
        </Link>
      )}
      <div>
        {currentUser && (
          <ul className='flex items-center gap-x-4 font-medium text-sm'>
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
      </div>
    </div>
  )
}
