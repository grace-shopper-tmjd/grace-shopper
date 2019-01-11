import React, {Component} from 'react'
import SignupForm from './SignupForm'
import {Container} from 'reactstrap'

class Signup extends Component {
  render() {
    return (
      <Container>
        <SignupForm />
      </Container>
    )
  }
}

export default Signup
