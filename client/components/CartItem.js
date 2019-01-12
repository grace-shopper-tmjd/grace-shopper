import React from 'react'
import {Media, Button, ListGroupItem} from 'reactstrap'

const CartItem = props => (
  <ListGroupItem>
    <Media>
      <Media left href="#">
        <Media
          object
          style={{width: '150px'}}
          src={props.order.beer.imageUrl}
          alt="Generic placeholder image"
        />
      </Media>

      <Media className="ml-4" left>
        <Media left heading>
          {props.order.beer.name}
        </Media>
        <Media body>
          <div>Price: {props.order.beer.price}</div>
          <div>
            <Button
              bsStyle="default"
              style={{
                size: '10px',
                marginRight: '5px',
                color: 'black',
                backgroundColor: 'white',
                borderRadius: '50%'
              }}
              bsSize="xsmall"
            >
              -
            </Button>
            {props.order.quantity}
            <Button
              style={{
                marginLeft: '5px',
                color: 'black',
                backgroundColor: 'white',
                borderRadius: '50%'
              }}
              bsSize="xsmall"
            >
              +
            </Button>
          </div>
          <div>Pack size: {props.order.beer.packSize}</div>
          <div>Beer style: {props.order.beer.beerStyle.name}</div>
        </Media>
      </Media>
      <Button className="ml-2" color="danger">
        X
      </Button>
    </Media>
  </ListGroupItem>
)

export default CartItem
