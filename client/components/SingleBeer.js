import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Container, Row, Col, Button, Input, Label, FormGroup} from 'reactstrap'

import {fetchSingleBeer} from '../actions/index'

class SingleBeer extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    this.props.getSingleBeer(this.props.match.params.beerId)
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
    getSingleBeer: id => dispatch(fetchSingleBeer(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleBeer)
