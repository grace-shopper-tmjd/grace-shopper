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

      <Media left>
        <Media left heading>
          {props.order.beer.name}
        </Media>
        <div>{props.order.beer.price}</div>
        <div>{props.order.beer.quantity}</div>
        <div>{props.order.beer.packSize}</div>
        <div>{props.order.beer.beerStyle.name}</div>
      </Media>
    </Media>

    <Button color="danger">X</Button>
    {/* <Media>
      <Media left href="#">
        <Media object data-src="holder.js/64x64" alt="Generic placeholder image" />
      </Media>
      <Media body>
        <Media heading>
          Media heading
        </Media>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
      </Media>
    </Media> */}
  </ListGroupItem>
)

export default CartItem
