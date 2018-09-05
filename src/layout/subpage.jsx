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
      component: null
    };
  }

  componentDidMount() {

    this.getLocalTitle();

    setTimeout(
      function() {
        this.setState({ loaded: true });
      }.bind(this), 300
    );
  }

  getLocalTitle() {
    const pageKey = this.props.pageData.key
      .replace("/", "");
    if (pageKey === "") {
        this.setState({ component: null });
    } else if (pageKey === "services") {
        this.setState({ component: <Services /> });
    } else if (pageKey === "clients") {
        this.setState({ component: <Clients /> });
    } else if (pageKey === "about-us") {
        this.setState({ component: <AboutUs /> });
    }
  }

  render() {

    const { loaded, component } = this.state;
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
        {component}
      </section>
    );
  }
}

export default SubPage;
