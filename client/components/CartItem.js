import React from 'react'
import {Button, ListGroupItem, Image} from 'reactstrap'

const CartItem = props => (
  <ListGroupItem>
    {props.order.beer.name}
    {props.order.beer.price}
    {props.order.beer.quantity}
    {props.order.beer.packSize}
    {/* <Image src={props.order.beer.imageUrl} /> */}
    {props.order.beer.beerStyle.name}
  </ListGroupItem>
)

export default CartItem
