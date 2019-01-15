import React, {Component} from 'react'
import {
  Container,
  CardGroup,
  Table,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap'
import {CartItem} from './index'
import {connect} from 'react-redux'
import {
  fetchUserCart,
  updateCartItem,
  deleteFromCart,
  markOrderAsShipped,
  createCart
} from '../actions/index'
import {withRouter} from 'react-router-dom'

class Checkout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cartItems: [],
      subtotal: 0
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  async componentDidMount() {
    const {userId} = this.props
    if (userId) {
      await this.props.getUserCart(userId)
    } else {
      this.props.getUserCart(this.props.match.params.userId)
    }
    const userCart = this.props.cartItems

    if (userCart) {
      this.setState({
        cartItems: userCart
      })
    }
  }

  handleSubmit() {
    const orderID = this.props.cartItems[0].orderId
    this.props.markAsShipped(orderID, this.props.userId)
    this.props.createNewCart(this.props.userId)
  }

  render() {
    const cartItems = this.props.cartItems
    let total = 0
    let orderId
    if (cartItems.length) {
      cartItems.forEach(item => (total += item.price))
      orderId = cartItems[0].orderId
    }
    total = total.toFixed(2)
    console.log(total)
    return (
      <Container>
        <Table borderless>
          <tbody>
            <tr>
              <th>1</th>
              <th>Shipping Address</th>
              <td>
                <div>
                  {this.props.user.firstName}
                  {this.props.user.lastName}
                </div>
                <div>{this.props.user.address}</div>
                <div>{this.props.user.city}</div>
                <div>{this.props.user.state}</div>
                <div>{this.props.user.zipcode}</div>
              </td>
              <td> `</td>
              <td> `</td>
            </tr>

            <tr>
              <th>2</th>
              <th>Payment Method</th>
              <td>
                <Form>
                  <FormGroup>
                    <Label for="exampleSelect">Card Type</Label>
                    <Input type="select" name="select" id="exampleSelect">
                      <option>Visa</option>
                      <option>Mastercard</option>
                      <option>American Express</option>
                      <option>Discover</option>
                    </Input>
                    <FormGroup>
                      <Label for="exampleEmail">Card Number</Label>
                      <Input
                        type="number"
                        name="email"
                        id="cardNumber"
                        placeholder="Card number"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleEmail">Security Code</Label>
                      <Input
                        type="number"
                        name="email"
                        id="cardNumber"
                        placeholder="Security Code"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleDate">Expiration Date</Label>
                      <Input
                        type="date"
                        name="date"
                        id="exampleDate"
                        placeholder="expiration date"
                      />
                    </FormGroup>
                  </FormGroup>
                </Form>
              </td>
            </tr>

            <tr>
              <th>3</th>
              <th>Review Items</th>
              <td>Total: ${total}</td>
              <td>
                <CardGroup>
                  {this.props.cartItems.map(order => (
                    <CartItem
                      key={order.id}
                      orderItem={order}
                      deleteBeer={this.props.deleteBeer}
                      updateQuantity={this.props.updateQuantity}
                      userId={this.props.userId}
                    />
                  ))}
                </CardGroup>
              </td>
            </tr>
          </tbody>
        </Table>

        <Button
          href={`/order/${orderId}/confirmation`}
          onClick={this.handleSubmit}
        >
          Purchase
        </Button>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  console.log('state in mapstatetoprops', state)
  return {
    cartItems: state.orders.cartItems,
    user: state.user,
    userId: state.user.id
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUserCart: userID => dispatch(fetchUserCart(userID)),
    deleteBeer: (beer, userId) => dispatch(deleteFromCart(beer, userId)),
    updateQuantity: (beer, userId) => dispatch(updateCartItem(beer, userId)),
    markAsShipped: (orderId, userId) =>
      dispatch(markOrderAsShipped(orderId, userId)),
    createNewCart: userId => dispatch(createCart(userId))
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Checkout)
)
