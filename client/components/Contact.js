import React, {Component} from 'react'
import ContactForm from './ContactForm'
import {Container} from 'reactstrap'

class Contact extends Component {
  render() {
    return (
      <Container>
        <ContactForm />
      </Container>
    )
  }
}

export default Contact
