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
  Button
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
      cartOpen: false
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
    console.log('closing cart')
    this.setState({
      cartOpen: false
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
              <NavItem>
                <NavLink style={linkStyle} to="/">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={linkStyle} to="/beers">
                  Beers
                </NavLink>
              </NavItem>
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

              <NavItem>
                {/* <NavLink style={linkStyle} to="/cart" >
                  Cart
                </NavLink> */}
                <Button color="danger" onClick={this.openCart}>
                  Cart
                </Button>
              </NavItem>

              <NavItem>
                <NavLink style={linkStyle} to="/login">
                  Login
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink style={linkStyle} to="/signup">
                  Sign Up
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

// class Navbar = ({handleClick, isLoggedIn}) => (
//   <div>
//     <h1>BOILERMAKER</h1>
//     <nav>
//       {isLoggedIn ? (
//         <div>
//           {/* The navbar will show these links after you log in */}
//           <Link to="/home">Home</Link>
//           <a href="#" onClick={handleClick}>
//             Logout
//           </a>
//         </div>
//       ) : (
//         <div>
//           {/* The navbar will show these links before you log in */}
//           <Link to="/login">Login</Link>
//           <Link to="/signup">Sign Up</Link>
//         </div>
//       )}
//     </nav>
//     <hr />
//   </div>
// )

/**
 * CONTAINER
 */
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
