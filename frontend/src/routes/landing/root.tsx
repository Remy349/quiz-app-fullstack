import { Outlet } from 'react-router-dom'
import { Navbar } from './_components/navbar'

export default function LandingRoot() {
  return (
    <>
      <Navbar />
      <main className='mt-16'>
        <Outlet />
      </main>
    </>
  )
}
