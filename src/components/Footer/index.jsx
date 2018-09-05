import React, { Component } from 'react';

import config from "../../../data/SiteConfig";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer-container">
          <ul className="social no-list">
            <li>
              <a href="https://twitter.com/a2uned" title="Twitter">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/micahlunt" title="GitHub">
                <i className="fa fa-github"></i>
              </a>
            </li>
          </ul>
          <div className="copy-creds" itemScope itemType="http://schema.org/Store">
            &copy;
            <span itemProp="name">{config.schemaMetadata.name}</span>
            <div className="no-show" itemScope itemType="http://schema.org/PostalAddress">
              <span itemProp="name">{config.schemaMetadata.name}</span>
              <span itemProp="addressRegion">{config.schemaMetadata.addressRegion}</span>
              <span itemProp="addressCountry">{config.schemaMetadata.addressCountry}</span>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
