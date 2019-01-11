import React from 'react'
import {
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from 'reactstrap'

const ContactForm = () => {
  return (
    <Form>
      <h3>Drop us a message</h3>
      <Row>
        <Col md={6}>
          <FormGroup row>
            <Input
              type="Your name"
              name="txtName"
              id="name"
              placeholder="Your Name *"
            />
          </FormGroup>
          <FormGroup row>
            <Input
              type="Your Email"
              name="txtEmail"
              id="email"
              placeholder="Your Email *"
            />
          </FormGroup>
          <FormGroup row>
            <Input
              type="Phone"
              name="txtPhone"
              id="phone"
              placeholder="Your Phone Number *"
            />
          </FormGroup>
          <FormGroup check row>
            <Col sm={{size: 10, offset: 2}}>
              <Button>Submit</Button>
            </Col>
          </FormGroup>
        </Col>
        <Col>
          <Label for="exampleText">Text Area</Label>
          <Input type="textarea" name="text" id="exampleText" rows={4} />
        </Col>
      </Row>
    </Form>
  )
}

export default ContactForm
