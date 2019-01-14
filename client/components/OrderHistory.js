import React, {Component} from 'react'
import {connect} from 'react-redux'

import {Table} from 'reactstrap'

import {fetchAllOrders} from '../actions/index'

class OrderHistory extends Component {
  constructor(props) {
    super(props)

    this.state = {
      orders: []
    }
  }

  componentDidMount() {
    this.props.getAllOrders()
  }

  render() {
    return (
      <Table>
        <thead>
          <tr>
            <th>Order Number</th>
            <th>Order Date</th>
            <th>Shipping Status</th>
          </tr>
        </thead>
        <tbody>
          {this.props.orders.map(({orderNumber, orderDate, shipped}, i) => {
            return (
              <tr key={i}>
                <th scope="row">{orderNumber}</th>
                <td>{orderDate}</td>
                <td>{shipped}</td>
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
    orders: state.orders.orders
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllOrders: () => dispatch(fetchAllOrders())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderHistory)
