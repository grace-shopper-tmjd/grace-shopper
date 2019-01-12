/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

const orders = [
  {
    id: 6,
    quantity: 18,
    price: 91.79,
    createdAt: '2019-01-11T17:43:45.979Z',
    updatedAt: '2019-01-11T17:43:45.979Z',
    beerId: 10,
    orderId: 3,
    beer: {
      id: 10,
      name: 'Founders Solid Gold',
      brand: 'Founders Brewing Co.',
      description:
        'Selected as a benchmark for the Beer Judge Certification Program used in all American based beer judgings. Centennial IPA has quickly become the IPA of choice. Pour yourself a pint of this complex flavorful ale and bask in the frothy head’s floral bouquet. Relish the immense citrus accents, achieved by the abundance of dry hopping. This ale’s sweet, malty undertones balance the hop character with a finish that never turns too bitter.',
      inventory: 30,
      imageUrl:
        'https://cdn.shopify.com/s/files/1/0067/6030/0609/products/founders-solid-gold-6pack-cans_f86b1c2d-246f-40bc-b2ae-fc0060b3bd25_1080x.jpg?v=1538411274',
      price: '3.99',
      ABV: '4.4',
      packSize: '4 pack',
      createdAt: '2019-01-11T17:43:45.909Z',
      updatedAt: '2019-01-11T17:43:45.909Z',
      beerStyleId: 4,
      beerStyle: {
        id: 4,
        name: 'Pilsner',
        createdAt: '2019-01-11T17:43:45.825Z',
        updatedAt: '2019-01-11T17:43:45.825Z'
      }
    }
  },
  {
    id: 7,
    quantity: 7,
    price: 73.38,
    createdAt: '2019-01-11T17:43:45.979Z',
    updatedAt: '2019-01-11T17:43:45.979Z',
    beerId: 9,
    orderId: 5,
    beer: {
      id: 9,
      name: 'Founders Centennial IPA',
      brand: 'Founders Brewing Co.',
      description:
        'Selected as a benchmark for the Beer Judge Certification Program used in all American based beer judgings. Centennial IPA has quickly become the IPA of choice. Pour yourself a pint of this complex flavorful ale and bask in the frothy head’s floral bouquet. Relish the immense citrus accents, achieved by the abundance of dry hopping. This ale’s sweet, malty undertones balance the hop character with a finish that never turns too bitter.',
      inventory: 30,
      imageUrl:
        'https://cdn.shopify.com/s/files/1/0067/6030/0609/products/founders-centennial-ipa-12oz-bottle_bd9bbb73-b677-41d5-a29b-42d3edfb64aa_1080x.jpg?v=1541293851',
      price: '3.99',
      ABV: '8.3',
      packSize: '6 pack',
      createdAt: '2019-01-11T17:43:45.909Z',
      updatedAt: '2019-01-11T17:43:45.909Z',
      beerStyleId: 4,
      beerStyle: {
        id: 4,
        name: 'Pilsner',
        createdAt: '2019-01-11T17:43:45.825Z',
        updatedAt: '2019-01-11T17:43:45.825Z'
      }
    }
  }
]

import React from 'react'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ListGroup
} from 'reactstrap'
import {CartItem} from './index'

class Cart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cartItems: []
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
          <div>
            <Button
              right
              close
              className="custom-close-button"
              onClick={this.props.closeCart}
            >
              {this.props.buttonLabel}
            </Button>
            <ModalHeader>Cart</ModalHeader>
          </div>
          <ModalBody>
            <ListGroup>
              {orders.map(order => <CartItem key={order.id} order={order} />)}
            </ListGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={this.props.closeCart}>
              Check out
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

export default Cart
