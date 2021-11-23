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
          <h1> Hello</h1>
        </section>
      </div>
    );
  }
}

export default Home;
