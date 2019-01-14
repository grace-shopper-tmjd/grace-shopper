import React, {Component} from 'react'
import LoginForm from './LoginForm'
import {connect} from 'react-redux'
import {auth} from '../actions/index'

class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit(evt) {
    evt.preventDefault()
    const email = evt.target.email.value
    const password = evt.target.password.value
    this.props.authenticate(email, password, 'login')
  }
  render() {
    return (
      <LoginForm
        {...this.state}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    email: state.email,
    password: state.password
  }
}

const mapDispatchToProps = dispatch => {
  return {
    authenticate: (email, password, formName) =>
      dispatch(auth(email, password, formName))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
