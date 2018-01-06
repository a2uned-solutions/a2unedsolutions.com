import React, { Component } from 'react';
import logo from './images/a2uned_solutions_logo.svg';
import './App.css';

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
                <span className="c-secondary-text">Web</span> Applications
                <span className="block">
                    Dapps
                    <span className="c-secondary-text">
                        <span className="thin"> &amp; </span>
                        Blockchain
                    </span>
                </span>
                <span className="small-title-caps align-right">Technology</span>
            </h1>
        </section>
        <section id="intro">
            <aside className="content">
                <h2>Growing with Decentralized Applications</h2>
                <p>With the rise of Bitcoin and the Ethereum Network, we believe the disruptive power of blockchain technology has just begun. <em>Our goal</em> is to create engaging and accessible user interfaces that seamlessly connect with back-end API’s. Many of our projects will be built on decentralized networks, utilize blockchain technology, and work with crytpocurrencies.</p>
            </aside>
        </section>
        <section id="techstack">
            <h2>User Experience <span className="thin">+</span> Full Stack Development</h2>
        </section>
        <section className="content-bottom">
            <ul className="no-list">
                <li>&lt;- Contact</li>
                <li>&lt;- Connect</li>
                <li>&nbsp;</li>
            </ul>
        </section>
        <footer>
            <ul className="connect no-list">
                <li>
                    <a href="https://t.me/a2uned" target="_blank" rel="noopener noreferrer" title="Telegram">
                        <i className="fa fa-telegram" aria-hidden="true"></i>
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/a2uned" target="_blank" rel="noopener noreferrer" title="Twitter">
                        <i className="fa fa-twitter-square" aria-hidden="true"></i>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/a2uned-solutions" target="_blank" rel="noopener noreferrer" title="GitHub">
                        <i className="fa fa-github" aria-hidden="true"></i>
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
