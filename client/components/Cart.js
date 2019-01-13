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
import {fetchUserCart, updateBeerToCart} from '../actions/index'

class Cart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cartItems: []
    }
    // this.addBeerToCart = this.addBeerToCart.bind(this);
    // this.deleteBeerFromCart = this.deleteBeerFromCart.bind(this);
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

  // addBeerToCart(beer) {
  //   // const alreadyInCart = this.state.cartItems.findIndex(item => item.id === beer.id);
  //   // if(alreadyInCart === -1) {
  //   //   const updatedItems = this.state.cartItems.concat({
  //   //       ...beer, //spread all of the individual properties of brew object
  //   //       quantity: 1 // add a new propery to the end
  //   //   });
  //   //   this.setState({ cartItems: updatedItems }, () => this.props.addBeer());
  //   // } else {
  //   //     // copy the cartItems array
  //   //     const updatedItems = [...this.state.cartItems];
  //   //     updatedItems[alreadyInCart].quantity += 1;
  //   //     this.setState({ cartItems: updatedItems }, () => this.props.addBeer();
  //   // }
  //   this.props.addBeer(beer)
  // }

  // deleteBeerFromCart(beerToDeleteId) {
  //   // const filteredItems = this.state.cartItems.filter(item => item.id !== beerToDeleteId);
  //   // this.setState({
  //   //     cartItems: filteredItems
  //   // });
  // }

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
                <CartItem key={order.id} order={order} />
                // <CartItem key={order.id} order={order} addBeerToCart={this.addBeerToCart} deleteBeerFromCart={this.deleteBeerFromCart} />
              ))}
            </ListGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={this.props.closeCart}>
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
    getUserCart: () => dispatch(fetchUserCart())
    // addBeer: beer => dispatch(updateBeerToCart(beer))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
