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
          <ul>
            <li>
              <h2>Websites or Web Applications?</h2>
              <p><strong>Yes.</strong> We build websites that behave like apps. Single page applications (SPA) built with the latest front-end technology. <strong>Take your users experiences to the next level.</strong></p>
              <p className="cta">
                <a href="#">Drop us a line</a>
              </p>
            </li>
            <li>
              <h2>So Much More</h2>
              <p><em>Development is only part of the process.</em> Here are a few of the services that our grizzled veteran team provides:</p>
              <ul>
                <li>Branding Design</li>
                <li>Search Engine Optimization (SEO) Audit</li>
                <li>User Interface Specifications</li>
              </ul>
              <p className="cta cta-secondary">
                <a href="#">Checkout the rest</a>
              </p>
            </li>
            <li>
              <h2>Take Control of Your Content</h2>
              <p>We build custom content management systems that make it easier to manage your online presence. We also provide services that make your content work for you, because in the end <strong>content always has been and always will be King.</strong></p>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Home;
