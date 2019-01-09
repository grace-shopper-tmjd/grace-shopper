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
            This is a simple hero unit, a simple Jumbotron-style component for
            calling extra attention to featured content or information.
          </h2>
          <hr className="my-2" />
          <p className="text-center h3 lead">
            It uses utility classes for typography and spacing to space content
            out within the larger container.
          </p>
          <p className="lead text-center h3">
            <Button color="primary" style={buttonStyle}>
              Explore Our Beers
            </Button>
          </p>
        </div>
      </Jumbotron>
    )
  }
}
