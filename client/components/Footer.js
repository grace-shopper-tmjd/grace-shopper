import React from 'react'

import {Container, Row, Button, FormGroup, Input} from 'reactstrap'

const Footer = props => {
  return (
    <Container className="d-flex flex-column align-items-center mt-5 pt-5">
      <Row>
        <h2 className="text-center m-2">Subscribe to our newsletter!</h2>
      </Row>
      <Row>
        <FormGroup>
          <Input
            type="email"
            name="footerEmail"
            id="footerEmail"
            placeholder="Enter your email!"
            className="m-2"
          />
        </FormGroup>
      </Row>
      <Row>
        <Button className="m-2">Submit</Button>
      </Row>
      <Row>
        <p className="lead text-center m-2 pb-5">
          Made in NYC 🍺 by Jeremy, Top, Matt, &amp; Danielle.
        </p>
      </Row>
    </Container>
  )
}

export default Footer
