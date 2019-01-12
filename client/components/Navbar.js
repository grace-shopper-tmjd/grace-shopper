import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import {logout} from '../store'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
  Dropdown,
  Link
} from 'reactstrap'
import Cart from './Cart'

const linkStyle = {
  color: 'rgba(0,0,0,.9)',
  fontSize: '1.25rem',
  textDecoration: 'none'
}

class NavBar extends Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
      cartOpen: false,
      beerMenu: false,
      beerStyle: false,
      packSize: false
    }
    this.openCart = this.openCart.bind(this)
    this.closeCart = this.closeCart.bind(this)
    this.toggleBeerMenu = this.toggleBeerMenu.bind(this)
    this.toggleBeerStyle = this.toggleBeerStyle.bind(this)
    this.togglePackSize = this.togglePackSize.bind(this)
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  openCart() {
    this.setState({
      cartOpen: true
    })
  }

  closeCart() {
    this.setState({
      cartOpen: false
    })
  }

  toggleBeerMenu() {
    this.setState({
      beerMenu: !this.state.beerMenu
    })
  }

  toggleBeerStyle() {
    console.log('toggling beer style')
    this.setState({
      beerStyle: !this.state.beerStyle
    })
  }

  togglePackSize() {
    console.log('toggling pack size')
    this.setState({
      packSize: !this.state.packSize
    })
  }

  render() {
    return (
      <div>
        {this.state.cartOpen ? (
          <Cart closeCart={this.closeCart} isOpen={this.state.cartOpen} />
        ) : null}
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Tops Hops</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {/* link to home */}
              <NavItem>
                <NavLink style={linkStyle} to="/">
                  Home
                </NavLink>
              </NavItem>

              {/* start of beers menu item */}
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle style={linkStyle} nav caret>
                  Beers
                </DropdownToggle>

                <DropdownMenu>
                  {/* all beers dropdown menu item */}
                  <DropdownItem tag="a" href="/beers">
                    All Beers
                  </DropdownItem>

                  {/* by beer style menu item */}
                  <DropdownItem>
                    <Dropdown
                      direction="right"
                      isOpen={this.state.beerStyle}
                      toggle={() => this.toggleBeerStyle}
                    >
                      <DropdownToggle caret>By Beer Style</DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem>1</DropdownItem>
                        <DropdownItem>2</DropdownItem>
                        <DropdownItem>3</DropdownItem>
                        <DropdownItem>4</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </DropdownItem>

                  {/* by pack size menu */}
                  <DropdownItem>
                    <UncontrolledDropdown
                      direction="right"
                      isOpen={this.state.packSize}
                    >
                      <DropdownToggle caret>By Pack Size</DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem>a</DropdownItem>
                        <DropdownItem>b</DropdownItem>
                        <DropdownItem>c</DropdownItem>
                        <DropdownItem>d</DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              {/* link to about */}
              <NavItem>
                <NavLink style={linkStyle} to="/about">
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={linkStyle} to="/contact">
                  Contact
                </NavLink>
              </NavItem>

              {/* link to cart */}
              <NavItem>
                <Button color="danger" onClick={this.openCart}>
                  Cart
                </Button>
              </NavItem>

              {/* link to login page */}
              <NavItem>
                <NavLink style={linkStyle} to="/signup">
                  Log in
                </NavLink>
              </NavItem>

              {/* end of navbar */}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(NavBar)

/**
 * PROP TYPES
 */
// Navbar.propTypes = {
//   handleClick: PropTypes.func.isRequired,
//   isLoggedIn: PropTypes.bool.isRequired
// }
