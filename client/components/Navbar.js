import React, {Component} from 'react'
// import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {NavLink, withRouter} from 'react-router-dom'
import Cart from './Cart'
import {fetchUserCart, logout} from '../actions/index'
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
      cartItems: []
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
    const {userId} = this.props
    await this.props.getUserCart(userId)
    this.setState({
      cartItems: this.props.cartItems
    })
  }

  render() {
    let cartQuantity = 0
    this.state.cartItems.map(item => {
      cartQuantity += item.quantity
    })

    return (
      <div>
        {this.state.cartOpen ? (
          <Cart closeCart={this.closeCart} isOpen={this.state.cartOpen} />
        ) : null}

        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">
            <div className="d-flex align-items-center">
              <h2>Tops Hops</h2>
              <img
                className="ml-2"
                src="https://img.icons8.com/ios/30/000000/beer-filled.png"
              />
            </div>
          </NavbarBrand>
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
                <a onClick={this.openCart}>
                  {/* Cart | {cartQuantity} */}
                  <div className="d-flex align-items-center justify-content-center">
                    <div>
                      <img src="https://img.icons8.com/ios-glyphs/30/000000/shopping-cart.png" />
                    </div>
                  </div>
                </a>
              </NavItem>

              {/* link to login page */}
              {this.props.isLoggedIn ? (
                <>
                  <NavItem>
                    <NavLink
                      style={linkStyle}
                      to={`/orderhistory/${this.props.userId}`}
                    >
                      Account
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      style={linkStyle}
                      to="/logout"
                      onClick={this.props.logOutUser}
                    >
                      Logout
                    </NavLink>
                  </NavItem>
                </>
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
    cartItems: state.orders.cartItems,
    userId: state.user.id
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUserCart: userID => dispatch(fetchUserCart(userID)),
    logOutUser: () => dispatch(logout())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar))
