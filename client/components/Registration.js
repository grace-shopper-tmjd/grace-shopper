import React, {Component} from 'react'
import RegistrationForm from './RegistrationForm'
import {Container, Row} from 'reactstrap'
import {createOneUser} from '../actions/index'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

class Registration extends Component {
  constructor() {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      address: '',
      city: '',
      state: '',
      zipcode: '',
      phone: '',
      billingAdd: '',
      billingCity: '',
      billingZip: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleSubmit(event, values) {
    event.preventDefault()
    this.setState({
      values
    })
    const {
      firstName,
      lastName,
      email,
      password,
      address,
      city,
      state,
      zipcode,
      phone,
      billingAdd,
      billingCity,
      billingZip
    } = this.state
    const newUser = {
      firstName,
      lastName,
      email,
      password,
      address,
      city,
      state,
      zipcode,
      phone,
      billingAdd,
      billingZip,
      billingCity
    }
    this.props.createOneUser(newUser, this.props.history)
  }
  render() {
    return (
      <RegistrationForm
        {...this.state}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    newUser: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createOneUser: (newUser, history) =>
      dispatch(createOneUser(newUser, history))
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Registration)
)
