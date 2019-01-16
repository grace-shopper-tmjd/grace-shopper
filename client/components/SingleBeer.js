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
    this.state = {
      beer: {},
      quantity: 1
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.props.getSingleBeer(this.props.match.params.beerId)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.addSingleBeer(
      {
        beerId: this.props.beer.id,
        quantity: this.state.quantity,
        price: parseFloat(
          Math.round(this.props.beer.price * this.state.quantity * 100) / 100
        ).toFixed(2)
      },
      this.props.userId
    )
  }

  render() {
    return (
      <Container>
        <Row>
          <Col lg={6}>
            <img
              className="allBeerImages"
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
                <Label for="exampleSelect">Quantity</Label>
                <Input
                  type="select"
                  name="quantity"
                  id="exampleSelect"
                  onChange={this.handleChange}
                >
                  <option key={1} value={1}>
                    1
                  </option>
                  <option key={2} value={2}>
                    2
                  </option>
                  <option key={3} value={3}>
                    3
                  </option>
                  <option key={4} value={4}>
                    4
                  </option>
                  <option key={5} value={5}>
                    5
                  </option>
                </Input>
              </FormGroup>
            </Form>
            <Button onClick={this.handleSubmit}>Add To Cart</Button>
            <h4 className="mt-5">Product Description</h4>
            <p>{this.props.beer.description}</p>
          </Col>
        </Row>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    beer: state.beers.selectedBeer,
    userId: state.user.id
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getSingleBeer: id => dispatch(fetchSingleBeer(id)),
    addSingleBeer: (beer, userID) => dispatch(addToCart(beer, userID))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleBeer)
