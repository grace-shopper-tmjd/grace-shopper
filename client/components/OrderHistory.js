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
    this.props.getAllOrders(this.props.match.params.userId)
  }

  render() {
    return (
      <>
        <h3>Shipped Orders</h3>
        <Table>
          <thead>
            <tr>
              <th>Order Number</th>
              <th>Order Date</th>
            </tr>
          </thead>
          <tbody>
            {this.props.orders.map(({orderNumber, orderDate}, i) => {
              return (
                <tr key={i}>
                  <th scope="row">{orderNumber}</th>
                  <td>{orderDate}</td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </>
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
    getAllOrders: id => dispatch(fetchAllOrders(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderHistory)
