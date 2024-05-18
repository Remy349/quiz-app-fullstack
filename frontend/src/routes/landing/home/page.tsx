import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <section className='pt-[4rem] pb-[2.5rem]'>
      <div className='px-6'>
        <div>
          <h1 className='text-center font-bold text-3xl mb-2'>
            Create and Perform Customized Tests in Minutes
          </h1>
          <p className='text-center font-medium mb-8'>
            With our platform, create customized tests in minutes. Design tests
            with ease, set timings and get results instantly. Ideal for
            education, vocational training or self-assessment. Simplify your
            assessment and ensure effective learning.
          </p>
          <div className='flex justify-center'>
            <Button className='font-medium' asChild>
              <Link to='/auth/signup'>Get started for free</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
