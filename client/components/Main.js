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

export default class Main extends Component {
  render() {
    const divStyle = {
      padding: '0',
      color: 'white',
      backgroundImage: `url('https://images.unsplash.com/photo-1518176258769-f227c798150e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1789&q=80')`,
      backgroundSize: '100%',
      height: '100vh',
      backgroundRepeat: 'no-repeat'
    }

    const flexStyle = {
      height: '90vh'
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
      // <Container fluid>
      //     <Card inverse>
      //         <CardImg src="https://images.unsplash.com/photo-1518176258769-f227c798150e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1789&q=80" alt="Card image cap" />
      //         <CardImgOverlay>
      //             <CardTitle>Tops Hops</CardTitle>
      //             <CardText>This is a modified jumbotron that occupies the entire horizontal space of its parent.</CardText>
      //             <Button>Explore Our Beers</Button>
      //         </CardImgOverlay>

      //     </Card>
      // </Container>
      <Jumbotron fluid style={divStyle}>
        <div
          className="d-flex justify-content-center align-items-center flex-column"
          style={flexStyle}
        >
          <h1 className="display-1">Tops Hops</h1>
          <h2 className="lead" style={subTitleStyle}>
            Welcome to our hand-picked craft beer store!
          </h2>
          <hr className="my-2" />
          <p className="text-center h3 lead">
            We have a team of beer experts that help curate a selection of beer
            every month.
          </p>
          <p className="lead text-center h3" margin="10px">
            <Button color="primary" style={buttonStyle}>
              <Link to="/beers" style={linkStyle}>
                Explore Our Beers
              </Link>
            </Button>
          </p>
        </div>
      </Jumbotron>
    )
  }
}
