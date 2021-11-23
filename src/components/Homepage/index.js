import React, { Component } from 'react';
import './Homepage.css';
import Particles from '../ParticleComponent';

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <Particles />
        {/* <div className="top-title">
          <h1>WELCOME TO </h1>
          <h2>Culture Share</h2>
        </div> */}
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
      </div>
    );
  }
}

export default Home;
