import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
  Container,
  Row,
  Col,
  Button,
  Input,
  Label,
  FormGroup,
  Form
} from 'reactstrap'

import {fetchSingleBeer, addToCart} from '../actions/index'

class SingleBeer extends Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   beerId: 0,
    //   quantity: 1,
    //   price: 1
    // }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.props.getSingleBeer(this.props.match.params.beerId)
  }
  handleSubmit() {
    this.props.addSingleBeer({
      beerId: this.props.beer.id,
      quantity: 10,
      price: this.props.beer.price * 10
    })
  }

  render() {
    return (
      <Container>
        <Row>
          <Col lg={6}>
            <img
              width="100%"
              src={this.props.beer.imageUrl}
              alt="Responsive image"
            />
          </Col>
          <Col lg={6}>
            <h3>{this.props.beer.name}</h3>
            <h4>{this.props.beer.brand}</h4>
            <h5>Price: {this.props.beer.price}</h5>
            <Form>
              <FormGroup>
                <Label for="exampleSelect">Pack Size</Label>
                <Input type="select" name="select" id="exampleSelect">
                  <option>1</option>
                  <option>4 PK</option>
                  <option>6 PK</option>
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
            </Form>
            <Button onClick={this.handleSubmit}>Add To Cart</Button>
            <h4>Product Description</h4>
            <p>{this.props.beer.description}</p>
          </Col>
        </Row>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    beer: state.beers.selectedBeer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getSingleBeer: id => dispatch(fetchSingleBeer(id)),
    addSingleBeer: id => dispatch(addToCart(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleBeer)
