import React from 'react';
import Button from '@material-ui/core/Button'

const Services = (props) => {
  return (
    <div className="page-content" id="main-content">
      <div className="page-intro">
        <p>We offer a variety of professional services. But our bread and butter is user interface design and development. We are passionate about aesthetically pleasing, enjoyable user experiences.</p>
        <p>From full site redesigns to single feature requests, logo designs to cloud hosting, testing to deliverable documents. <strong>Our Team is here to Provide Value to your Businesses Online Presence.</strong></p>
      </div>
      <div className="service-listings">
        <header className="listing-heading">
          <h2>Services We Provide:</h2>
          <p className="key"><i className="far fa-file-alt"></i>&nbsp; Deliverable Document</p>
        </header>
        <ul className="grid-list">
          <li>
            <h2>Development</h2>
            <ul>
              <li>Interface Development</li>
              <li>Software Engineering</li>
              <li>SEO Technical Implementation</li>
              <li>API Development &amp; Integration</li>
              <li>Single Page Applications (SPAs)</li>
              <li>Custom Content Management Systems (CMS)</li>
              <li>Ecommerce Solutions</li>
            </ul>
          </li>
          <li>
            <h2>Branding <span className="thin">&amp;</span> Design</h2>
            <ul>
              <li>Application Interface Design</li>
              <li>Site Interface Design</li>
              <li>Interface Feature Design</li>
              <li>Business Brand</li>
              <li>Personal Brand</li>
              <li>Logo Design</li>
            </ul>
          </li>
          <li>
            <h2>User Experience (UX)</h2>
            <ul>
              <li>Heuristic Evaluation <i className="far fa-file-alt"></i></li>
              <li>User Research <i className="far fa-file-alt"></i></li>
              <li>Personas <i className="far fa-file-alt"></i></li>
              <li>Competitive Analysis <i className="far fa-file-alt"></i></li>
              <li>Wireframes <i className="far fa-file-alt"></i></li>
              <li>User Interface Specifications <i className="far fa-file-alt"></i></li>
              <li>Sitemaps <i className="far fa-file-alt"></i></li>
              <li>Prototypes</li>
              <li>User Testing <i className="far fa-file-alt"></i></li>
              <li>A/B Testing <i className="far fa-file-alt"></i></li>
            </ul>
          </li>
          <li>
            <h2>Testing <span className="thin">&amp;</span> Site Audits</h2>
            <ul>
              <li>Quality Assurance Testing</li>
              <li>Quality Assurance Audit <i className="far fa-file-alt"></i></li>
              <li>SEO Audit <i className="far fa-file-alt"></i></li>
              <li>Accessibility Audit <i className="far fa-file-alt"></i></li>
            </ul>
            <h2 className="second-level-list">DevOps</h2>
            <ul>
              <li>Cloud based Hosting</li>
              <li>Site Monitoring</li>
              <li>Analytics</li>
            </ul>
          </li>
        </ul>
        <div className="highlight-content">
          <div className="background">
            <h2 className="small-title text">Looking for a service that isn't listed here?</h2>
            <Button variant="contained" color="primary" onClick={props.toggleDrawer('contactDrawer', true)}>We might be able to help</Button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Services;
