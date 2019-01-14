import React, {Component} from 'react'
import {connect} from 'react-redux'

import {Table} from 'reactstrap'

import {fetchSingleOrder} from '../actions/index'

class Order extends Component {
  constructor(props) {
    super(props)

    this.state = {
      orderDetails: []
    }
  }

  componentDidMount() {
    this.props.getSingleOrder()
  }

  render() {
    return (
      <Table>
        <thead>
          <tr>
            <th>Beer Name</th>
            <th>Pack Size</th>
            <th>Quantity </th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {this.props.orderDetails.map(({beerId, quantity, price}, i) => {
            return (
              <tr key={i}>
                <td>Beer Ids Name</td>
                <td>Beer Ids Pack Size</td>
                <td>{quantity}</td>
                <td>{price}</td>
                <td>Total</td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    )
  }
}

const mapStateToProps = state => {
  return {
    orders: state.orderDetails.orderDetails
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getSingleOrder: () => dispatch(fetchSingleOrder())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Order)
