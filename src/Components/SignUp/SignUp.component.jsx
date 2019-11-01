import React, { Component } from 'react'
import FormInput from '../FormInput/FormInput.component'
import CustomButton from '../CustomButton/CustomButton.component'
import { auth, createUserProfileDocument } from '../../firebase/firebase.util'
import './SignUp.style.scss'

class SignUp extends Component {
  constructor (props) {
    super(props)

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

handleSubmit = async (e) => {
  e.preventDefault()
  const { displayName, email, password, confirmPassword } = this.state
  if (password !== confirmPassword) {
    alert('password dont match')
    return
  }

  try {
    const { user } = await auth.createUserWithEmailAndPassword(email, password)
    // this call the function to create a user from authentication user
    createUserProfileDocument(user, { displayName })
    this.setState({
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    })
  } catch (error) {
    console.error(error)
  }
}

handleChange = (e) => {
  const { value, name } = e.target
  this.setState({
    [name]: value
  })
}

render () {
  return (
    <div className='sign-up'>
      <h2 className='title'>I do not have an account</h2>
      <span>Signup with your email and password</span>
      <form className='sign-up-form' onSubmit={this.handleSubmit}>
        <FormInput type='text' name='displayName' value={this.state.displayName} onChange={this.handleChange} label='Display Name' required />
        <FormInput type='email' name='email' value={this.state.email} onChange={this.handleChange} label='Email' required />
        <FormInput type='password' name='password' value={this.state.password} onChange={this.handleChange} label='Password' required />
        <FormInput type='password' name='confirmPassword' value={this.state.confirmPassword} onChange={this.handleChange} label='Confirm Password' required />
        <CustomButton type='submit'>Sign up</CustomButton>
      </form>
    </div>
  )
}
}

export default SignUp
