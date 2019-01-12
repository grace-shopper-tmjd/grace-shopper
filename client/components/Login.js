import React, {Component} from 'react'
import LoginForm from './LoginForm'
import {Container} from 'reactstrap'

class Login extends Component {
  render() {
    return (
      <Container>
        <LoginForm />
      </Container>
    )
  }
}

export default Login
