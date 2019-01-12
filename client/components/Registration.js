import React, {Component} from 'react'
import RegistrationForm from './RegistrationForm'
import {Container} from 'reactstrap'

class Registration extends Component {
  render() {
    return (
      <Container>
        <RegistrationForm />
      </Container>
    )
  }
}

export default Registration
