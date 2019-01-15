import React from 'react'

import {
  Container,
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from 'reactstrap'

const Footer = props => {
  return (
    <Container center>
      <Row>
        <Col>
          Subscribe to our newsletter!
          <Form inline>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="exampleEmail" className="mr-sm-2">
                Email
              </Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="something@idk.cool"
              />
            </FormGroup>
            <Button>Submit</Button>
          </Form>
        </Col>

        <Col center>
          <div>Made in NYC 🍺 by Jeremy, Top, Matt, &amp; Danielle.</div>
        </Col>

        <Col />
      </Row>
    </Container>
  )
}

export default Footer
