import React, { Component } from 'react';
import './Homepage.css';
// import Particles from '../ParticleComponent';

class Home extends Component {
  render() {
    return (
      <div class="homepage-container">
        <section class="main-container">
          {/* <div class="header-content">
            <h1>Let's go to explore the new culture</h1>
            <p>This is the paragraph</p>
          </div> */}
          {/* <Particles /> */}
          <div class="image-content">
            <div class="item-content small-item-content">
              <a href="/blog1" class="faded">
                <img
                  class="small-image"
                  id="img1"
                  src="/img/france.jpeg"
                  alt="France"
                ></img>
                <span>France</span>
              </a>
            </div>
            <div class="item-content small-item-content">
              <a href="/blog2" class="faded">
                <img
                  class="small-image"
                  id="img2"
                  src="./img/greece.jpeg"
                  alt="Greece"
                ></img>
                <span>Greece</span>
              </a>
            </div>
            <div class="item-content small-item-content">
              <a href="/blog3" class="faded">
                <img
                  class="small-image"
                  id="img3"
                  src="./img/italy.jpeg"
                  alt="Italy"
                ></img>
                <span>Italy</span>
              </a>
            </div>
            <div class="item-content big-item-content">
              <a href="/blog4" class="faded">
                <img
                  class="large-image"
                  id="img4"
                  src="./img/vietnam.jpeg"
                  alt="Vietnam"
                ></img>
                <span>Viet Nam</span>
              </a>
            </div>
            <div class="item-content small-item-content">
              <a href="/blog5" class="faded">
                <img
                  class="small-image"
                  id="img5"
                  src="./img/japan.jpeg"
                  alt="Japan"
                ></img>
                <span>Japan</span>
              </a>
            </div>
            <div class="item-content small-item-content">
              <a href="/blog6" class="faded">
                <img
                  class="small-image"
                  id="img6"
                  src="./img/singapore.jpeg"
                  alt="Singapore"
                ></img>
                <span>Singapore</span>
              </a>
            </div>
            <div class="item-content big-item-content">
              <a href="./blog7" class="faded">
                <img
                  class="large-image"
                  id="img7"
                  src="./img/thailan.jpeg"
                  alt="Thailan"
                ></img>
                <span>Thailand</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;

// <section class="home-container">
//   {/* <Particles /> */}
//   <div class="stage">
//     <div class="layer"></div>
//     <div class="layer"></div>
//     <div class="layer"></div>
//     <div class="layer"></div>
//     <div class="layer"></div>
//     <div class="layer"></div>
//     <div class="layer"></div>
//     <div class="layer"></div>
//     <div class="layer"></div>
//     <div class="layer"></div>
//     <div class="layer"></div>
//     <div class="layer"></div>
//     <div class="layer"></div>
//     <div class="layer"></div>
//     <div class="layer"></div>
//     <div class="layer"></div>
//     <div class="layer"></div>
//     <div class="layer"></div>
//     <div class="layer"></div>
//     <div class="layer"></div>
//   </div>
// </section>;
