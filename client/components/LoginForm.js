import React, {Component} from 'react'
import {
  Container,
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap'

const LoginForm = props => {
  const {handleSubmit, handleChange, formName} = props
  return (
    <Container className="d-flex flex-column align-items-center justify-content-center">
      <Row>
        <h1 className="text-center m-2">Sign In</h1>
      </Row>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit} formName={formName}>
            <FormGroup>
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="myemail@email.com"
                value={props.email}
                onChange={handleChange}
              />
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="********"
                value={props.password}
                onChange={handleChange}
              />
            </FormGroup>
            <div className="d-flex align-items-center justify-content-center">
              <Button className="m-2">Login</Button>
              <Button className="m-2" href="/registration">
                Sign Up
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default LoginForm
