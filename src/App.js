import React, { Component } from 'react';
import './css/app.css';
import Header from './components/Header';
import Home from './components/Home';
import ContactFrom from './components/ContactForm';

class App extends Component {

  render() {
    return (
      <div className="app">
        <Header />
        <main>
          <Home />
          {/*<ContactFrom />*/}
          {/*<section>*/}
            {/*<h2>Services</h2>*/}
            {/*<ul>*/}
              {/*<li>Engaging User Interfaces</li>*/}
              {/*<li>Custom Content Management</li>*/}
              {/*<li>Search Engine Optimization</li>*/}
            {/*</ul>*/}
            {/*<h3>Deliverables</h3>*/}
            {/*<ul>*/}
              {/*<li>SEO Audit</li>*/}
              {/*<li>Accessibility Audit</li>*/}
            {/*</ul>*/}
            {/*<h4>Heuristic evaluation, user research, personas, competitive analysis. Design: Wireframes, annotations and specifications, sitemap, prototype, user testing, a/b testing</h4>*/}
          {/*</section>*/}
          {/*<section>*/}
            {/*<h2>Clients</h2>*/}
            {/*<ul>*/}
              {/*<li>Lakewares</li>*/}
              {/*<li>Disrupting Nate</li>*/}
              {/*<li>Metzger's</li>*/}
              {/*<li>Fraza</li>*/}
              {/*<li>Artline</li>*/}
              {/*<li>HL7</li>*/}
            {/*</ul>*/}
          {/*</section>*/}
          {/*<section>*/}
            {/*<h2>About Us</h2>*/}
            {/*<p>Over ten years of experience designing and developing web applications. We enjoy bringing interactive single page applications to life.</p>*/}
            {/*<ul>*/}
              {/*<li>*/}
                {/*<h3>Nathan Olmstead</h3>*/}
              {/*</li>*/}
              {/*<li>*/}
                {/*<h3>Micah Lunt</h3>*/}
              {/*</li>*/}
            {/*</ul>*/}
          {/*</section>*/}
        </main>
        <footer>
          <div className="footer-container">
            <p>&copy; A2uned Solutions LLC</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
