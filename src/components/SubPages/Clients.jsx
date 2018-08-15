import React from 'react';

import Button from '@material-ui/core/Button';

import lakewares from '../../images/lakewares.png';
import fraza from '../../images/fraza.png';
import metzgers from '../../images/metzgers.png';
import hl7 from '../../images/hlz.gif';

const Clients = () => {
  return (
    <div className="page-content">
      <p className="content-intro">We aren't even a year old yet and we already have some amazing clients.</p>
      <h2 className="small-title">Have an interesting project? <Button variant="contained" color="primary">Let's Talk</Button></h2>
      <ul className="grid-list image-grid">
        <li>
          <a href="/">
            <img src={lakewares} alt="Lakewares" />
            <h2>Lake Apparel</h2>
          </a>
        </li>
        <li>
          <a href="/">
            <img src={fraza} alt="Fraza Group" />
            <h2>Forklifts &amp; Training</h2>
          </a>
        </li>
        <li>
          <a href="/">
            <img src={metzgers} alt="Metzger's" />
            <h2>Ann Arbor Restaurant</h2>
          </a>
        </li>
        <li>
          <a href="/">
            <img src={hl7} alt="Health Level Seven" />
            <h2>Health Level Seven</h2>
          </a>
        </li>
      </ul>
    </div>
  )
};

export default Clients;
