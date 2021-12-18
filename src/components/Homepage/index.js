import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Homepage.scss';
// import Particles from '../ParticleComponent';

class Home extends Component {
  render() {
    return (
      <div className="homepage-container">
        <section className="main-container">
          {/* <div className="header-content">
            <h1>Let's go to explore the new culture</h1>
            <p>This is the paragraph</p>
          </div> */}
          {/* <Particles /> */}
          <div className="image-content">
            <div className="item-content small-item-content">
              <Link to="/france" className="faded">
                <img
                  className="small-image"
                  id="img1"
                  src="/img/france.jpeg"
                  alt="France"
                ></img>
                <span>France</span>
              </Link>
            </div>
            <div className="item-content small-item-content">
              <Link to="/greece" className="faded">
                <img
                  className="small-image"
                  id="img2"
                  src="./img/greece.jpeg"
                  alt="Greece"
                ></img>
                <span>Greece</span>
              </Link>
            </div>
            <div className="item-content small-item-content">
              <Link to="/italy" className="faded">
                <img
                  className="small-image"
                  id="img3"
                  src="./img/italy.jpeg"
                  alt="Italy"
                ></img>
                <span>Italy</span>
              </Link>
            </div>
            <div className="item-content big-item-content">
              <Link to="/vietnam" className="faded">
                <img
                  className="large-image"
                  id="img4"
                  src="./img/vietnam.jpeg"
                  alt="Vietnam"
                ></img>
                <span>Viet Nam</span>
              </Link>
            </div>
            <div className="item-content small-item-content">
              <Link to="/japan" className="faded">
                <img
                  className="small-image"
                  id="img5"
                  src="./img/japan.jpeg"
                  alt="Japan"
                ></img>
                <span>Japan</span>
              </Link>
            </div>
            <div className="item-content small-item-content">
              <Link to="/singapore" className="faded">
                <img
                  className="small-image"
                  id="img6"
                  src="./img/singapore.jpeg"
                  alt="Singapore"
                ></img>
                <span>Singapore</span>
              </Link>
            </div>
            <div className="item-content big-item-content">
              <Link to="/thailand" className="faded">
                <img
                  className="large-image"
                  id="img7"
                  src="./img/thailan.jpeg"
                  alt="Thailan"
                ></img>
                <span>Thailand</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;