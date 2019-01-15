/*----------------*/

/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
var divStyle = {
  padding: '20px'
}

import React from 'react'
import {ListGroup, Table} from 'reactstrap'
import {connect} from 'react-redux'
import {fetchSingleOrder} from '../actions/index'

class Order extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orderItems: []
    }
  }

  async componentDidMount() {
    await this.props.getSingleOrder(this.props.match.params.orderId)
    await this.props.getSingleOrder(this.props.match.params.orderId)
    // const userCart = this.props.cartItems
    if (this.props.orderItems) {
      this.setState({
        orderItems: this.props.orderItems
      })
    }
  }

  render() {
    return (
      <div>
        <Table>
          <thead>
            <tr>
              <th>Quantity</th>
              <th>Price</th>
              <th>Beer</th>
              <th>Beer Style</th>
            </tr>
          </thead>

          <tbody>
            {this.props.orderItems.map(({quantity, price, beerId}, i) => {
              return (
                <tr key={i}>
                  <th scope="row">{quantity}</th>
                  <td>{price}</td>
                  <td>{beerId}</td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    orderItems: state.orderItems.orderItems
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getSingleOrder: orderId => dispatch(fetchSingleOrder(orderId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Order)
