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

class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
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
      email: '',
      password: ''
    })
  }
  render() {
    return (
      <div>
        <Form>
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
          <FormGroup check row>
            <Col sm={{size: 10, offset: 2}}>
              <Button>Login</Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    )
  }
}

export default LoginForm
