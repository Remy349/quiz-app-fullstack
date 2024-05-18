import { SignUpForm } from '../_components/signup-form'

export default function SignUpPage() {
  return (
    <section className='pt-[4rem] pb-[2.5rem] lg:pt-[6rem] lg:pb-[4rem]'>
      <div className='px-6 sm:mx-auto sm:max-w-lg'>
        <div>
          <SignUpForm />
        </div>
      </div>
    </section>
  )
}
