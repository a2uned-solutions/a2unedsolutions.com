import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer-container">
          <ul className="social no-list">
            <li>
              <a href="https://twitter.com/a2uned" title="Twitter">
                <i className="fab fa-twitter" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/micahlunt" title="GitHub">
                <i className="fab fa-github"></i>
              </a>
            </li>
          </ul>
          <div className="copy-creds" itemScope itemType="http://schema.org/Store">
            &copy;
            <span itemProp="name">A2uned Solutions LLC</span>
            <div className="no-show" itemScope itemType="http://schema.org/PostalAddress">
              <span itemProp="name">A2uned Solutions LLC.</span>
              <span itemProp="addressRegion">MI</span>
              <span itemProp="addressCountry">United States</span>
            </div>
          </div>
          <p className="notice">
            <a href="https://www.a2uned.io">Interested in Blockchain Technology? So are we.</a>
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
