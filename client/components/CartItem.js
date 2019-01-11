import React from 'react'
import {Container, Row, Col, Button, ListGroupItem, Image} from 'reactstrap'

const CartItem = props => (
  <ListGroupItem>
    <Container>
      <Row>
        <Col>{props.order.beer.name}</Col>
        <Col>{props.order.beer.price}</Col>
      </Row>
      <Row>
        <Col>{props.order.beer.quantity}</Col>
        <Col>{props.order.beer.packSize}</Col>
      </Row>
      <Row>
        <Col>{props.order.beer.beerStyle.name}</Col>
        <Col>
          <img style={{size: '20%'}} src={props.order.beer.imageUrl} />
        </Col>
      </Row>
      <Button color="primary" />
    </Container>
  </ListGroupItem>
)

export default CartItem
