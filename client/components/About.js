import React, {Component} from 'react'
import {Button} from 'reactstrap'
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
              src="https://www.videvo.net/videvo_files/converted/2017_09/preview/170804_B_Lombok_087.mp444011.mp4"
              type="video/mp4"
            />
            <source
              src="https://www.videvo.net/videvo_files/converted/2017_09/preview/170804_B_Lombok_087.mp444011.webm"
              type="video/webm"
            />
            <source
              src="https://static.videezy.com/system/resources/previews/000/004/425/original/Light_Beer.mp4"
              type="video/mp4"
            />
            <source
              src="https://static.videezy.com/system/resources/previews/000/004/425/original/Light_Beer.mp4"
              type="video/ogg"
            />
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
              We are a group of beer lovers that started this online store in
              2019. After realizing the smaller independent breweries are not
              getting the attention they deserve, we set out to bring a handful
              craft beer to all beer drinkers.
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
