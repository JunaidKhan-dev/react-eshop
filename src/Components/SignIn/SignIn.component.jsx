import React, { Component } from 'react'
import './SignIn.style.scss'
import FormInput from '../FormInput/FormInput.component'
import CustomButton from '../CustomButton/CustomButton.component'
class SignIn extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

 handleSubmit =(e) => {
   e.preventDefault()
   this.setState({ email: '', password: '' })
 }

inputChange= (e) => {
  const { value, name } = e.target
  this.setState({
    [name]: value
  })
}

render () {
  return (
    <div className='sign-in'>
      <h2>I Already Have Account</h2>
      <span>Sign in with your email and Password</span>
      <form onSubmit={this.handleSubmit}>
        <FormInput type='email' name='email' id='email' required value={this.state.email} handleChange={this.inputChange} label='Email' />
        <FormInput type='password' name='password' id='password' required value={this.state.password} handleChange={this.inputChange} label='Password' />
        <CustomButton type='submit' value='Submit Form'> SignIn </CustomButton>
      </form>
    </div>
  )
}
}

export default SignIn
