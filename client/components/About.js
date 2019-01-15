// import React from 'react'
// import {Media} from 'reactstrap'

// const About = () => {
//   return (

//     <Media>

//       <Media left href="#">
//         <Media
//           object
//           src="https://images.unsplash.com/photo-1516458464372-eea4ab222b31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=333&q=40"
//           alt="Generic placeholder image"
//         />
//       </Media>
//       <Media body>
//         <Media heading>About Us</Media>
//         <p>
//         We are a group of beer heads that started this online store in 2019.
//         After realizing the smaller independent breweries are not getting the attention they deserve, we've
//         set out to bring a handful of hand selected craft beer to cater all beer drinkers.

//         </p>
//         <p>

//         We have 3 profesionally trained beer connoisseurs, to help curate the beers that are sold on our webstore.
//         </p>

//       </Media>
//     </Media>
//   )
// }

// export default About

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
          <h3 className="lead" style={subTitleStyle}>
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
