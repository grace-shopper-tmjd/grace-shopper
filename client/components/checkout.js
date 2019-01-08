import React, {Component} from 'react'
import axios from 'axios'

export default class NewStudent extends Component {
  constructor() {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      streetNumber: '',
      streetName: '',
      aptNumber: '',
      city: '',
      state: '',
      zipCode: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  async handleSubmit(evt) {
    evt.preventDefault()
    await axios.post('/api/orders', this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <input
          onChange={this.handleChange}
          name="firstName"
          type="text"
          value={this.state.firstName}
        />

        <label htmlFor="lastName">Last Name:</label>
        <input
          onChange={this.handleChange}
          name="lastName"
          type="text"
          value={this.state.lastName}
        />

        <label htmlFor="email">Email:</label>
        <input
          onChange={this.handleChange}
          name="email"
          type="text"
          value={this.state.email}
        />

        <label htmlFor="email">Email:</label>
        <input
          onChange={this.handleChange}
          name="email"
          type="text"
          value={this.state.email}
        />

        <label htmlFor="streetNumber">Street Number:</label>
        <input
          onChange={this.handleChange}
          name="streetNumber"
          type="text"
          value={this.state.streetNumber}
        />

        <label htmlFor="streetName">Street Name:</label>
        <input
          onChange={this.handleChange}
          name="streetName"
          type="text"
          value={this.state.streetName}
        />

        <label htmlFor="aptNumber">Apt Number:</label>
        <input
          onChange={this.handleChange}
          name="aptNumber"
          type="text"
          value={this.state.aptNumber}
        />

        <label htmlFor="city">City:</label>
        <input
          onChange={this.handleChange}
          name="city"
          type="text"
          value={this.state.city}
        />

        <label htmlFor="state">State:</label>
        <input
          onChange={this.handleChange}
          name="state"
          type="text"
          value={this.state.state}
        />

        <label htmlFor="zipCode">Zip Code:</label>
        <input
          onChange={this.handleChange}
          name="zipCode"
          type="text"
          value={this.state.zipCode}
        />

        <button type="submit">Submit</button>
      </form>
    )
  }
}
