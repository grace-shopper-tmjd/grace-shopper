/*----------------*/

/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
var divStyle = {
  padding: '20px'
}

import React from 'react'
import {ListGroup, Table} from 'reactstrap'
import {connect} from 'react-redux'
import {fetchOrderDetails} from '../actions/index'

class Order extends React.Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   orderDetails: []
    // }
  }

  async componentDidMount() {
    await this.props.getOrderDetails(this.props.match.params.orderId)
    // const userCart = this.props.cartItems
    console.log('props:', this.props)
    console.log('state:', this.state)
    // if (this.props.orderDetails) {
    //   this.setState({
    //     orderDetails: this.props.orderDetails
    //   })
    // }
  }

  render() {
    if (!this.props.orderDetails) {
      console.log('props:', this.props)
      console.log('state:', this.state)
      // console.log('param:', this.props.match.params.orderId)
      return <div>Loading</div>
    } else {
      console.log(this.props.orderDetails)
      return (
        <div>
          <h3>Order Details</h3>
          <Table>
            <thead>
              <tr>
                <th>Quantity</th>
                <th>Price</th>
                <th>Item</th>
              </tr>
            </thead>

            <tbody>
              {this.props.orderDetails.map(({quantity, price, beer}, i) => {
                return (
                  <tr key={i}>
                    <th scope="row">{quantity}</th>
                    <td>{price}</td>
                    <td>{beer.name}</td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
        </div>
      )
    }
  }
}

const mapStateToProps = state => {
  console.log('mapstate state:', state)
  return {
    orderDetails: state.orders.orderDetails
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getOrderDetails: orderId => dispatch(fetchOrderDetails(orderId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Order)
