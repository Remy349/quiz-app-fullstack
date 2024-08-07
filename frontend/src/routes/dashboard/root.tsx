import { Toaster } from 'sonner'
import { Navbar } from './_components/navbar'
import { Outlet } from 'react-router-dom'

export default function DashboardRoot() {
  return (
    <>
      <Navbar />
      <main className='mt-16 min-h-[calc(100vh-4rem)] bg-muted/50'>
        <section className='pt-[2.5rem] pb-[4rem]'>
          <div className='px-6 md:mx-auto md:max-w-3xl lg:max-w-5xl'>
            <Outlet />
          </div>
        </section>
      </main>
      <Toaster position='top-right' closeButton richColors />
    </>
  )
}
