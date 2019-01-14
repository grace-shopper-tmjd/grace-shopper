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
import {fetchUserCart, updateCartItem, deleteFromCart} from '../actions/index'

const user = {
  firstName: 'Camille',
  lastName: 'Jones',
  email: 'Camille@yahoo.com',
  address: '24 Gofish Lane',
  city: 'Kalamazoo',
  state: 'Michigan',
  zipcode: '49001'
}

class Checkout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cartItems: [],
      subtotal: 0
    }
    this.findSubtotal = this.findSubtotal.bind(this)
  }

  async componentDidMount() {
    this.findSubtotal()
    await this.props.getUserCart()
    const userCart = this.props.cartItems
    if (userCart) {
      this.setState({
        cartItems: userCart
      })
    }
  }

  findSubtotal() {
    let total = 0
    this.state.cartItems.forEach(item => (total += Number(item.price)))
    this.setState({
      subtotal: total
    })
  }

  render() {
    const cartItems = this.state.cartItems
    let total = 0
    if (cartItems.length) cartItems.forEach(item => (total += item.price))
    total = total.toFixed(2)
    return (
      <Container>
        <Table borderless>
          <tbody>
            <tr>
              <th>1</th>
              <th>Shipping Address</th>
              <td>
                <div>
                  {user.firstName}
                  {user.lastName}
                </div>
                <div>{user.address}</div>
                <div>{user.city}</div>
                <div>{user.state}</div>
                <div>{user.zipcode}</div>
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
                      order={order}
                      deleteBeer={this.props.deleteBeer}
                      updateQuantity={this.props.updateQuantity}
                    />
                  ))}
                </CardGroup>
              </td>
            </tr>
          </tbody>
        </Table>

        <Button>Purchase</Button>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    cartItems: state.orders.cartItems
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUserCart: () => dispatch(fetchUserCart()),
    deleteBeer: id => dispatch(deleteFromCart(id)),
    updateQuantity: item => dispatch(updateCartItem(item))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)
