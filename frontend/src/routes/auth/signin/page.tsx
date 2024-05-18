import { SignInForm } from '../_components/signin-form'

export default function SignInPage() {
  return (
    <section className='pt-[4rem] pb-[2.5rem] lg:pt-[6rem] lg:pb-[4rem]'>
      <div className='px-6 sm:mx-auto sm:max-w-lg'>
        <div>
          <SignInForm />
        </div>
      </div>
    </section>
  )
}
