import React, {Component} from 'react'
import {Container} from 'reactstrap'
import {Link} from 'react-router-dom'

class CheckoutConfirmation extends Component {
  render() {
    return (
      <Container>
        Thank you for your purchase. <Link to="/">Start shopping.</Link>
      </Container>
    )
  }
}

export default CheckoutConfirmation
