import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer-container">
          <ul className="social">
            <li>
              <a href="https://twitter.com/a2uned" target="_blank" rel="noopener noreferrer"  title="Twitter">
                <i className="fab fa-twitter" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/micahlunt" target="_blank" rel="noopener noreferrer"  title="GitHub">
                <i className="fab fa-github"></i>
              </a>
            </li>
          </ul>
          <p className="copy-creds">&copy; A2uned Solutions LLC</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
