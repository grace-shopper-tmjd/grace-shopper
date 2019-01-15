import React from 'react'
import {
  AvForm,
  AvGroup,
  AvFeedback,
  AvInput
} from 'availity-reactstrap-validation'
import {Container, Col, Button, Label} from 'reactstrap'

const LoginForm = props => {
  const {handleSubmit, handleChange, formName} = props
  return (
    <Container>
      <AvForm onSubmit={handleSubmit} formName={formName}>
        <h2>Sign In</h2>
        <AvGroup row>
          <Label for="email" sm={2}>
            Email
          </Label>
          <Col sm={5}>
            <AvInput
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="myemail@email.com"
              value={props.email}
              onChange={handleChange}
              required
            />
            <AvFeedback>Please enter your username.</AvFeedback>
          </Col>
        </AvGroup>
        <AvGroup row>
          <Label for="password" sm={2}>
            Password
          </Label>
          <Col sm={5}>
            <AvInput
              type="password"
              name="password"
              id="examplePassword"
              placeholder="********"
              value={props.password}
              onChange={handleChange}
              required
            />
            <AvFeedback>Please enter your password.</AvFeedback>
          </Col>
        </AvGroup>
        <AvGroup check row>
          <Col>
            <Button className="m-2">Login</Button>
            <Button className="m-2">Login With Google</Button>
            <Button className="m-2" href="/registration">
              Sign Up
            </Button>
          </Col>
        </AvGroup>
      </AvForm>
    </Container>
  )
}

export default LoginForm
