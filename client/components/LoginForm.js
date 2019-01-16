import React, {Component} from 'react'
// import{connect} from 'react-redux'
// import { withRouter } from 'react-router-dom'
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
  const {handleSubmit, handleChange, formName, error} = props
  return (
    <Container>
      <Form onSubmit={handleSubmit} formName={formName}>
        <h2>Sign In</h2>
        <Col>
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
        </Col>
        <Button className="m-2">Login</Button>
        <Button className="m-2">Login With Google</Button>
        <Button className="m-2" href="/registration">
          Sign Up
        </Button>
      </Form>
    </Container>
  )
}

export default LoginForm
