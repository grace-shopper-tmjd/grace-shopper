import React, {Component} from 'react'
import {
  Container,
  Jumbotron,
  Card,
  CardTitle,
  CardText,
  CardImg,
  CardImgOverlay,
  Button
} from 'reactstrap'
import {Link} from 'react-router-dom'

export default class About extends Component {
  render() {
    const divStyle = {
      padding: '0',
      color: 'white',
      backgroundImage: `url('https://images.unsplash.com/photo-1518176258769-f227c798150e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1789&q=80')`,
      backgroundSize: '100%',
      height: '100vh',
      width: '100vw',
      backgroundRepeat: 'no-repeat'
    }

    const flexStyle = {
      height: '100vh',
      width: '100vw'
    }

    const subTitleStyle = {
      fontSize: '30px',
      margin: '1.5rem 0'
    }

    const buttonStyle = {
      margin: '1.5rem 0',
      fontSize: '25px',
      backgroundColor: 'rgba(255,255,255, 0.2)',
      border: '2px solid white'
    }

    const linkStyle = {
      color: 'white',
      textDecoration: 'none'
    }

    return (
      <Jumbotron fluid style={divStyle}>
        <div
          className="d-flex justify-content-center flex-column p-5"
          style={flexStyle}
        >
          <h3 className="lead text-center" style={subTitleStyle}>
            We are a group of beer heads that started this online store in 2019.
            After realizing the smaller independent breweries are not getting
            the attention they deserve, we've set out to bring a handful of hand
            selected craft beer to cater all beer drinkers.
          </h3>
          <hr className="my-2" />
          <p className="text-center h3 lead">
            We are 4 professionally trained beer connoisseurs, that helped
            curate the beers that we sell on our webstore.
          </p>
          <p className="lead text-center h3">
            <Button color="primary" style={buttonStyle}>
              <Link to="/" style={linkStyle}>
                Back to Home
              </Link>
            </Button>
          </p>
        </div>
      </Jumbotron>
    )
  }
}
