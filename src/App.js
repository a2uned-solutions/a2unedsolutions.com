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
                <span className="small">We design &amp; develop</span>
                <span className="dark">Web</span> Applications
                <span className="dark">
                    <span className="thin"> &amp; </span>
                    Blockchain
                </span>
                <span className="small">Technology</span>
            </h1>
        </section>
        <section id="intro">
            <aside className="content">
                <h2>Growing with Decentralized Applications</h2>
                <p>With the rise of Bitcoin and the Ethereum Network, we believe the disruptive power of blockchain technology has just begun. Our goal is to create engaging and accessible user interfaces that seamlessly connect with back-end API’s. Many of our projects will be built on decentralized networks, utilize blockchain technology, and work with crytpocurrencies.</p>
            </aside>
        </section>
      </div>
    );
  }
}

export default App;
