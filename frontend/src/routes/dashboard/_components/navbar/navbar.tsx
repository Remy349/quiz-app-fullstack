import { DesktopNavbar } from './desktop-navbar'
import { MobileNavbar } from './mobile-navbar'
import { UserMenu } from './user-menu'

export const Navbar = () => {
  return (
    <header className='w-full fixed top-0 left-0 bg-white border-b'>
      <nav className='px-6 flex items-center justify-between h-16 md:mx-auto md:max-w-3xl lg:max-w-5xl'>
        <DesktopNavbar />
        <MobileNavbar />
        <UserMenu />
      </nav>
    </header>
  )
}
