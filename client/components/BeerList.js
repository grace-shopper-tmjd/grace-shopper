import React, {Component} from 'react'
// import SingleBeer from './SingleBeer'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  InputGroup,
  Input,
  InputGroupAddon,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Spinner
} from 'reactstrap'

import {fetchAllBeers} from '../actions/index'

class BeerList extends Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      beers: [],
      dropdownOpen: false,
      searchTerm: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.filteredBeers = this.filteredBeers.bind(this)
  }

  async componentDidMount() {
    await this.props.getAllBeers()
    this.setState({
      beers: this.props.beers
    })
    console.log('hello', this.state.beers)
  }

  handleInputChange(event) {
    event.target.value
      ? this.setState({searchTerm: event.target.value})
      : this.setState({searchTerm: ''})
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    })
  }

  filteredBeers({searchTerm, beers}) {
    return beers.filter(beer => {
      return (
        beer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        beer.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    })
  }
  render() {
    const marginTBStyle = {
      marginTop: '2rem',
      marginBottom: '2rem'
    }
    const marginLStyle = {
      marginLeft: '2rem'
    }

    const {beers} = this.props
    if (!beers) return <Spinner color="primary" />
    // let filteredBeers = this.state.beers.filter(beer => beer.name.toLowerCase().indexOf(this.state.searchString.toLowerCase()) !== -1);
    return (
      <div>
        <Container fluid>
          <Row style={marginTBStyle}>
            <Col md="12">
              <InputGroup>
                <InputGroupAddon addonType="prepend">Filter</InputGroupAddon>
                <Input
                  name="searchString"
                  placeholder="search"
                  onChange={this.handleInputChange}
                  value={this.state.searchString}
                />
                <ButtonDropdown
                  isOpen={this.state.dropdownOpen}
                  toggle={this.toggle}
                  style={marginLStyle}
                >
                  <DropdownToggle caret size="md">
                    Sort by
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                  </DropdownMenu>
                </ButtonDropdown>
              </InputGroup>
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <Row>
            {this.filteredBeers(this.state).map(
              ({id, imageUrl, name, brand, price}, i) => {
                return (
                  <Col sm={3} key={i}>
                    <Card>
                      <CardImg top width="100%" src={imageUrl} alt={name} />
                      <CardBody body className="text-center">
                        <CardTitle tag="h4">{name}</CardTitle>
                        <CardSubtitle>{brand}</CardSubtitle>
                        <CardText>Price: {price}</CardText>
                        <Link to={`/beers/${id}`}>
                          <Button color="secondary" size="lg">
                            View
                          </Button>
                        </Link>
                      </CardBody>
                    </Card>
                  </Col>
                )
              }
            )}
          </Row>
        </Container>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    beers: state.beers.beers
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllBeers: () => dispatch(fetchAllBeers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BeerList)

// export default BeerList;
