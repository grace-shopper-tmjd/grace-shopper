/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
var divStyle = {
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

class Cart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cartItems: []
    }
  }

  async componentDidMount() {
    await this.props.getUserCart()
    const userCart = this.props.cartItems
    if (userCart) {
      this.setState({
        cartItems: userCart
      })
    }
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
              {this.props.cartItems.map(order => (
                <CartItem
                  key={order.id}
                  order={order}
                  deleteBeer={this.props.deleteBeer}
                  updateQuantity={this.props.updateQuantity}
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

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
