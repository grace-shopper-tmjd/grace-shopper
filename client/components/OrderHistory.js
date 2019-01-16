import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {Table, Button} from 'reactstrap'
import Moment from 'react-moment'
import 'moment-timezone'

import {fetchAllOrders} from '../actions/index'

class OrderHistory extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getAllOrders(this.props.match.params.userId)
  }

  render() {
    return (
      <div>
        <Link to="/home">
          <h2 className="text-center text-success">Go to Profile info</h2>
        </Link>
        <h3>Shipped Orders</h3>
        <Table striped bordered responsive>
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
                    <td>
                      <Moment format="MM/DD/YYYY">{orderDate}</Moment>
                    </td>
                    <td>{shipped.toString()}</td>
                    <Link to={`/order/${id}`}>
                      <Button color="secondary" size="sm">
                        View
                      </Button>
                    </Link>
                  </tr>
                )
              }
            )}
          </tbody>
        </Table>
      </div>
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

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(OrderHistory)
)
