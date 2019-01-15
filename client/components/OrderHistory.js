import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Table, Button} from 'reactstrap'

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
    console.log(this.props.orders)
    return (
      <>
        <h3>Shipped Orders</h3>
        <Table>
          <thead>
            <tr>
              <th>Order Number</th>
              <th>Order Date</th>
              <th>Shipping Status</th>
              <th>Order Details</th>
            </tr>
          </thead>
          <tbody>
            {this.props.orders.map(
              ({orderNumber, orderDate, id, shipped}, i) => {
                return (
                  <tr key={i}>
                    <th scope="row">{orderNumber}</th>
                    <td>{orderDate}</td>
                    <td>{shipped.toString()}</td>
                    <Link to={`/order/${id}`}>
                      <Button color="secondary" size="lg">
                        View
                      </Button>
                    </Link>
                  </tr>
                )
              }
            )}
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
