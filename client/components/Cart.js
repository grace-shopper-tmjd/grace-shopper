/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
const divStyle = {
  padding: '20px'
}

import React from 'react'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ListGroup
} from 'reactstrap'
import {connect} from 'react-redux'
import {CartItem} from './index'
import {fetchUserCart, updateCartItem, deleteFromCart} from '../actions/index'
import {withRouter} from 'react-router-dom'
class Cart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cartItems: []
    }
  }

  async componentDidMount() {
    const {userId} = this.props
    await this.props.getUserCart(userId)
    const userCart = this.props.cartItems
    console.log('userCart', userCart)
    if (userCart) {
      this.setState({
        cartItems: userCart
      })
    }
    console.log('cartItems', this.state.cartItems)
  }

  render() {
    return (
      <div>
        <Modal
          style={{
            marginRight: 0,
            height: '100vh'
          }}
          isOpen={this.props.isOpen}
        >
          <ModalHeader className="cartHeader" toggle={this.toggle}>
            Cart
            <Button
              onClick={this.props.closeCart}
              close
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true"> &times;</span>
            </Button>
          </ModalHeader>
          <ModalBody>
            <ListGroup>
              {this.state.cartItems.map(orderItem => (
                <CartItem
                  key={orderItem.id}
                  orderItem={orderItem}
                  deleteBeer={this.props.deleteBeer}
                  updateQuantity={this.props.updateQuantity}
                  userId={this.props.userId}
                />
              ))}
            </ListGroup>
          </ModalBody>
          <ModalFooter>
            <Button
              href="/checkout"
              color="success"
              onClick={this.props.closeCart}
            >
              Check out
            </Button>
            <Button color="danger" onClick={this.props.closeCart}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('mapStateToProps in Cart', state)
  return {
    cartItems: state.orders.cartItems,
    userId: state.user.id
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUserCart: userID => dispatch(fetchUserCart(userID)),
    deleteBeer: (beer, userID) => dispatch(deleteFromCart(beer, userID)),
    updateQuantity: (beer, userID) => dispatch(updateCartItem(beer, userID))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cart))
