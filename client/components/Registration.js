import React, {Component} from 'react'
import RegistrationForm from './RegistrationForm'
import {Container} from 'reactstrap'
import {createOneUser} from '../actions/index'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {AvForm, AvField} from 'availity-reactstrap-validation'

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
    this.handleValid = this.handleValid.bind(this)
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleValid(event, values) {
    event.preventDefault()
    // this.props.logIn({...this.state})
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
        handleValidSubmit={this.handleValidSubmit}
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
