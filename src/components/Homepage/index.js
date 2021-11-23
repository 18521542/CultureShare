import React, { Component } from 'react';
import './Homepage.css';
import Particles from '../ParticleComponent';

class Home extends Component {
  render() {
    return (
      <div class="homepage-container">
        <Particles />
        <section class="home-container">
          {/* <Particles /> */}
          <div class="stage">
            <div class="layer"></div>
            <div class="layer"></div>
            <div class="layer"></div>
            <div class="layer"></div>
            <div class="layer"></div>
            <div class="layer"></div>
            <div class="layer"></div>
            <div class="layer"></div>
            <div class="layer"></div>
            <div class="layer"></div>
            <div class="layer"></div>
            <div class="layer"></div>
            <div class="layer"></div>
            <div class="layer"></div>
            <div class="layer"></div>
            <div class="layer"></div>
            <div class="layer"></div>
            <div class="layer"></div>
            <div class="layer"></div>
            <div class="layer"></div>
          </div>
        </section>
        <section class="main-container">
          <div class="header-content">
            <h1>Let's go to explore the new culture</h1>
            <p>This is the paragraph</p>
          </div>
          <div class="image-content">
            <div class="first-column">
              <a>
                <img id="img1" src="/img/france.jpeg"></img>
                <span>This is image 1</span>
              </a>
              <a>
                <img id="img2" src="./img/greece.jpeg"></img>
                <span>This is image 2</span>
              </a>
              <a>
                <img id="img3" src="./img/italy.jpeg"></img>
                <span>This is image 3</span>
              </a>
            </div>
            <div class="second-column">
              <a>
                <img id="img4" src="./img/vietnam.jpeg"></img>
                <span>This is image 4</span>
              </a>
              <a>
                <img id="img5" src="./img/japan.jpeg"></img>
                <span>This is image 5</span>
              </a>
            </div>
            <div class="third-column">
              <a>
                <img id="img6" src="./img/singapore.jpeg"></img>
                <span>This is image 6</span>
              </a>
              <a>
                <img id="img7" src="./img/thailan.jpeg"></img>
                <span>This is image 7</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
