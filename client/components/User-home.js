import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Table, Row, Col, Container} from 'reactstrap'

/**
 * COMPONENT
 */
export const UserHome = props => {
  console.log('userhome props ', props)
  const {user} = props
  const {
    firstName,
    lastName,
    email,
    address,
    city,
    state,
    zipcode,
    phone,
    billingAdd,
    billingCity,
    billingZip
  } = user
  return (
    <Container fluid>
      <Row>
        <Col>
          <h2 className="text-center m-3">
            Welcome, {firstName} {lastName}
          </h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <h5 className="text-center font-weight-light m-5">
            Here's your profile information.
          </h5>
        </Col>
      </Row>
      <Table bordered striped responsive>
        <tbody>
          <tr>
            <th scope="row">Firstname</th>
            <td>{firstName}</td>
          </tr>
          <tr>
            <th scope="row">Lastname</th>
            <td>{lastName}</td>
          </tr>
          <tr>
            <th scope="row">Email</th>
            <td>{email}</td>
          </tr>
          <tr>
            <th scope="row">Address</th>
            <td>{address}</td>
          </tr>
          <tr>
            <th scope="row">City</th>
            <td>{city}</td>
          </tr>
          <tr>
            <th scope="row">State</th>
            <td>{state}</td>
          </tr>
          <tr>
            <th scope="row">Zip</th>
            <td>{zipcode}</td>
          </tr>
          <tr>
            <th scope="row">Phone</th>
            <td>{phone}</td>
          </tr>
          <tr>
            <th scope="row">Billing Address</th>
            <td>{billingAdd}</td>
          </tr>
          <tr>
            <th scope="row">Billing City</th>
            <td>{billingCity}</td>
          </tr>
          <tr>
            <th scope="row">Billing Zip</th>
            <td>{billingZip}</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    user: state.user
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  user: PropTypes.object
}
