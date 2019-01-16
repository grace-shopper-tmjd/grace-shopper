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
import '../css/componentStyle.css'

export default class Main extends Component {
  render() {
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
      <section className="section-stories">
        <div className="bg-video">
          <video className="bg-video__content" autoPlay muted loop>
            <source
              src={`https://player.vimeo.com/external/121536139.hd.mp4?s=82ac8e489dd3f70779ccdeec1735512390b208b0&amp;profile_id=119&amp;oauth2_token_id=57447761&amp;download=1`}
              type="video/mp4"
            />
            <source
              src={`https://player.vimeo.com/external/121536139.hd.mp4?s=82ac8e489dd3f70779ccdeec1735512390b208b0&amp;profile_id=119&amp;oauth2_token_id=57447761&amp;download=1`}
              type="video/webm"
            />
            {/* <source src={`https://www.videvo.net/videvo_files/converted/2017_09/preview/170804_B_Lombok_087.mp444011.mp4`} type="video/mp4" />
					<source src={`https://www.videvo.net/videvo_files/converted/2017_09/preview/170804_B_Lombok_087.mp444011.webm`} type="video/webm" /> */}
            {/* <source src={`https://static.videezy.com/system/resources/previews/000/004/425/original/Light_Beer.mp4`} type="video/mp4" />
						<source src={`https://static.videezy.com/system/resources/previews/000/004/425/original/Light_Beer.mp4`} type="video/ogg" /> */}
          </video>
        </div>
        <div>
          <div className="d-flex justify-content-center align-items-center flex-column text-white">
            <h1 className="display-1 lead">Tops Hops</h1>
            <h2 className="lead" style={subTitleStyle}>
              Welcome to our hand-picked craft beer store!
            </h2>
            <hr className="my-2" />
            <p className="text-center h3 lead">
              We have a team of beer experts that help curate a selection of
              beer every month.
            </p>
            <p className="lead text-center h3" margin="10px">
              <Button color="primary" style={buttonStyle}>
                <Link to="/beers" style={linkStyle}>
                  Explore Our Beers
                </Link>
              </Button>
            </p>
          </div>
        </div>
      </section>
    )
  }
}
