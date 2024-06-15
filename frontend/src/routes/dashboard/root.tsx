import { Outlet } from 'react-router-dom'
import { Navbar } from './_components/navbar/navbar'

export default function DashboardRoot() {
  return (
    <>
      <Navbar />
      <main className='mt-16'>
        <Outlet />
      </main>
    </>
  )
}
