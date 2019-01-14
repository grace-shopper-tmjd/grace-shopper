import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import Cart from './Cart'
import {fetchUserCart, updateCartItem, deleteFromCart} from '../actions/index'
import {me} from '../actions/index'
// import {logout} from '../store'
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
  Button
} from 'reactstrap'

const linkStyle = {
  color: 'rgba(0,0,0,.5)',
  paddingRight: '.5rem',
  paddingLeft: '.5rem',
  textDecoration: 'none',
  display: 'block',
  padding: '.5rem 1rem',
  margin: '1em'
}

class NavBar extends Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
      cartOpen: false,
      cartItems: [],
      cartQuantity: 0
    }
    this.openCart = this.openCart.bind(this)
    this.closeCart = this.closeCart.bind(this)
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

  async componentDidMount() {
    await this.props.getUserCart()
    const userCart = this.props.cartItems
    console.log('got user cart', userCart)
    if (userCart) {
      this.setState({
        cartItems: userCart,
        cartQuantity: userCart.length
      })
    }
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
                <DropdownToggle nav caret>
                  Beers
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem tag={NavLink} to="/beers">
                    All Beers
                  </DropdownItem>
                  <DropdownItem>By Pack Size</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>By Style</DropdownItem>
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
                  Cart | {this.state.cartQuantity}
                </Button>
              </NavItem>

              {/* link to login page */}
              {this.props.isLoggedIn ? (
                <NavItem>
                  <NavLink style={linkStyle} to="/logout">
                    Logout
                  </NavLink>
                </NavItem>
              ) : (
                <NavItem>
                  <NavLink style={linkStyle} to="/login">
                    Login
                  </NavLink>
                </NavItem>
              )}
              {/* end of navbar */}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: !!state.user.id,
    userhey: state.user,
    cartItems: state.orders.cartItems
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUserCart: () => dispatch(fetchUserCart())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  //   handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
