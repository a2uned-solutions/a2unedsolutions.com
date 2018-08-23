import React, { Component } from 'react';
import history from '../utils/history';
import hero from '../images/hero.jpg';
import Button from '@material-ui/core/Button';

import michigan from '../images/michigan.svg';

class Home extends Component {

  state = {
    animationCount: 3
  };

  componentDidMount() {
    this.intervalId = setInterval(this.timer.bind(this), 700);
  }
  componentWillUnmount(){
    clearInterval(this.intervalId);
  }

  timer() {
    this.setState({
      animationCount: this.state.animationCount - 1
    })
    if(this.state.animationCount < 1) {
      clearInterval(this.intervalId);
    }
  }

  handleServicesClick() {
    history.push('/services')
  }

  render() {

    const { animationCount } = this.state;
    const { toggleDrawer } = this.props;

    return (
      <section className={`home animation-step-${animationCount}`} id="main-content">
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
              <p><strong>Yes.</strong> We build websites that behave like apps. Single page applications (SPA) built with the latest front-end technology. <strong>Take your Users Experiences to the Next Level!</strong></p>
              <Button variant="contained" color="primary" onClick={toggleDrawer('contactDrawer', true)}>How can we help you</Button>
            </li>
            <li>
              <h2>So Much More</h2>
              <p><em>Development is only part of our process.</em> Here are a few of the services that our grizzled veteran team provides:</p>
              <ul>
                <li>Branding Design</li>
                <li>Search Engine Optimization (SEO)</li>
                <li>User Interface Specifications</li>
              </ul>
              <Button variant="contained" color="secondary" onClick={this.handleServicesClick}>All of our services</Button>
            </li>
            <li>
              <h2>Take Control of Your Content</h2>
              <p>We build custom content management systems that make it easier to manage your online presence. We also provide services that make your content work for you, because in the end <strong>content always has been and always will be King.</strong></p>
              <i className="fas fa-chess-king"></i>
            </li>
          </ul>
        </div>
        <div className="about-intro">
          <div className="about-container">
            <div className="content-left">
              <div className="rivets">
                <div className="seal">
                  <div className="type">
                    <h3>Founded In</h3>
                    <em>2017</em>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-right">
              <h2>New company. <strong>Grown Up Experience.</strong></h2>
              <p>Over a decade of experience designing and developing web applications. Our team has worked with many large corporations with recognizable brands. The majority of our time was spent on large scale eCommerce builds.</p>
              <p>Our focus is on memorable user experiences and clean design. We've worked with enough platforms and frameworks over the years to be comfortable in any situation.</p>
              <h3 className="made-in-michigan">
                <strong>
                  <span>Proudly Made In Michigan</span>
                  <img src={michigan} alt="Ann Arbor, Michigan" />
                </strong>
              </h3>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
