import React from 'react'
import {
  AvForm,
  AvGroup,
  AvFeedback,
  AvInput
} from 'availity-reactstrap-validation'

import {Container, Col, Button, Label} from 'reactstrap'

const RegistrationForm = props => {
  const {handleValidSubmit, handleChange} = props
  return (
    <Container>
      <AvForm onSubmit={handleValidSubmit}>
        <AvGroup row>
          <Label for="firstname" sm={2}>
            First Name
          </Label>
          <Col sm={10}>
            <AvInput
              type="text"
              name="firstName"
              id="examplefirstname"
              placeholder="Please enter your first name"
              value={props.firstName}
              onChange={handleChange}
              required
            />
            <AvFeedback>Please enter your first name.</AvFeedback>
          </Col>
        </AvGroup>

        <AvGroup row>
          <Label for="lastname" sm={2}>
            Last Name
          </Label>
          <Col sm={10}>
            <AvInput
              type="text"
              name="lastName"
              id="examplelastname"
              placeholder="Please enter your last name"
              value={props.lastName}
              onChange={handleChange}
              required
            />
            <AvFeedback>Please enter your last name.</AvFeedback>
          </Col>
        </AvGroup>

        <AvGroup row>
          <Label for="email" sm={2}>
            Email
          </Label>
          <Col sm={10}>
            <AvInput
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="Please enter your email"
              value={props.email}
              onChange={handleChange}
              required
            />
            <AvFeedback>Please enter your email.</AvFeedback>
          </Col>
        </AvGroup>

        <AvGroup row>
          <Label for="examplePassword" sm={2}>
            Password
          </Label>
          <Col sm={10}>
            <AvInput
              type="password"
              name="password"
              id="examplePassword"
              placeholder="Please enter your password"
              value={props.password}
              onChange={handleChange}
              required
            />
            <AvFeedback>Please enter your password.</AvFeedback>
          </Col>
        </AvGroup>

        <AvGroup row>
          <Label for="address" sm={2}>
            Address
          </Label>
          <Col sm={10}>
            <AvInput
              type="text"
              name="address"
              id="exampleAddress"
              placeholder="Please enter your address"
              value={props.address}
              onChange={handleChange}
              required
            />
            <AvFeedback>Please enter your address.</AvFeedback>
          </Col>
        </AvGroup>

        <AvGroup row>
          <Label for="city" sm={2}>
            City
          </Label>
          <Col sm={10}>
            <AvInput
              type="text"
              name="city"
              id="exampleCity"
              placeholder="Please enter your city"
              value={props.city}
              onChange={handleChange}
              required
            />
            <AvFeedback>Please enter your city.</AvFeedback>
          </Col>
        </AvGroup>

        <AvGroup row>
          <Label for="state" sm={2}>
            State
          </Label>
          <Col sm={10}>
            <AvInput
              type="text"
              name="state"
              id="exampleState"
              placeholder="Please enter your state"
              value={props.state}
              onChange={handleChange}
              required
            />
            <AvFeedback>Please enter your state.</AvFeedback>
          </Col>
        </AvGroup>

        <AvGroup row>
          <Label for="zipcode" sm={2}>
            Zipcode
          </Label>
          <Col sm={10}>
            <AvInput
              type="number"
              name="zipcode"
              id="exampleZipcode"
              placeholder="Please enter your zipcode"
              value={props.zipcode}
              onChange={handleChange}
              required
            />
            <AvFeedback>Please enter your zip code.</AvFeedback>
          </Col>
        </AvGroup>
        <AvGroup row>
          <Label for="phone" sm={2}>
            Phone
          </Label>
          <Col sm={10}>
            <AvInput
              type="number"
              name="phone"
              id="examplePhone"
              placeholder="Please enter your phone"
              value={props.phone}
              onChange={handleChange}
              required
            />
            <AvFeedback>Please enter your phone number.</AvFeedback>
          </Col>
        </AvGroup>
        <AvGroup row>
          <Label for="billingAdd" sm={2}>
            Billing Address
          </Label>
          <Col sm={10}>
            <AvInput
              type="text"
              name="billingAdd"
              id="examplebillingAdd"
              placeholder="Please enter your billing address"
              value={props.billingAdd}
              onChange={handleChange}
              required
            />
            <AvFeedback>Please enter your billing address.</AvFeedback>
          </Col>
        </AvGroup>
        <AvGroup row>
          <Label for="billingCity" sm={2}>
            Billing City
          </Label>
          <Col sm={10}>
            <AvInput
              type="text"
              name="billingCity"
              id="examplebillingCity"
              placeholder="Please enter your billing city"
              value={props.billingCity}
              onChange={handleChange}
              required
            />
            <AvFeedback>Please enter your billing city.</AvFeedback>
          </Col>
        </AvGroup>
        <AvGroup row>
          <Label for="billingZip" sm={2}>
            Billing Zip
          </Label>
          <Col sm={10}>
            <AvInput
              type="billingZip"
              name="billingZip"
              id="examplebillingZip"
              placeholder="Please enter your billing zipcode"
              value={props.billingZip}
              onChange={handleChange}
              required
            />
            <AvFeedback>Please enter your billing address.</AvFeedback>
          </Col>
        </AvGroup>
        <AvGroup check row>
          <Col sm={{size: 10, offset: 2}}>
            <Button>Submit</Button>
          </Col>
        </AvGroup>
      </AvForm>
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
