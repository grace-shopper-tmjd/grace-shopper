import React, {Component} from 'react'
// import{connect} from 'react-redux'
// import { withRouter } from 'react-router-dom'
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
import Registration from './Registration'

class RegistrationForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      address: '',
      city: '',
      state: '',
      zipcode: '',
      phone: ''
    }
    // this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  // handleChange(event){
  //     this.setState({
  //         [event.target.username]:event.target.value
  //     })
  // }
  handleSubmit(event) {
    event.preventDefault()
    // this.props.logIn({...this.state})
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      address: '',
      city: '',
      state: '',
      zipcode: '',
      phone: ''
    })
  }
  render() {
    return (
      <div>
        <Form>
          <FormGroup row>
            <Label for="firstname" sm={2}>
              First Name
            </Label>
            <Col sm={10}>
              <Input
                type="firstname"
                name="firstname"
                id="examplefirstname"
                placeholder="Please enter your first name"
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
                name="lastname"
                id="examplelastname"
                placeholder="Please enter your last name"
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
              />
            </Col>
          </FormGroup>

          <FormGroup check row>
            <Col sm={{size: 10, offset: 2}}>
              <Button>Submit</Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    )
  }
}

export default RegistrationForm
