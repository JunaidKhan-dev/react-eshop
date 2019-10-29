import React from 'react'
import './SignInUp.style.scss'
import SignIn from '../../Components/SignIn/SignIn.component'
import SignUp from '../../Components/SignUp/SignUp.component'

const SignInUp = () => {
  return (
    <div className='sign-in-and-aign-up'>
      <SignIn />
      <SignUp />
    </div>
  )
}

export default SignInUp
