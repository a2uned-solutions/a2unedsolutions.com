import React, { Component } from 'react';
import hero from '../images/hero.jpg';

class Home extends Component {
  render() {
    return (
      <section className="home">
        <div className="hero">
          <h1>
            <span className="title"><span className="thin">We</span> Design <span className="thin small">+</span> Develop</span>
            <span className="sub-title">Interfaces <span className="thin">that</span> <span className="action">Engage</span></span>
          </h1>
          <img src={hero} className="hero-img" alt="Michigan Web Design" />
        </div>
        <div className="service-intro">

        </div>
      </section>
    );
  }
}

export default Home;
