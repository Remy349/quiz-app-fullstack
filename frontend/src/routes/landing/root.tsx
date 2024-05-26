import { Outlet } from 'react-router-dom'
import { Navbar } from './_components/navbar/navbar'
import { Toaster } from 'sonner'

export default function LandingRoot() {
  return (
    <>
      <Navbar />
      <main className='mt-16'>
        <Outlet />
      </main>
      <Toaster position='top-right' closeButton richColors />
    </>
  )
}
