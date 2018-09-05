import React, { Component } from "react";
import ContactFormDrawer from '../ContactForm/index';
import lakewares from '../../../static/assets/lakewares.png';
import fraza from '../../../static/assets/fraza.png';
import metzgers from '../../../static/assets/metzgers.png';
import hl7 from '../../../static/assets/hlz.gif';
import artline from '../../../static/assets/artline.png';

class Clients extends Component {
  render() {
    return (
      <div className="page-content" id="main-content">
        <p className="content-intro">We aren't even a year old yet and we already have some amazing clients.</p>
        <div className="highlight-content">
          <div className="background">
            <h2 className="small-title text">Have an interesting project?</h2>
            <ContactFormDrawer button={true} />
          </div>
        </div>
        <ul className="grid-list image-grid">
          <li>
            <a href="https://lakewares.com/">
              <img src={lakewares} alt="Lakewares" />
              <h2>Lake Apparel</h2>
            </a>
          </li>
          <li>
            <a href="https://frazagroup.com/">
              <img src={fraza} alt="Fraza Group" />
              <h2>Forklifts &amp; Training</h2>
            </a>
          </li>
          <li className="wip">
            <a href="http://artlinegroup.com/">
              <img src={artline} alt="Artline Group" />
              <h2>Custom Art</h2>
            </a>
          </li>
          <li>
            <a href="http://www.hl7.org/index.cfm">
              <img src={hl7} alt="Health Level Seven" />
              <h2>Health Level Seven</h2>
            </a>
          </li>
          <li>
            <a href="https://metzgers.net">
              <img src={metzgers} alt="Metzger's" />
              <h2>Ann Arbor Restaurant</h2>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Clients;
