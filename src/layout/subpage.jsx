import React, { Component } from "react";
import Helmet from "react-helmet";

import AboutUs from '../components/SubPages/about-us';
import Clients from '../components/SubPages/clients';
import Services from '../components/SubPages/services';

class SubPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
    };
  }

  componentDidMount() {
    setTimeout(
      function() {
        this.setState({ loaded: true });
      }.bind(this), 300
    );
  }

  render() {

    const { loaded } = this.state;
    const { title, key, seoTitle, seoDescription, canonical } = this.props.pageData;

    return (
      <section className={`${key} sub-page ${loaded && 'loaded'}`}>
        <Helmet>
          <title>{seoTitle}</title>
          <meta name="description" content={seoDescription} />
          <link rel="canonical" href={canonical} />
        </Helmet>
        <header className="page-header">
          <h1>{title}</h1>
          <span className="border"></span>
        </header>
        { key === "services" && <Services /> }
        { key === "clients" && <Clients /> }
        { key === "about-us" && <AboutUs /> }
      </section>
    );
  }
}

export default SubPage;
