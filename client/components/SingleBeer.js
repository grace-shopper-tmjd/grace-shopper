import React, {Component} from 'react'

import {Container, Row, Col, Button, Input, Label, FormGroup} from 'reactstrap'

class SingleBeer extends Component {
  render() {
    const beer = {
      name: 'Bud Light® Beer - 30pk / 12oz Cans',
      brand: 'Bud Light',
      description:
        'Bud Light is brewed using a blend of premium aroma hop varieties, both American-grown and imported, and a combination of barley malts and rice. Its superior drinkability and refreshing flavormakesit the worlds favorite light beer.',
      inventory: 30,
      imageUrl:
        'https://target.scene7.com/is/image/Target/GUEST_6bf09092-e0c3-43a9-a5e2-777a26287c8b?wid=1464&hei=1464&fmt=webp',
      type: 'IPA',
      price: 21.99,
      ABV: 2,
      packSize: 30
    }
    const {id, imageUrl, name, brand, price, description} = beer
    return (
      <Container>
        <Row>
          <Col lg={6}>
            <img width="100%" src={imageUrl} alt="Responsive image" />
          </Col>
          <Col lg={6}>
            <h3>{name}</h3>
            <h4>{brand}</h4>
            <h5>Price: {price}</h5>
            <FormGroup>
              <Label for="exampleSelect">Pack Size</Label>
              <Input type="select" name="select" id="exampleSelect">
                <option>1</option>
                <option>6 PK</option>
                <option>12 PK</option>
                <option>24 PK</option>
                <option>36 PK</option>
              </Input>
              <Label for="exampleSelect">Quantity</Label>
              <Input type="select" name="select" id="exampleSelect">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Input>
            </FormGroup>
            <Button>Add To Cart</Button>
            <h4>Product Description</h4>
            <p>{description}</p>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default SingleBeer
