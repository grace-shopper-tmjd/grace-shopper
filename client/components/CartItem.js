import React from 'react'
import {Media, Button, ListGroupItem} from 'reactstrap'

const CartItem = props => (
  <ListGroupItem>
    <Media>
      <Media left href="#">
        <Media
          object
          style={{width: '150px'}}
          src={props.orderItem.beer.imageUrl}
          alt="Generic placeholder image"
        />
      </Media>

      <Media className="ml-4" left>
        <Media left heading>
          {props.orderItem.beer.name}
        </Media>
        <Media body>
          <div>
            Price:{' '}
            {(props.orderItem.beer.price * props.orderItem.quantity).toFixed(2)}
          </div>
          <div>
            <Button
              onClick={() =>
                props.updateQuantity(
                  {
                    ...props.orderItem,
                    quantity: props.orderItem.quantity - 1
                  },
                  props.userId
                )
              }
              style={{
                size: '10px',
                marginRight: '5px',
                color: 'black',
                backgroundColor: 'white',
                borderRadius: '50%'
              }}
            >
              -
            </Button>
            {props.orderItem.quantity}
            <Button
              onClick={() =>
                props.updateQuantity(
                  {
                    ...props.orderItem,
                    quantity: props.orderItem.quantity + 1
                  },
                  props.userId
                )
              }
              style={{
                marginLeft: '5px',
                color: 'black',
                backgroundColor: 'white',
                borderRadius: '50%'
              }}
            >
              +
            </Button>
          </div>
          <div>Pack size: {props.orderItem.beer.packSize}</div>
          <div>Beer style: {props.orderItem.beer.beerStyle.name}</div>
        </Media>
      </Media>
      <Button
        onClick={() => props.deleteBeer(props.orderItem.id, props.userId)}
        className="ml-2"
        color="danger"
      >
        X
      </Button>
    </Media>
  </ListGroupItem>
)

export default CartItem
