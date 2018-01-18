import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import WalletAddresses from './components/WalletAddresses';

import logo from './images/a2uned_solutions_logo.svg';
import logoIcon from './images/a2uned_solutions_icon.svg';
import nathan from './images/nathan.jpg';
import micah from './images/micah.jpg';

import './App.css';
import './Responsive.css';

class App extends Component {

  render() {
    return (
      <div className="app">
        <header className="header">
          <img src={logo} className="logo" alt="A2uned Solutions" />
        </header>
        <section id="hero">
            <h1>
                <span className="small-title-caps">We design &amp; develop</span>
                <Fade left delay={650} duration={1500}>
                    <span className="c-secondary-text">Web</span> Applications
                    <span className="block">
                        Dapps
                        <span className="c-secondary-text">
                            <span className="thin"> &amp; </span>
                            Blockchain
                        </span>
                    </span>
                </Fade>
                <span className="small-title-caps align-right">Technology</span>
            </h1>
        </section>
        <section id="intro">
            <aside className="content">
                <h2>Growing with Decentralized Applications</h2>
                <p>With the rise of Bitcoin and the Ethereum Network, we believe the disruptive power of blockchain technology has just begun. <em>Our goal</em> is to create engaging and accessible user interfaces that seamlessly connect with back-end API’s. Many of our projects will be built on decentralized networks, utilize blockchain technology, and work with cryptocurrencies.</p>
            </aside>
        </section>
        <section id="techstack">
            <h2>User Experience <span className="thin c-secondary-text">+</span> Full Stack Development</h2>
        </section>
        <section id="team">
            <h2>Our Team</h2>
            <p>Experienced Designers & Developers from the ecommerce, web application, and content management system realm. <em>We're excited to dive head first</em> into the blockchain &amp; cryptocurrency space and have fun learning as we go.</p>
            <ul className="team-list no-list">
                <li>
                    <div className="member-image">
                        <img src={nathan} alt="Nathan Olmstead" />
                    </div>
                    <div className="member-info">
                        <h3>Nathan Olmstead</h3>
                        <h4>Partner</h4>
                        <Fade bottom cascade tag="ul" className="no-list">
                            <li>User Interface Developer</li>
                            <li>User Experience Designer</li>
                        </Fade>
                        <ul className="social">
                            <li>
                                <a href="https://www.linkedin.com/in/nathanolmstead/" target="_blank" rel="noopener noreferrer"  title="LinkedIn">
                                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <div className="member-image">
                        <img src={micah} alt="Micah Lunt" />
                    </div>
                    <div className="member-info">
                        <h3>Micah Lunt</h3>
                        <h4>Partner</h4>
                        <Fade bottom cascade tag="ul" className="no-list">
                            <li>Software Engineer</li>
                            <li>System Administrator</li>
                        </Fade>
                        <ul className="social">
                            <li>
                                <a href="https://www.linkedin.com/in/micah-lunt-8322a752/" target="_blank" rel="noopener noreferrer"  title="LinkedIn">
                                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </section>

        <WalletAddresses/>

        <section className="content-bottom vcard h-card">
            <p>
                <img src={logoIcon} className="logo-icon" alt="A2uned Solutions" />
                <span className="org p-org">A2uned Solutions LLC</span>
                <span className="adr location"> /&nbsp;
                    <span className="region p-region">Michigan</span> /&nbsp;
                    <span className="country-name p-country-name">USA</span>
                </span>
            </p>
        </section>
        <footer>
            <ul className="connect no-list">
                <li>
                    <a href="https://t.me/a2uned" target="_blank" rel="noopener noreferrer" title="Telegram">
                        <i className="fa fa-telegram" aria-hidden="true"></i>
                        <span className="connect-info">
                            <strong>Telegram </strong>/
                            a2uned
                        </span>
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/a2uned" target="_blank" rel="noopener noreferrer" title="Twitter">
                        <i className="fa fa-twitter-square" aria-hidden="true"></i>
                        <span className="connect-info">
                            <strong>Twitter </strong>/
                            @a2uned
                        </span>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/a2uned-solutions" target="_blank" rel="noopener noreferrer" title="GitHub">
                        <i className="fa fa-github" aria-hidden="true"></i>
                        <span className="connect-info">
                            <strong>GitHub </strong>/
                            a2uned-solutions
                        </span>
                    </a>
                </li>
                {/*<li>*/}
                    {/*<a href="" target="_blank">*/}
                        {/*<i className="fa fa-linkedin-square" target="_blank" rel="noopener noreferrer"  aria-hidden="true"></i>*/}
                    {/*</a>*/}
                {/*</li>*/}
            </ul>
        </footer>
      </div>
    );
  }
}

export default App;
