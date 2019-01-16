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
  Input,
  FormText
} from 'reactstrap'

const RegistrationForm = props => {
  const {handleSubmit, handleChange} = props
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <FormGroup row>
          <Label for="firstname" sm={2}>
            First Name
          </Label>
          <Col sm={10}>
            <Input
              type="firstname"
              name="firstName"
              id="examplefirstname"
              placeholder="Please enter your first name"
              value={props.firstName}
              onChange={handleChange}
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="lastname" sm={2}>
            Last Name
          </Label>
          <Col sm={10}>
            <Input
              type="lastname"
              name="lastName"
              id="examplelastname"
              placeholder="Please enter your last name"
              value={props.lastName}
              onChange={handleChange}
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="email" sm={2}>
            Email
          </Label>
          <Col sm={10}>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="Please enter your email"
              value={props.email}
              onChange={handleChange}
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="examplePassword" sm={2}>
            Password
          </Label>
          <Col sm={10}>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="Please enter your password"
              value={props.password}
              onChange={handleChange}
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="address" sm={2}>
            Address
          </Label>
          <Col sm={10}>
            <Input
              type="address"
              name="address"
              id="exampleAddress"
              placeholder="Please enter your address"
              value={props.address}
              onChange={handleChange}
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="city" sm={2}>
            City
          </Label>
          <Col sm={10}>
            <Input
              type="city"
              name="city"
              id="exampleCity"
              placeholder="Please enter your city"
              value={props.city}
              onChange={handleChange}
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="state" sm={2}>
            State
          </Label>
          <Col sm={10}>
            <Input
              type="state"
              name="state"
              id="exampleState"
              placeholder="Please enter your state"
              value={props.state}
              onChange={handleChange}
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="zipcode" sm={2}>
            Zipcode
          </Label>
          <Col sm={10}>
            <Input
              type="zipcode"
              name="zipcode"
              id="exampleZipcode"
              placeholder="Please enter your zipcode"
              value={props.zipcode}
              onChange={handleChange}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="phone" sm={2}>
            Phone
          </Label>
          <Col sm={10}>
            <Input
              type="phone"
              name="phone"
              id="examplePhone"
              placeholder="Please enter your phone"
              value={props.phone}
              onChange={handleChange}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="billingAdd" sm={2}>
            Billing Address
          </Label>
          <Col sm={10}>
            <Input
              type="billingAdd"
              name="billingAdd"
              id="examplebillingAdd"
              placeholder="Please enter your billing address"
              value={props.billingAdd}
              onChange={handleChange}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="billingCity" sm={2}>
            Billing City
          </Label>
          <Col sm={10}>
            <Input
              type="billingCity"
              name="billingCity"
              id="examplebillingCity"
              placeholder="Please enter your billing city"
              value={props.billingCity}
              onChange={handleChange}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="billingZip" sm={2}>
            Billing Zip
          </Label>
          <Col sm={10}>
            <Input
              type="billingZip"
              name="billingZip"
              id="examplebillingZip"
              placeholder="Please enter your billing zipcode"
              value={props.billingZip}
              onChange={handleChange}
            />
          </Col>
        </FormGroup>
        <FormGroup check row>
          <Col sm={{size: 10, offset: 2}}>
            <Button>Submit</Button>
          </Col>
        </FormGroup>
      </Form>
    </Container>
  )
}

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error
  }
}

export default RegistrationForm
